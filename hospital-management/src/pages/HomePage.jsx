import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Hero-content/Hero";
import { HospitalStats } from "../components/HospitalStats/HospitalStats";
import { Facilities } from "../components/Facilities/Facilities";
import { Treatments } from "../components/Treatments&Spec/Treatments";
import { Doctors } from "../components/Doctors/Doctors";
import { ContactFooter } from "../components/ContactFooter/ContactFooter";
export function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HospitalStats />
      <Facilities />
      <Treatments />
      <Doctors />
      <ContactFooter />
    </div>
  );
}
