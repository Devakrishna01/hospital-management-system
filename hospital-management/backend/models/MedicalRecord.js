const mongoose = require("mongoose");
const medicalRecordSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  department: String,
  diagnosis: String,
  prescription: String,
});

const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);

module.exports = MedicalRecord;
