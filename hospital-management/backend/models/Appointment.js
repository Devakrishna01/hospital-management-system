const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema({
  speciality: String,
  doctor: String,
  date: String,
  time: String,
  reason: String,
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
