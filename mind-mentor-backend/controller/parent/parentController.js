const parentModel = require("../../model/parentModel");
const kidModel = require("../../model/kidModel")
const generateChessId = require("../../utils/generateChessId");
const generateOTP = require("../../utils/generateOtp");

const parentLogin = async (req, res) => {
  try {
    console.log("Welcome to parent login", req.body);

    const mobile = req.body.mobile;
    const otp = generateOTP();
    console.log("Generated OTP:", otp);

    req.app.locals.otp = otp;
    req.app.locals.otpExpiry = Date.now() + 5 * 60 * 1000;

    const parentExist = await parentModel.findOne({ parentMobile: mobile });

    if (parentExist) {
      res.status(200).json({
        success: true,
        message: "Parent exists. OTP has been sent for verification.",

        otp,
        data: {
          parentId: parentExist._id,
          type: "exist",
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
          type: "new",
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

    
        const otpString = otp.join('');
        console.log("otpString",otpString)

        if (storedOtp == otpString) {
            res.status(200).json({
                success: true,
                message: "OTP verified successfully. Proceeding to dashboard.",
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
            firstName: formData.firstName,
            lastName: formData.lastName,
            age: formData.age,
            gender: formData.gender,
            programs: formData.programs,
            chessLevel: formData.chessLevel,
            intention: formData.intention,
            schoolName: formData.schoolName,
            address: formData.address,
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
                        parentEmail: state.email ,
                        parentName: state.name
                    }
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



const parentBookDemoClass = async(req,res)=>{
    try{
        console.log("welcome to parent Book Demo Class",req.body)

    }catch(err){
        console.log("Error in parent Book Demo Class",err)
    }
}











module.exports = {
  parentLogin,
  parentVerifyOtp,
  parentStudentRegistration,
  parentBookDemoClass
};
