import "./MedicalHistory.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { PatientContext } from "../../context/PatientContext";
export function MedicalHistory() {
  const { currentPatient } = useContext(PatientContext);
  const [medicalRecords, setMedicalRecords] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (!currentPatient?._id) {
      return;
    }
    async function fetchMedicalRecords() {
      try {
        const response = await fetch(
          `http://localhost:5000/api/medical-records/patient/${currentPatient._id}`,
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch medical history");
        }
        setMedicalRecords(data.records);
      } catch (error) {
        console.log("error fetching medical history: ", error);
      }
    }
    fetchMedicalRecords();
  }, [currentPatient]);
  return (
    <section>
      <h1>Medical History</h1>
      <div className="medical-records">
        {medicalRecords.map((record, index) => (
          <div className="medical-card" key={index}>
            <h2>{record.doctor}</h2>
            <p>
              <strong>Date:</strong> {record.date}
            </p>
            <p>
              <strong>Department:</strong> {record.department}
            </p>
            <p>
              <strong>Diagnosis:</strong> {record.diagnosis}
            </p>
            <p>
              <strong>Prescription:</strong> {record.prescription}
            </p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/patient-dashboard")}>
        Back to Dashboard
      </button>
    </section>
  );
}
