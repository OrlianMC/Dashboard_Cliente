import React, { useState, useEffect } from "react";
import PieChart1 from "../../components/charts/pieChart1";
import PieChart2 from "../../components/charts/pieChart2";
import BarChart1 from "../../components/charts/barChart1";
import BarChart2 from "../../components/charts/barChart2";
import BarChart3 from "../../components/charts/barChart3";
import SparklineChart1 from "../../components/charts/sparklineChart1";
import { getStatistics } from "../../api/statistics_api";
import "./home.css";

const Home = () => {
  const [statisticsData, setStatisticsData] = useState({});
  const [arrayPieChart2, setArrayPieChart2] = useState([]);
  const [arrayPieChart1, setArrayPieChart1] = useState([]);
  const [arrayBarChart1, setArrayBarChart1] = useState([]);
  const [arrayBarChart2, setArrayBarChart2] = useState([]);
  const [arrayBarChart3, setArrayBarChart3] = useState([]);
  const [arraySparklineChart1, setArraySparklineChart1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStatistics();
        setStatisticsData(response.data);
        setArrayPieChart1(response.data.doctor_by_knowledge_area);
        setArrayPieChart2(response.data.doctoral_students_by_knowledge_area);
        setArrayBarChart1(response.data.doctor_by_area_and_knowledge_area);
        setArrayBarChart2(response.data.doctoral_students_by_program_and_area);
        setArraySparklineChart1(response.data.doctoral_students_and_graduates_by_year);
        setArrayBarChart3(response.data.doctoral_students_and_doctors_by_age_groups);
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
          Composición de doctores por áreas del conocimiento
          {arrayPieChart1.length > 0 ? <PieChart1 data={arrayPieChart1} /> : <p>Cargando...</p>}
        </div>
        <div className="chart">
          Composición de doctorandos por áreas del conocimiento
          {arrayPieChart2.length > 0 ? <PieChart2 data={arrayPieChart2} /> : <p>Cargando...</p>}
        </div>
      </div>

      <div className="barChart">
        <div className="chart">
          Composición de doctores por áreas del conocimiento y facultad
          {arrayBarChart1.length > 0 ? <BarChart1 data={arrayBarChart1} /> : <p>Cargando...</p>}
        </div>
        <div className="chart">
          Composición de doctorandos por facultad y programa
          {arrayBarChart2.length > 0 ? <BarChart2 data={arrayBarChart2} /> : <p>Cargando...</p>}
        </div>
      </div>

      <div className="sparklineChart">
        <div className="chart">
          <span className="titleChart">Defensas de doctorado por año</span>
          {arraySparklineChart1.length > 0 ? <SparklineChart1 data={arraySparklineChart1} /> : <p>Cargando...</p>}
        </div>
        <div className="chart">
          <span className="titleChart">Distribución de doctorandos y doctores por grupos etarios</span>
          {arrayBarChart3.length > 0 ? <BarChart3 data={arrayBarChart3} /> : <p>Cargando...</p>}
        </div>
      </div>

    </div>
  );
}

export default Home;