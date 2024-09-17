import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Area from "./pages/area/Area"
import AreaCreate from "./pages/area/AreaCreate"
import AreaUpdate from "./pages/area/AreaUpdate"
import Knowledge_Area from "./pages/knowledge_area/Knowledge_area"
import Knowledge_AreaCreate from "./pages/knowledge_area/Knowledge_areaCreate"
import Knowledge_AreaUpdate from "./pages/knowledge_area/Knowledge_areaUpdate"
import Center from "./pages/center/Center"
import CenterCreate from "./pages/center/CenterCreate"
import CenterUpdate from "./pages/center/CenterUpdate"
import Doctor from "./pages/doctor/Doctor"
import DoctorCreate from "./pages/doctor/DoctorCreate"
import DoctorUpdate from "./pages/doctor/DoctorUpdate"
import Doctoral_Student from "./pages/doctoral_student/Doctoral_student"
import Doctoral_StudentCreate from "./pages/doctoral_student/Doctoral_studentCreate"
import Doctoral_StudentUpdate from "./pages/doctoral_student/Doctoral_studentUpdate"
import Country from "./pages/country/Country"
import CountryCreate from "./pages/country/CountryCreate"
import CountryUpdate from "./pages/country/CountryUpdate"
import Person from "./pages/person/Person"
import PersonCreate from "./pages/person/PersonCreate"
import PersonUpdate from "./pages/person/PersonUpdate"
import Program from "./pages/program/Program"
import ProgramCreate from "./pages/program/ProgramCreate"
import ProgramUpdate from "./pages/program/ProgramUpdate"
import Strategic_Sector from "./pages/strategic_sector/Strategic_sector"
import Strategic_SectorCreate from "./pages/strategic_sector/Strategic_sectorCreate"
import Strategic_SectorUpdate from "./pages/strategic_sector/Strategic_sectorUpdate"
import Tutor from "./pages/tutor/Tutor"
import TutorCreate from "./pages/tutor/TutorCreate"
import TutorUpdate from "./pages/tutor/TutorUpdate"
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { DataProvider } from "./dataContext/dataContext";
import "./App.css"

function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <div className="app">
          <div className="flexProperty">
            <Sidebar />
            <div className="appContainer">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/" element={<Login />} />
                <Route path="/register/" element={<Register />} />
                <Route path="/area/" element={<Area />} />
                <Route path="/area/crear/" element={<AreaCreate />} />
                <Route path="/area/modificar/" element={<AreaUpdate />} />
                <Route path="/areadeconocimiento/" element={<Knowledge_Area />} />
                <Route path="/areadeconocimiento/crear/" element={<Knowledge_AreaCreate />} />
                <Route path="/areadeconocimiento/modificar/" element={<Knowledge_AreaUpdate />} />
                <Route path="/centro/" element={<Center />} />
                <Route path="/centro/crear/" element={<CenterCreate />} />
                <Route path="/centro/modificar/" element={<CenterUpdate />} />
                <Route path="/doctor/" element={<Doctor />} />
                <Route path="/doctor/crear/" element={<DoctorCreate />} />
                <Route path="/doctor/modificar/" element={<DoctorUpdate />} />
                <Route path="/doctorando/" element={<Doctoral_Student />} />
                <Route path="/doctorando/crear/" element={<Doctoral_StudentCreate />} />
                <Route path="/doctorando/modificar/" element={<Doctoral_StudentUpdate />} />
                <Route path="/pais/" element={<Country />} />
                <Route path="/pais/crear/" element={<CountryCreate />} />
                <Route path="/pais/modificar/" element={<CountryUpdate />} />
                <Route path="/persona/" element={<Person />} />
                <Route path="/persona/crear/" element={<PersonCreate />} />
                <Route path="/persona/modificar/" element={<PersonUpdate />} />
                <Route path="/programa/" element={<Program />} />
                <Route path="/programa/crear/" element={<ProgramCreate />} />
                <Route path="/programa/modificar/" element={<ProgramUpdate />} />
                <Route path="/sectorest/" element={<Strategic_Sector />} />
                <Route path="/sectorest/crear/" element={<Strategic_SectorCreate />} />
                <Route path="/sectorest/modificar/" element={<Strategic_SectorUpdate />} />
                <Route path="/tutor/" element={<Tutor />} />
                <Route path="/tutor/crear/" element={<TutorCreate />} />
                <Route path="/tutor/modificar/" element={<TutorUpdate />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;