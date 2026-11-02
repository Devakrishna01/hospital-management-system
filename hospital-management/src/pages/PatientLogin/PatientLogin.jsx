import "./PatientLogin.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PatientContext } from "../../context/PatientContext";
export function PatientLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setCurrentPatient } = useContext(PatientContext);

  async function handleLogin() {
    setError("");
    if (email === "") {
      setError("please enter your email");
    } else if (password === "") {
      setError("please enter your password");
    } else {
      const response = await fetch("http://localhost:5000/api/patients/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      /* const foundpatient = patients.find(
        (patient) => patient.email === email && patient.password === password,
      );
      if (foundpatient) {
        setCurrentPatient(foundpatient);
        navigate("/patient-dashboard");
      } else {
        setError("enter valid details");
      }
        */
      if (response.ok) {
        setCurrentPatient(data.patient);
        navigate("/patient-dashboard");
      } else {
        setError(data.message);
      }
    }
  }

  return (
    <section className="patient-loginpage">
      <div className="page-header">
        <h2>Patient Login</h2>
        <p>Login to your Medicare account</p>
      </div>
      <div className="login-details">
        <label>Email</label>
        <input
          type="text"
          placeholder="enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p>{error}</p>
        <button onClick={handleLogin}>Login</button>
        <p className="register-text">
          New Patient?{" "}
          <span onClick={() => navigate("/patient-reg")}>Register here</span>
        </p>
      </div>
    </section>
  );
}
