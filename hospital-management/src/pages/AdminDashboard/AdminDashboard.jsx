import "./AdminDashboard.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function AdminDashboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalPatients: 0,
    totalDoctors: 0,
    totalAppointments: 0,
  });
  const [patientlist, setPatientList] = useState(false);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [showAppointments, setShowAppointments] = useState(false);
  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("http://localhost:5000/api/admin/stats");
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "failed to fetch statistics");
        }
        setStats(data);
      } catch (error) {
        console.log("error fetching admin statistics: ", error);
      }
    }
    fetchStats();
  }, []);
  async function handleAddDoctor(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/doctor/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      setEmail("");
      setPassword("");
      setName("");
      const statsresponse = await fetch(
        "http://localhost:5000/api/admin/stats",
      );
      const updatedstats = await statsresponse.json();
      if (statsresponse.ok) {
        setStats(updatedstats);
      }
    }
  }
  async function fetchingPatientList() {
    try {
      const response = await fetch("http://localhost:5000/api/admin/patients");
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "failed to fetch patients");
      }
      setPatients(data.patients);
    } catch (error) {
      console.error("error fetching patients: ", error);
    }
  }
  async function fetchingAppointments() {
    try {
      const response = await fetch("http://localhost:5000/api/appointments");
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "failed to fetch appointments");
      }
      setAppointments(data.appointments);
    } catch (error) {
      console.error("failed to fetch appointments: ", error);
    }
  }

  return (
    <section className="admin-dashboard">
      <h1>Welcome, Admin 👋</h1>

      <section className="admin-cards">
        <div className="admin-card">
          <h2>Total Patients</h2>
          <p>{stats.totalPatients}</p>
        </div>

        <div className="admin-card">
          <h2>Total Doctors</h2>
          <p>{stats.totalDoctors}</p>
        </div>

        <div className="admin-card">
          <h2>Appointments</h2>
          <p>{stats.totalAppointments}</p>
        </div>
      </section>
      <section className="patient-list">
        <button
          onClick={() => {
            if (!patientlist) {
              fetchingPatientList();
            }
            setPatientList(!patientlist);
          }}
        >
          Patient's List
        </button>
        {patientlist &&
          (patients.length === 0 ? (
            <p>patients empty</p>
          ) : (
            patients.map((patient) => (
              <div className="patient-card" key={patient._id}>
                <h3>{patient.fullName}</h3>
                <p>Email: {patient.email}</p>
                <p>Phone: {patient.phonenumber}</p>
                <p>Gender: {patient.gender}</p>
                <p>Registration Date: {patient.date}</p>
              </div>
            ))
          ))}
      </section>

      <section className="appointmentList">
        <button
          onClick={() => {
            if (!showAppointments) {
              fetchingAppointments();
            }
            setShowAppointments(!showAppointments);
          }}
        >
          Appointment's List
        </button>
        {showAppointments &&
          (appointments.length === 0 ? (
            <p>appointment is empty</p>
          ) : (
            appointments.map((appointment) => (
              <div className="appointment-card" key={appointment._id}>
                <h3>
                  {appointment.patientId?.fullName || "Patient unavailable"}
                </h3>
                <p>Doctor: {appointment.doctor}</p>
                <p>Speciality: {appointment.speciality}</p>
                <p>Date: {appointment.date}</p>
                <p>Time: {appointment.time}</p>
                <p>Reason: {appointment.reason}</p>
              </div>
            ))
          ))}
      </section>

      <section className="admin-adddoctor">
        <form onSubmit={handleAddDoctor} className="admin-doctor">
          <label>Doctor Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter the name"
          ></input>
          <label>Doctor Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter the email"
          ></input>
          <label>Doctor Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter the password"
          ></input>
          <button type="submit">Add Doctor</button>
        </form>
        <button
          className="admin-logout-button"
          onClick={() => navigate("/admin-login")}
        >
          Logout
        </button>
      </section>
    </section>
  );
}
