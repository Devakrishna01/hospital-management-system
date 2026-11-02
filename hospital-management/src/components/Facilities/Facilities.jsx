import "./Facilities.css";
export function Facilities() {
  return (
    <>
      <section className="facility">
        <div className="facilities-header">
          <h2>Our Facilities</h2>
          <p>Advanced facilities for better patient care</p>
        </div>
        <div className="facilities-container">
          <div className="facility-card">
            <div className="facility-icon">🚑</div>
            <h3>Emergency Care</h3>
            <p>24/7 emergency medical services for critical situations.</p>
          </div>

          <div className="facility-card">
            <div className="facility-icon">🏥</div>
            <h3>ICU</h3>
            <p>Advanced intensive care with continuous patient monitoring.</p>
          </div>

          <div className="facility-card">
            <div className="facility-icon">💊</div>
            <h3>Pharmacy</h3>
            <p>Well-equipped pharmacy providing prescribed medicines.</p>
          </div>

          <div className="facility-card">
            <div className="facility-icon">🔬</div>
            <h3>Laboratory</h3>
            <p>Modern diagnostic laboratory for accurate medical testing.</p>
          </div>

          <div className="facility-card">
            <div className="facility-icon">⚕️</div>
            <h3>Operation Theatre</h3>
            <p>Modern operation theatres equipped with advanced technology.</p>
          </div>

          <div className="facility-card">
            <div className="facility-icon">🚨</div>
            <h3>Ambulance Service</h3>
            <p>Quick and reliable ambulance services available 24/7.</p>
          </div>
        </div>
      </section>
    </>
  );
}
