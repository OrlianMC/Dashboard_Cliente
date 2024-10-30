import React, { useState, useEffect } from "react";
import PieChart1 from "../../components/charts/pieChart1";
import PieChart2 from "../../components/charts/pieChart2";
import BarChart1 from "../../components/charts/barChart1";
import BarChart2 from "../../components/charts/barChart2";
import { getStatistics } from "../../api/statistics_api";
import "./home.css";

const Home = () => {
  const [statisticsData, setStatisticsData] = useState({});
  const [arrayPieChart2, setArrayPieChart2] = useState([]);
  const [arrayBarChart2, setArrayBarChart2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStatistics();
        setStatisticsData(response.data);
        setArrayPieChart2(response.data.doctoral_students_by_knowledge_area);
        setArrayBarChart2(response.data.doctoral_students_by_program_and_area);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='home'>
      <div className="infoContainer">
        <div className="info">
          <div className="title">Doctor</div>
          <div className="infoPost">
            Edad Promedio: {statisticsData.doctorage}
          </div>
        </div>
        <div className="info">
          <div className="title">Doctorando</div>
          <div className="infoPost">
            Edad Promedio: {statisticsData.doctoral_studentage}
          </div>
        </div>
        <div className="info">
          <div className="title">Graduado</div>
          <div className="infoPost">
            Edad Promedio: {statisticsData.graduadoage}
          </div>
        </div>
        <div className="info">
          <div className="title">Tutor</div>
          <div className="infoPost">
            Edad Promedio: {statisticsData.tutorage}
          </div>
        </div>
      </div>

      <div className="pieChart">
        <div className="chart">
          Figura 3: Composición de doctores por áreas del conocimiento
          <PieChart1 />
        </div>
        <div className="chart">
          Composición de doctorandos por áreas del conocimiento
          <PieChart2 array={arrayPieChart2} />
        </div>
      </div>

      <div className="barChart">
        <div className="chart">
          Figura 4: Composición de doctores por áreas del conocimiento y facultad
          <BarChart1 />
        </div>
        <div className="chart">
          Figura 7: Relación de doctorandos por facultad y programa
          <BarChart2 array={arrayBarChart2}/>
        </div>
      </div>
    </div>
  );
}

export default Home;