import { useState, useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import RegisterCreate from "./pages/register/RegisterCreate";
import RegisterUpdate from "./pages/register/RegisterUpdate";
import Area from "./pages/area/Area";
import AreaCreate from "./pages/area/AreaCreate";
import AreaUpdate from "./pages/area/AreaUpdate";
import Knowledge_Area from "./pages/knowledge_area/Knowledge_area";
import Knowledge_AreaCreate from "./pages/knowledge_area/Knowledge_areaCreate";
import Knowledge_AreaUpdate from "./pages/knowledge_area/Knowledge_areaUpdate";
import Center from "./pages/center/Center";
import CenterCreate from "./pages/center/CenterCreate";
import CenterUpdate from "./pages/center/CenterUpdate";
import Doctor from "./pages/doctor/Doctor";
import DoctorCreate from "./pages/doctor/DoctorCreate";
import DoctorUpdate from "./pages/doctor/DoctorUpdate";
import Doctoral_Student from "./pages/doctoral_student/Doctoral_student";
import Doctoral_StudentCreate from "./pages/doctoral_student/Doctoral_studentCreate";
import Doctoral_StudentUpdate from "./pages/doctoral_student/Doctoral_studentUpdate";
import Country from "./pages/country/Country";
import CountryCreate from "./pages/country/CountryCreate";
import CountryUpdate from "./pages/country/CountryUpdate";
import Person from "./pages/person/Person";
import PersonCreate from "./pages/person/PersonCreate";
import PersonUpdate from "./pages/person/PersonUpdate";
import Program from "./pages/program/Program";
import ProgramCreate from "./pages/program/ProgramCreate";
import ProgramUpdate from "./pages/program/ProgramUpdate";
import Strategic_Sector from "./pages/strategic_sector/Strategic_sector";
import Strategic_SectorCreate from "./pages/strategic_sector/Strategic_sectorCreate";
import Strategic_SectorUpdate from "./pages/strategic_sector/Strategic_sectorUpdate";
import Graduate from "./pages/graduate/Graduate";
import GraduateCreate from "./pages/graduate/GraduateCreate";
import GraduateUpdate from "./pages/graduate/GraduateUpdate";
import Tutor from "./pages/tutor/Tutor";
import TutorCreate from "./pages/tutor/TutorCreate";
import TutorUpdate from "./pages/tutor/TutorUpdate";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { DataProvider } from "./dataContext/dataContext";
import { AuthContext } from "./authContext/authContext";
import "./App.css";

const theme = createTheme();

function App() {
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainApp />
        </BrowserRouter>
      </ThemeProvider>
    </DataProvider>
  );
}

