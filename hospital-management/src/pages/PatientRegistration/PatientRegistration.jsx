import "./PatientRegistration.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { PatientContext } from "../../context/PatientContext";
export function PatientRegistration() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { setPatients } = useContext(PatientContext);
  const navigate = useNavigate();
  async function handleRegistration() {
    setError("");
    if (fullName === "") {
      setError("fullname is empty");
    } else if (email === "") {
      setError("email is empty");
    } else if (phonenumber === "") {
      setError("phonenumber is empty");
    } else if (date === "") {
      setError("date is empty");
    } else if (gender === "") {
      setError("gender is empty");
    } else if (password === "") {
      setError("password is empty");
    } else if (confirmpassword === "") {
      setError("confirmpassword is empty");
    } else if (password !== confirmpassword) {
      setError("password not matched ");
    } else {
      const newPatient = {
        fullName,
        email,
        phonenumber,
        date,
        gender,
        password,
      };

      const response = await fetch(
        "http://localhost:5000/api/patients/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPatient),
        },
      );
      const data = await response.json();
      console.log(data);

      setPatients((previousPatients) => [...previousPatients, newPatient]);
      navigate("/patient-login");
    }
  }

  return (
    <section className="registration-page">
      <div className="registration-header">
        <h1>Create Patient Account</h1>
        <p>Register to access your MediCare account</p>
      </div>

      <div className="registration-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="tel"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
          />
        </div>

        <div className="form-group">
          <label>Gender</label>

          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Create a password"
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm your password"
          />
        </div>

        <p className="error-message">{error}</p>

        <button className="register-button" onClick={handleRegistration}>
          Create Account
        </button>

        <p className="login-text">
          Already have an account?
          <span onClick={() => navigate("/patient-login")}>Login</span>
        </p>
      </div>
    </section>
  );
}
