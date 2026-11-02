import "./Profile.css";
import { useContext, useState, useEffect } from "react";
import { PatientContext } from "../../context/PatientContext";
import { useNavigate } from "react-router-dom";
export function Profile() {
  const navigate = useNavigate();
  const { currentPatient } = useContext(PatientContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      const response = await fetch(
        `http://localhost:5000/api/patients/profile?email=${currentPatient.email}`,
      );
      const data = await response.json();
      console.log(data);
      setProfile(data.patient);
    }
    fetchProfile();
  }, [currentPatient]);
  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <section className="profile-page">
      <h1>My Profile</h1>
      <div className="profile-card">
        <p>
          <strong>Full Name:</strong> {profile.fullName}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {profile.phonenumber}
        </p>
        <p>
          <strong>Date of Birth:</strong> {profile.date}
        </p>
        <p>
          <strong>Gender:</strong> {profile.gender}
        </p>
      </div>
      <button onClick={() => navigate("/patient-dashboard")}>
        Back to Dashboard
      </button>
    </section>
  );
}
