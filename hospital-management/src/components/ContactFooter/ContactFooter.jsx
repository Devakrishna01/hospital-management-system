import "./ContactFooter.css";
export function ContactFooter() {
  return (
    <>
      <section className="contactfooter">
        <div className="contact">
          <div className="contact-header">
            <h2>Contact Us</h2>
            <p>We're here to help with your healthcare needs.</p>
          </div>
          <div className="contact-box">
            <h3>🏥 Hospital Details</h3>

            <p>📍 Chennai, Tamil Nadu, India</p>

            <p>📞 +91 98765 43210</p>

            <p>✉️ info@medicare.com</p>

            <p>🕐 Open 24/7</p>
          </div>
        </div>
        <div className="footer">
          <h3>🏥 MediCare Hospital</h3>

          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">Facilities</a>
            <a href="#">Treatments</a>
            <a href="#">Doctors</a>
            <a href="#">Contact</a>
          </div>
          <p>© 2026 MediCare Hospital. All Rights Reserved.</p>
        </div>
      </section>
    </>
  );
}
