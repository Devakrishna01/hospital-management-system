import "./Doctors.css";
import doc1 from "./doctorsimages/doc1.jpg";
import doc2 from "./doctorsimages/doc2.jpg";
import doc3 from "./doctorsimages/doc3.jpg";
import doc4 from "./doctorsimages/doc4.jpg";
export function Doctors() {
  return (
    <>
      <section className="doctors">
        <div className="doctors-header">
          <h2>Our Doctors</h2>
          <p>Meet our experienced medical professionals</p>
        </div>
        <div className="doctors-container">
          <div className="doctor-card">
            <div className="doctor-profile">
              <img src={doc2} />
            </div>
            <div className="doctor-details">
              <h3>Dr. Kumar</h3>
              <p>Cardiology</p>
            </div>
          </div>
          <div className="doctor-card">
            <div className="doctor-profile">
              <img src={doc1} />
            </div>
            <div className="doctor-details">
              <h3>Dr. Priya</h3>
              <p>Neurology</p>
            </div>
          </div>
          <div className="doctor-card">
            <div className="doctor-profile">
              <img src={doc4} />
            </div>
            <div className="doctor-details">
              <h3>Dr. Meena</h3>
              <p>Orthopedic</p>
            </div>
          </div>
          <div className="doctor-card">
            <div className="doctor-profile">
              <img src={doc3} />
            </div>
            <div className="doctor-details">
              <h3>Dr. Goutham</h3>
              <p>Pediatrics</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
