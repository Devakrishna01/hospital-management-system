import "./Navbar.css";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="hospitalnavbar">Medicare Hospital</div>
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#">Facilities</a>
          <a href="#">Treatments</a>
          <a href="#">Doctors</a>
          <a href="#">Contact</a>
          <Link to="/login" className="login-button">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