function MainApp() {
  const { state } = useContext(AuthContext);
  const { role, user } = state;
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/home");
  };
  
  return (
    <>
      {!user ? (
        <div className="fullScreenLogin">
          <Login onLoginSuccess={handleLoginSuccess} />
        </div>
    ) : (
        <div className="app">
          <div className="flexProperty">
            <Sidebar />
            <div className="appContainer">
              <Navbar />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/home" replace />} />

                {role === "admin" && (
                  <>
                    <Route path="/register" element={<Register />} />
                    <Route path="/register/crear" element={<RegisterCreate />} />
                    <Route path="/register/modificar" element={<RegisterUpdate />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/area/crear" element={<AreaCreate />} />
                    <Route path="/area/modificar" element={<AreaUpdate />} />
                    <Route path="/areadeconocimiento" element={<Knowledge_Area />} />
                    <Route path="/areadeconocimiento/crear" element={<Knowledge_AreaCreate />} />
                    <Route path="/areadeconocimiento/modificar" element={<Knowledge_AreaUpdate />} />
                    <Route path="/centro" element={<Center />} />
                    <Route path="/centro/crear" element={<CenterCreate />} />
                    <Route path="/centro/modificar" element={<CenterUpdate />} />
                    <Route path="/doctor" element={<Doctor />} />
                    <Route path="/doctor/crear" element={<DoctorCreate />} />
                    <Route path="/doctor/modificar" element={<DoctorUpdate />} />
                    <Route path="/doctorando" element={<Doctoral_Student />} />
                    <Route path="/doctorando/crear" element={<Doctoral_StudentCreate />} />
                    <Route path="/doctorando/modificar" element={<Doctoral_StudentUpdate />} />
                    <Route path="/graduado" element={<Graduate />} />
                    <Route path="/graduado/crear" element={<GraduateCreate />} />
                    <Route path="/graduado/modificar" element={<GraduateUpdate />} />
                    <Route path="/pais" element={<Country />} />
                    <Route path="/pais/crear" element={<CountryCreate />} />
                    <Route path="/pais/modificar" element={<CountryUpdate />} />
                    <Route path="/persona" element={<Person />} />
                    <Route path="/persona/crear" element={<PersonCreate />} />
                    <Route path="/persona/modificar" element={<PersonUpdate />} />
                    <Route path="/programa" element={<Program />} />
                    <Route path="/programa/crear" element={<ProgramCreate />} />
                    <Route path="/programa/modificar" element={<ProgramUpdate />} />
                    <Route path="/sectorest" element={<Strategic_Sector />} />
                    <Route path="/sectorest/crear" element={<Strategic_SectorCreate />} />
                    <Route path="/sectorest/modificar" element={<Strategic_SectorUpdate />} />
                    <Route path="/tutor" element={<Tutor />} />
                    <Route path="/tutor/crear" element={<TutorCreate />} />
                    <Route path="/tutor/modificar" element={<TutorUpdate />} />
                  </>
                )}
                {role === "manager" && (
                  <>
                    <Route path="/area" element={<Area />} />
                    <Route path="/area/crear" element={<AreaCreate />} />
                    <Route path="/area/modificar" element={<AreaUpdate />} />
                    <Route path="/areadeconocimiento" element={<Knowledge_Area />} />
                    <Route path="/areadeconocimiento/crear" element={<Knowledge_AreaCreate />} />
                    <Route path="/areadeconocimiento/modificar" element={<Knowledge_AreaUpdate />} />
                    <Route path="/centro" element={<Center />} />
                    <Route path="/centro/crear" element={<CenterCreate />} />
                    <Route path="/centro/modificar" element={<CenterUpdate />} />
                    <Route path="/doctor" element={<Doctor />} />
                    <Route path="/doctor/crear" element={<DoctorCreate />} />
                    <Route path="/doctor/modificar" element={<DoctorUpdate />} />
                    <Route path="/doctorando" element={<Doctoral_Student />} />
                    <Route path="/doctorando/crear" element={<Doctoral_StudentCreate />} />
                    <Route path="/doctorando/modificar" element={<Doctoral_StudentUpdate />} />
                    <Route path="/graduado" element={<Graduate />} />
                    <Route path="/graduado/crear" element={<GraduateCreate />} />
                    <Route path="/graduado/modificar" element={<GraduateUpdate />} />
                    <Route path="/pais" element={<Country />} />
                    <Route path="/pais/crear" element={<CountryCreate />} />
                    <Route path="/pais/modificar" element={<CountryUpdate />} />
                    <Route path="/persona" element={<Person />} />
                    <Route path="/persona/crear" element={<PersonCreate />} />
                    <Route path="/persona/modificar" element={<PersonUpdate />} />
                    <Route path="/programa" element={<Program />} />
                    <Route path="/programa/crear" element={<ProgramCreate />} />
                    <Route path="/programa/modificar" element={<ProgramUpdate />} />
                    <Route path="/sectorest" element={<Strategic_Sector />} />
                    <Route path="/sectorest/crear" element={<Strategic_SectorCreate />} />
                    <Route path="/sectorest/modificar" element={<Strategic_SectorUpdate />} />
                    <Route path="/tutor" element={<Tutor />} />
                    <Route path="/tutor/crear" element={<TutorCreate />} />
                    <Route path="/tutor/modificar" element={<TutorUpdate />} />
                  </>
                )}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;