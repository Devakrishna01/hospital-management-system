import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { PatientLogin } from "./pages/PatientLogin/PatientLogin";
import { PatientDashboard } from "./pages/PatientDashboard/PatientDashboard";
import { BookAppointment } from "./pages/BookAppointment/BookAppointment";
import { AppointmentProvider } from "./context/AppointmentContext";
import { MyAppointments } from "./pages/MyAppointments/MyAppointments";
import { PatientRegistration } from "./pages/PatientRegistration/PatientRegistration";
import { PatientProvider } from "./context/PatientContext";
import { MedicalHistory } from "./pages/MedicalHistory/MedicalHistory";
import { Profile } from "./pages/Profile/Profile";
import { DoctorLogin } from "./pages/DoctorLogin/DoctorLogin";
import { DoctorDashboard } from "./pages/DoctorDashboard/DoctorDashboard";
import { PatientDetails } from "./pages/PatientDetails/PatientDetails";
import { AdminLogin } from "./pages/AdminLogin/AdminLogin";
import { AdminDashboard } from "./pages/AdminDashboard/AdminDashboard";
function App() {
  return (
    <BrowserRouter>
      <AppointmentProvider>
        <PatientProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/patient-login" element={<PatientLogin />} />
            <Route
              path="/patient-dashboard"
              element={<PatientDashboard />}
            ></Route>
            <Route path="/book-appoint" element={<BookAppointment />} />
            <Route path="/my-appointments" element={<MyAppointments />} />
            <Route
              path="/patient-reg"
              element={<PatientRegistration />}
            ></Route>
            <Route path="medical-history" element={<MedicalHistory />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/doctorlogin" element={<DoctorLogin />} />
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/patient-details" element={<PatientDetails />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </PatientProvider>
      </AppointmentProvider>
    </BrowserRouter>
  );
}

export default App;
