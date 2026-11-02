import "./AdminLogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  async function handleLogin() {
    setError("");

    if (email === "") {
      setError("Please enter your email");
    } else if (password === "") {
      setError("Please enter your password");
    } else {
      const response = await fetch("http://localhost:5000/api/admin/login", {
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
        navigate("/admin-dashboard");
      } else {
        setError(data.message);
      }
    }
  }
  return (
    <section className="admin-login-page">
      <h1>Admin Login</h1>

      <div className="admin-login-form">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button onClick={handleLogin}>Login</button>
      </div>
    </section>
  );
}
