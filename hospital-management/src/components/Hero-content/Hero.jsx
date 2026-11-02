import "./Hero.css";
import heroimage from "./heroimage.png";
export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p class="moto">Your Health, Our Priority</p>

          <p class="small-moto">
            Providing trusted healthcare with experienced doctors and modern
            medical facilities.
          </p>
          <button className="appointment-button">Appointment Button</button>
        </div>
        <div className="hero-image">
          <img className="hero-section-image" src={heroimage} />
        </div>
      </section>
    </>
  );
}
