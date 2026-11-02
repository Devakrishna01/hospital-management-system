import "./BookAppointment.css";
import { useState, useContext } from "react";
import { AppointmentContext } from "../../context/AppointmentContext";
import { PatientContext } from "../../context/PatientContext";
import { useNavigate } from "react-router-dom";
export function BookAppointment() {
  const [speciality, setSpeciality] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [appointment, setAppointment] = useState(null);
  const { setAppointments } = useContext(AppointmentContext);
  const { currentPatient } = useContext(PatientContext);
  const navigate = useNavigate();
  function handleConfirmAppointment() {
    console.log("Current patient:", currentPatient);
    setError("");
    if (!currentPatient?._id) {
      setError("Please log in before booking and appointment");
      return;
    }
    if (speciality === "") {
      setError("speciality is empty");
    } else if (doctor === "") {
      setError("doctor is empty");
    } else if (date === "") {
      setError("date is empty");
    } else if (time === "") {
      setError("time is empty");
    } else if (reason === "") {
      setError("reason is empty");
    } else {
      const newAppointment = {
        speciality,
        doctor,
        date,
        time,
        reason,
        patientId: currentPatient._id,
      };

      setAppointment(newAppointment);
      setConfirmed(true);
    }
  }
  async function handleFinalConfirm() {
    try {
      setError("");
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointment),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to book appointment");
      }
      setAppointments((previousAppointments) => [
        ...previousAppointments,
        data.appointment,
      ]);

      console.log(data);
      navigate("/my-appointments");
    } catch (error) {
      console.error("error booking");
      setError(error.message || "unable to book appointment");
    }
  }

  return (
    <>
      <section className="book-appointment-page">
        <div className="appointment-header">
          <h1>Book an Appointment</h1>
          <p>Schedule an appointment with our doctors</p>
        </div>
        {!confirmed ? (
          <div className="appointment-form">
            <div className="form-group">
              <label>Speciality</label>

              <select
                value={speciality}
                onChange={(e) => {
                  setSpeciality(e.target.value);
                }}
              >
                <option value="">Select Speciality</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
                <option>Dermatology</option>
                <option>General Medicine</option>
              </select>
            </div>

            <div className="form-group">
              <label>Doctor</label>

              <select
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
              >
                <option value="">Select Doctor</option>
                <option>Dr. Arun Kumar</option>
                <option>Dr. Priya Sharma</option>
                <option>Dr. Raj Kumar</option>
                <option>Dr. Meena Devi</option>
              </select>
            </div>

            <div className="form-group">
              <label>Date</label>

              <input
                value={date}
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Time</label>

              <select value={time} onChange={(e) => setTime(e.target.value)}>
                <option value="">Select Time</option>
                <option>09:00 AM</option>
                <option>10:30 AM</option>
                <option>12:00 PM</option>
                <option>02:00 PM</option>
                <option>04:30 PM</option>
              </select>
            </div>

            <div className="form-group">
              <label>Reason for Visit</label>

              <textarea
                placeholder="Enter the reason for your appointment"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              ></textarea>
            </div>
            <p>{error}</p>
            <button
              onClick={handleConfirmAppointment}
              className="confirm-appointment"
            >
              Confirm Appointment
            </button>
          </div>
        ) : (
          <div className="appointment-confirmation">
            <h2>Appointment Confirmed</h2>

            <p>Your appointment has been successfully scheduled.</p>

            <div className="appointment-details">
              <p>
                <strong>Speciality:</strong> {appointment.speciality}
              </p>

              <p>
                <strong>Doctor:</strong> {appointment.doctor}
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

            <button
              onClick={handleFinalConfirm}
              className="final-confirm-button"
            >
              Confirm
            </button>
          </div>
        )}
      </section>
    </>
  );
}
