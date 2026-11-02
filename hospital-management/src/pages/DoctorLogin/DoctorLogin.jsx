import "./DoctorLogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function DoctorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handlelogin() {
    setError("");
    if (email === "") {
      setError("Please enter your email");
    } else if (password === "") {
      setError("Please enter your password");
    } else {
      const response = await fetch("http://localhost:5000/api/doctor/login", {
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
      if (response.ok) {
        navigate("/doctor-dashboard", {
          state: { doctor: data.doctor },
        });
      } else {
        setError(data.message);
      }
    }
  }
  return (
    <section className="doctor-login-page">
      <h1>Doctor's Login Page</h1>
      <div className="doctor-login-form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Email"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
        />
        {error && <p>{error}</p>}
        <button onClick={handlelogin}>Login</button>
      </div>
    </section>
  );
}
