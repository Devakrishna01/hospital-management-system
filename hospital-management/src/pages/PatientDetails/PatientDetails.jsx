import "./PatientDetails.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
export function PatientDetails() {
  const location = useLocation();
  const patientId = location.state?.patientId;
  const [patient, setPatient] = useState(null);
  const [error, setError] = useState("");
  console.log("selected patient id", patientId);

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchPatient() {
      try {
        if (!patientId) {
          setError("No patient selected");
          return;
        }
        const response = await fetch(
          `http://localhost:5000/api/patients/${patientId}`,
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "failed to fetch patient");
        }
        setPatient(data.patient);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchPatient();
  }, [patientId]);

  return (
    <section className="patient-details-page">
      <h1>Patient Details</h1>
      {error && <p>{error}</p>}

      {patient && (
        <div>
          <h2>{patient.fullName}</h2>
          <p>Email: {patient.email}</p>
          <p>Phone: {patient.phonenumber}</p>
          <p>Gender: {patient.gender}</p>
          <p>Date of Birth: {patient.date}</p>
        </div>
      )}

      <button onClick={() => navigate("/doctor-dashboard")}>
        Back to Dashboard
      </button>
    </section>
  );
}
