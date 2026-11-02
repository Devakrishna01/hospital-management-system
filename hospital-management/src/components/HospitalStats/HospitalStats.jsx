import "./HospitalStats.css";
export function HospitalStats() {
  return (
    <>
      <section className="hospital-stats">
        <div className="stat-card">
          <h2>500+</h2>
          <p>Patients</p>
        </div>
        <div className="stat-card">
          <h2>50+</h2>
          <p>Doctors</p>
        </div>
        <div className="stat-card">
          <h2>20+</h2>
          <p>Years Service</p>
        </div>
        <div className="stat-card">
          <h2>24/7</h2>
          <p>Emergency Care</p>
        </div>
      </section>
    </>
  );
}
