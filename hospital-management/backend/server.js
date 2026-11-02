const bcrypt = require("bcrypt");
const MedicalRecord = require("./models/MedicalRecord");
const Patient = require("./models/Patient");
const Appointment = require("./models/Appointment");
const Doctor = require("./models/Doctor");
const Admin = require("./models/Admin");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.post("/api/patients/register", async (req, res) => {
  try {
    const { password } = req.body;
    const hashedpassword = await bcrypt.hashed(password, 10);

    const patient = await Patient.create({
      ...req.body,
      password: hashedpassword,
    });
    const safepatient = patient.toObject();
    delete safepatient.password;
    res.json({
      message: "patient registration data received",
      patient: patient,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "patient registration failed",
    });
  }
});

app.post("/api/patients/login", async (req, res) => {
  const { email, password } = req.body;
  const patient = await Patient.findOne({
    email: email,
  });
  if (!patient) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isPasswordvalid = await bcrypt.compare(password, patient.password);

  if (!isPasswordvalid) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }
  const safepatient = patient.toObject();
  delete safepatient.password;

  res.json({
    message: "patient login successful",
    patient: safepatient,
  });
});

app.post("/api/doctor/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await Doctor.findOne({ email: email, password: password });
    if (!doctor) {
      return res
        .status(401)
        .json({ message: "invalid doctor mail or password" });
    }
    res.json({
      message: "Doctor login successful",
      doctor: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "doctor login failed",
    });
  }
});

app.post("/api/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email, password });
    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.json({
      message: "Admin login successful",
      admin: admin,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "admin login failed",
    });
  }
});

app.get("/api/patients/profile", async (req, res) => {
  const { email } = req.query;
  const patient = await Patient.findOne({ email: email });
  if (!patient) {
    return res.status(404).json({ msg: "Patient not found" });
  }
  res.json({
    message: "patient profile fetched successfully",
    patient: patient,
  });
});
app.get("/api/patients/:id", async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({
        message: "Patient not found",
      });
    }
    res.json({ patient });
  } catch (error) {
    res.status(400).json({ message: "Invalid patient id" });
  }
});

app.post("/api/appointments", async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);

    res.json({
      message: "appointment booked successfully",
      appointment: appointment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "appointment registration failed",
    });
  }
});

app.get("/api/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("patientId");
    res.json({
      appointments: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to fetch appointments",
    });
  }
});

app.get("/api/medical-records/patient/:patientId", async (req, res) => {
  try {
    const records = await MedicalRecord.find({
      patientId: req.params.patientId,
    });
    res.json({
      records: records,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to fetch medical records",
    });
  }
});

app.get("/api/appointments/patient/:patientId", async (req, res) => {
  try {
    const appointments = await Appointment.find({
      patientId: req.params.patientId,
    }).populate("patientId");

    res.json({
      appointments: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to fetch patient appointments",
    });
  }
});

app.post("/api/doctor/create", async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.json({
      message: "doctor created successfully",
      doctor: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "doctor creating failed",
    });
  }
});

app.get("/api/admin/stats", async (req, res) => {
  try {
    const totalPatients = await Patient.countDocuments();
    const totalDoctors = await Doctor.countDocuments();
    const totalAppointments = await Appointment.countDocuments();
    res.json({
      totalPatients,
      totalDoctors,
      totalAppointments,
    });
  } catch (error) {
    console.error("error fetch admin statistics:", error);
    res.status(500).json({
      message: "Failed to fetch dashboard statistics",
    });
  }
});

app.get("/api/admin/patients", async (req, res) => {
  try {
    const patients = await Patient.find().select("-password");
    res.json({ patients: patients });
  } catch (error) {
    console.error("error fetching patients: ", error);
    res.status(500).json({ message: "failed to fetch patients" });
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongodb connected successfully");
  })
  .catch((error) => {
    console.log("mongodb connection failed:", error);
  });

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
