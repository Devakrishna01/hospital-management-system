const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phonenumber: Number,
  date: String,
  gender: String,
  password: String,
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
