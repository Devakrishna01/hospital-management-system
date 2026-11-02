import "./Treatments.css";
export function Treatments() {
  return (
    <>
      <section className="treatments">
        <div className="treatments-header">
          <h2>Our Treatments</h2>
          <p>Specialized medical treatments for better care</p>
        </div>
        <div className="treatments-container">
          <div className="treatment-card">
            <div className="treatment-icon">❤️</div>
            <h3>Cardiology</h3>
            <p>Advanced treatment for heart-related conditions.</p>
          </div>

          <div className="treatment-card">
            <div className="treatment-icon">🧠</div>
            <h3>Neurology</h3>
            <p>Specialized care for brain and nervous system disorders.</p>
          </div>

          <div className="treatment-card">
            <div className="treatment-icon">🦴</div>
            <h3>Orthopedics</h3>
            <p>Treatment for bones, joints, muscles and injuries.</p>
          </div>

          <div className="treatment-card">
            <div className="treatment-icon">👶</div>
            <h3>Pediatrics</h3>
            <p>Complete healthcare services for children.</p>
          </div>

          <div className="treatment-card">
            <div className="treatment-icon">🧴</div>
            <h3>Dermatology</h3>
            <p>Diagnosis and treatment of skin-related conditions.</p>
          </div>

          <div className="treatment-card">
            <div className="treatment-icon">🩺</div>
            <h3>General Medicine</h3>
            <p>Comprehensive treatment for common medical conditions.</p>
          </div>
        </div>
      </section>
    </>
  );
}
