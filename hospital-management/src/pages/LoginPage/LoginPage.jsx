import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
export function LoginPage() {
  const navigate = useNavigate();
  return (
    <>
      <section className="login-page">
        <div className="login-header">
          <h1>Welcome to MediCare</h1>
          <p>Hospital Management System</p>
        </div>
        <div className="role-container">
          <div className="role-card">
            <div className="role-icon">👤</div>

            <h2>Patient</h2>

            <p>Book appointments and manage your health records.</p>

            <button onClick={() => navigate("/patient-login")}>
              Patient Login
            </button>
          </div>

          <div className="role-card">
            <div className="role-icon">👨‍⚕️</div>

            <h2>Doctor</h2>

            <p>Manage appointments and view patient information.</p>

            <button onClick={() => navigate("/doctorlogin")}>
              Doctor Login
            </button>
          </div>

          <div className="role-card">
            <div className="role-icon">🔐</div>

            <h2>Admin</h2>

            <p>Manage hospital operations and system information.</p>

            <button onClick={() => navigate("/admin-login")}>
              Admin Login
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
