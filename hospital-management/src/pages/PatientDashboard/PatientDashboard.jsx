import "./PatientDashboard.css";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PatientContext } from "../../context/PatientContext";
export function PatientDashboard() {
  const navigate = useNavigate();
  const { currentPatient, setCurrentPatient } = useContext(PatientContext);
  useEffect(() => {
    if (!currentPatient) {
      navigate("/patient-login");
    }
  }, [currentPatient, navigate]);
  if (!currentPatient) {
    return null;
  }
  function handleLogout() {
    setCurrentPatient(null);
    navigate("/patient-login");
  }

  return (
    <>
      <section className="dash-board">
        <div className="side-bar">
          <h2>MediCare</h2>
          <nav>
            <button>🏠 Dashboard</button>
            <button onClick={() => navigate("/my-appointments")}>
              📅 Appointments
            </button>
            <button onClick={() => navigate("/medical-history")}>
              🩺 Medical History
            </button>
            <button onClick={() => navigate("/profile")}>👤 Profile</button>
            <button onClick={handleLogout}>🚪 Logout</button>
          </nav>
        </div>
        <div className="main-content">
          <h1>Welcome, {currentPatient.fullName} 👋</h1>

          <section className="upcoming-appointment">
            <h2>Upcoming Appointment</h2>

            <p>Dr. Arun Kumar</p>
            <p>Cardiology</p>
            <p>25 Sep 2026 | 10:30 AM</p>

            <button className="view-app">View Appointment</button>
          </section>

          <section className="dashboard-cards">
            <div className="dashboard-card">
              <h3>Appointments</h3>
              <p>2</p>
            </div>

            <div className="dashboard-card">
              <h3>Medical History</h3>
              <p>5</p>
            </div>
          </section>

          <button
            className="book-appointment-button"
            onClick={() => navigate("/book-appoint")}
          >
            + Book Appointment
          </button>
        </div>
      </section>
    </>
  );
}
