import React, { createContext, useState, useEffect } from 'react';
import { getArea } from '../api/area_api';
import { getCenter } from '../api/center_api';
import { getCountry } from '../api/country_api';
import { getSector } from '../api/sector_api';
import { getPerson } from '../api/person_api';
import { getKnowledge_area } from '../api/knowledge_area_api';
import { getProgram } from '../api/program_api';
import { getDoctoral_student } from '../api/doctoral_student_api';
import { getDoctor } from '../api/doctor_api';
import { getTutor } from '../api/tutor_api';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [areas, setAreas] = useState([]);
  const [centers, setCenters] = useState([]);
  const [countries, setCountries] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [doctoral_students, setDoctoral_students] = useState([]);
  const [knowledge_areas, setKnowledge_areas] = useState([]);
  const [persons, setPersons] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          areasData,
          centersData,
          countriesData,
          doctorsData,
          doctoral_studentsData,
          knowledge_areasData,
          personsData,
          programsData,
          sectorsData,
          tutorsData,

        ] = await Promise.all([
          getArea(),
          getCenter(),
          getCountry(),
          getDoctor(),
          getDoctoral_student(),
          getKnowledge_area(),
          getPerson(),
          getProgram(),
          getSector(),
          getTutor()
        ]);

        setAreas(areasData.data);
        setCenters(centersData.data);
        setCountries(countriesData.data);
        setDoctors(doctorsData.data);
        setDoctoral_students(doctoral_studentsData.data);
        setKnowledge_areas(knowledge_areasData.data);
        setPersons(personsData.data);
        setPrograms(programsData.data);
        setSectors(sectorsData.data);
        setTutors(tutorsData.data);

      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };

    fetchData();
  }, [loadData]);

  return (
    <DataContext.Provider value={
      {
        areas,
        centers,
        countries,
        doctors,
        doctoral_students,
        knowledge_areas,
        persons,
        programs,
        sectors,
        tutors,
        loadData,
        setLoadData
      }}>
      {children}
    </DataContext.Provider>
  );
};