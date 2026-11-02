import "./MyAppointments.css";
import { useState, useEffect, useContext } from "react";
import { PatientContext } from "../../context/PatientContext";
export function MyAppointments() {
  const { currentPatient } = useContext(PatientContext);
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    async function fetcheddata() {
      const response = await fetch(
        `http://localhost:5000/api/appointments/patient/${currentPatient._id}`,
      );
      const data = await response.json();
      console.log(data);
      setAppointments(data.appointments);
    }
    fetcheddata();
  }, [currentPatient]);

  return (
    <section className="my-appointments-page">
      <h1>My Appointments</h1>

      {appointments.map((appointment) => (
        <div className="appointment-card" key={appointment._id}>
          <h2>{appointment.doctor}</h2>

          <p>
            <strong>Speciality:</strong> {appointment.speciality}
          </p>

          <p>
            <strong>Date:</strong> {appointment.date}
          </p>

          <p>
            <strong>Time:</strong> {appointment.time}
          </p>

          <p>
            <strong>Reason:</strong> {appointment.reason}
          </p>
        </div>
      ))}
    </section>
  );
}
