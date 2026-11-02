import "./DoctorDashboard.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
export function DoctorDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const doctor = location.state?.doctor;
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    async function fetchAppointments() {
      const response = await fetch("http://localhost:5000/api/appointments");
      const data = await response.json();
      console.log(data);
      setAppointments(data.appointments);
    }
    fetchAppointments();
  }, []);
  return (
    <section className="doctor-dashboard">
      <h1>Doctor Dashboard</h1>

      <h1>Welcome, {doctor?.name || "Doctor"} 👋</h1>

      <section className="today-appointments">
        <h2>Today's Appointments</h2>
        {appointments.map((appointment) => (
          <div className="appointment-card" key={appointment._id}>
            <h3>
              {appointment.patientId?.fullName || "patient name unavailable"}
            </h3>
            <p>{appointment.time}</p>
            <p>{appointment.speciality}</p>
            <p>Doctor:{appointment.doctor}</p>

            <button
              onClick={() =>
                navigate("/patient-details", {
                  state: { patientId: appointment.patientId?._id },
                })
              }
            >
              View Patient
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}
