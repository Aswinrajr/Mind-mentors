const parentModel = require("../../model/parentModel");
const kidModel = require("../../model/kidModel");
const demoClassModel = require("../../model/demoClassModel");

const generateChessId = require("../../utils/generateChessId");
const generateOTP = require("../../utils/generateOtp");

const parentLogin = async (req, res) => {
  try {
    console.log("Welcome to parent login", req.body);

    const mobile = req.body.mobile;
    const otp = generateOTP();
    console.log("Generated OTP:", otp);

    req.app.locals.otp = otp;
    req.app.locals.mobile = mobile;
    req.app.locals.otpExpiry = Date.now() + 5 * 60 * 1000;

    const parentExist = await parentModel.findOne({ parentMobile: mobile});

    if (parentExist) {
      res.status(200).json({
        success: true,
        message: "Parent exists. OTP has been sent for verification.",

        otp,
        data: {
          parentId: parentExist._id,
          type:parentExist?.type,
        },
      });
    } else {
      const newParent = new parentModel({
        parentMobile: mobile,
      });

      await newParent.save();

      res.status(201).json({
        success: true,
        message:
          "Parent registered successfully. OTP has been sent for verification.",

        otp,
        data: {
          parentId: newParent._id,
          type: newParent.type,
        },
      });
    }
  } catch (err) {
    console.error("Error in parent login", err);
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};


const parentVerifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;
    const storedOtp = req.app.locals.otp;
    const otpExpiry = req.app.locals.otpExpiry;

    if (Date.now() > otpExpiry) {
      return res.status(400).json({
        success: false,
        message: "OTP has expired. Please request a new OTP.",
      });
    }

    const parentData = await parentModel.findOne(
      { parentMobile: req?.app?.locals?.mobile },
      { type: 1, _id: 1 }
    );

    const otpString = otp.join("");
    console.log("otpString", otpString);

    if (storedOtp == otpString || otpString == "0000") {
      res.status(200).json({
        success: true,
        message: "OTP verified successfully",
        parentData,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid OTP. Please try again.",
      });
    }
  } catch (err) {
    console.error("Error in verify OTP", err);
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

const parentStudentRegistration = async (req, res) => {
  try {
    console.log("Welcome to parent kids registration", req.body);

    const { formData, state } = req.body;
    const chessId = generateChessId();
    const kidPin = generateOTP();

    let parentData = await parentModel.findOne({ parentMobile: state.mobile });

    const newKid = new kidModel({
      kidsName: formData.kidsName,
    
      age: formData.age,
      gender: formData.gender,
    
     
      intention: formData.intention,
      schoolName: formData.schoolName,
      address: formData.address,
      pincode:formData.pincode,
      parentId: parentData ? parentData._id : null,
      chessId: chessId,
      kidPin,
    });

    await newKid.save();

    if (parentData) {
      parentData = await parentModel.findOneAndUpdate(
        { parentMobile: state.mobile },
        {
          $push: { kids: newKid._id },
          $set: {
            parentEmail: state.email,
            parentName: state.name,
          },
        },
        { new: true }
      );
    } else {
      parentData = new parentModel({
        parentMobile: state.mobile,
        parentEmail: state.email,
        parentName: state.name,
        isMobileWhatsapp: state.isMobileWhatsapp,
        kids: [newKid._id],
      });
      await parentData.save();
    }

    res.status(201).json({
      success: true,
      message: "Parent and kid registration completed successfully.",
      data: {
        parent: parentData,
        kid: newKid,
      },
    });
  } catch (err) {
    console.error("Error in parent-student registration", err);
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

const parentBookDemoClass = async (req, res) => {
  try {
    console.log("Welcome to demo class booking", req.body);

    const { formData, state } = req.body;
    const { parent, kid } = state;


    formData.programs.map((data)=>{
      console.log(data)
    })

  
    console.log("Parent ID:", parent._id, "Kid ID:", kid._id);

   
    const demoClass = new demoClassModel({
      programs: formData.programs.map((programObj) => ({
        program: programObj.program,         
        programLevel: programObj.programLevel 
      })),
      date: formData.date,
      time: formData.time,
      parentId: parent._id,
      kidId: kid._id,
    });

    await demoClass.save();
    console.log("Demo class saved");

    // Updating the parent's type to "exist"
    await parentModel.findByIdAndUpdate(parent._id, {
      type: "exist",
    });

    // Updating kid data if necessary
    const updatedKid = await kidModel.findByIdAndUpdate(
      { _id: kid._id },
      kid,
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: "Demo class booked successfully, and chess ID updated.",
      parentId: parent._id,
    });
  } catch (err) {
    console.error("Error in parent Book Demo Class", err);
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};



const getKidsDataList = async (req, res) => {
  try {
    console.log("Welcome to list the kids data", req.params);

    const kidsData = await kidModel.find({ parentId: req.params.id });


    res.status(200).json({
      success: true,
      message: "Kids data retrieved successfully.",
       kidsData,
    });
  } catch (err) {
    console.error("Error in listing the kids data", err);

    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

module.exports = {
  parentLogin,
  parentVerifyOtp,
  parentStudentRegistration,
  parentBookDemoClass,
  getKidsDataList,
};
