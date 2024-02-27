const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name:String,
  emailId:String,
  class:Number,
  mentors:[String]
});
module.exports = mongoose.model('students', studentSchema);