const mongoose = require("mongoose");


const demoClassSchema = new mongoose.Schema(
  {
    program: {
      type: String,
      required: true,  // Ensure the program is required
    },
    programLevel: {
      type: String,
      required: true,  
    },
    date: {
      type: Date,
      required: true, 
    },
    time: {
      type: String,
      required: true,  
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Parent",
      required: true, 
    },
    kid: {
      type: mongoose.Schema.Types.ObjectId,  
      ref: "Kid",
      required: true,
    },
  },
  { timestamps: true } 
);

const DemoClass = mongoose.model("DemoClass", demoClassSchema);

module.exports = DemoClass;
