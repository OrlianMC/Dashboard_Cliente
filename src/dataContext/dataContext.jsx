import React, { createContext, useState, useEffect } from 'react';
// import { getArea } from '../api/area_api';
// import { getCenter } from '../api/center_api';
// import { getCountry } from '../api/country_api';
// import { getSector } from '../api/sector_api';
// import { getPerson } from '../api/person_api';
// import { getKnowledge_area } from '../api/knowledge_area_api';
// import { getProgram } from '../api/program_api';
// import { getDoctoral_student } from '../api/doctoral_student_api';
// import { getDoctor } from '../api/doctor_api';
// import { getTutor } from '../api/tutor_api';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [areas, setAreas] = useState([]);
  const [loadArea, setLoadArea] = useState(false);
  const [centers, setCenters] = useState([]);
  const [loadCenter, setLoadCenter] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loadCountry, setLoadCountry] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [loadDoctor, setLoadDoctor] = useState(false);
  const [doctoral_students, setDoctoral_students] = useState([]);
  const [loadDoctoral_Student, setLoadDoctoral_Student] = useState(false);
  const [knowledge_areas, setKnowledge_areas] = useState([]);
  const [loadKnowledge_Area, setLoadKnowledge_Area] = useState(false);
  const [persons, setPersons] = useState([]);
  const [loadPerson, setLoadPerson] = useState(false);
  const [programs, setPrograms] = useState([]);
  const [loadProgram, setLoadProgram] = useState(false);
  const [sectors, setSectors] = useState([]);
  const [loadSector, setLoadSector] = useState(false);
  const [tutors, setTutors] = useState([]);
  const [loadTutor, setLoadTutor] = useState(false);
  const [token, setToken] = useState([]);
  const [loadUser, setLoadUser] = useState(false);

  return (
    <DataContext.Provider value={
      {
        areas, setAreas, loadArea, setLoadArea,
        centers, setCenters, loadCenter, setLoadCenter,
        countries, setCountries, loadCountry, setLoadCountry,
        doctors, setDoctors, loadDoctor, setLoadDoctor,
        doctoral_students, setDoctoral_students, loadDoctoral_Student, setLoadDoctoral_Student,
        knowledge_areas, setKnowledge_areas, loadKnowledge_Area, setLoadKnowledge_Area,
        persons, setPersons, loadPerson, setLoadPerson,
        programs, setPrograms, loadProgram, setLoadProgram,
        sectors, setSectors, loadSector, setLoadSector,
        tutors, setTutors, loadTutor, setLoadTutor,
        token, setToken,
        loadUser, setLoadUser
      }}>
      {children}
    </DataContext.Provider>
  );
};