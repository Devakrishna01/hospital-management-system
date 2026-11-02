import { useState, createContext } from "react";
export const PatientContext = createContext();
export function PatientProvider({ children }) {
  const [patients, setPatients] = useState([]);
  const [currentPatient, setCurrentPatient] = useState(null);
  return (
    <PatientContext.Provider
      value={{ patients, setPatients, currentPatient, setCurrentPatient }}
    >
      {children}
    </PatientContext.Provider>
  );
}
