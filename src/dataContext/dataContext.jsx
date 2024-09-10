import React, { createContext, useState, useEffect } from 'react';
import { getArea } from '../api/area_api';
import { getCenter } from '../api/center_api';
import { getCountry } from '../api/country_api';
import { getSector } from '../api/sector_api';
import { getPerson } from '../api/person_api';


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  
  const [areas, setAreas] = useState([]);
  const [centers, setCenters] = useState([]);
  const [countries, setCountries] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [areasData, centersData, countriesData, sectorsData, personsData] = await Promise.all([
            getArea(),
            getCenter(),
            getCountry(),
            getSector(),
            getPerson()
        ]);
        setAreas(areasData.data);
        setCenters(centersData.data);
        setCountries(countriesData.data);
        setSectors(sectorsData.data);
        setPersons(personsData.data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ areas, centers, countries, sectors, persons }}>
      {children}
    </DataContext.Provider>
  );
};