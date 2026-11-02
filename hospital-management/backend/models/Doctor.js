const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
});
const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
