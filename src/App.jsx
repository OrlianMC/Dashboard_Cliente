import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Area from "./pages/area/Area"
import Knowledge_Area from "./pages/knowledge_area/Knowledge_area"
import Center from "./pages/center/Center"
import Doctor from "./pages/doctor/Doctor"
import Doctoral_Student from "./pages/doctoral_student/Doctoral_student"
import Country from "./pages/country/Country"
import Person from "./pages/person/Person"
import Program from "./pages/program/Program"
import Strategic_Sector from "./pages/strategic_sector/Strategic_sector"
import Tutor from "./pages/tutor/Tutor"
import "./App.css"

import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login/",
    element: <Login />,
  },
  {
    path: "/register/",
    element: <Register />,
  },
  {
    path: "/area/",
    element: <Area />,
  },
  {
    path: "/areadeconocimiento/",
    element: <Knowledge_Area />,
  },
  {
    path: "/centro/",
    element: <Center />,
  },
  {
    path: "/doctor/",
    element: <Doctor />,
  },
  {
    path: "/doctorando/",
    element: <Doctoral_Student />,
  },
  {
    path: "/pais/",
    element: <Country />,
  },
  {
    path: "/persona/",
    element: <Person />,
  },
  {
    path: "/programa/",
    element: <Program />,
  },
  {
    path: "/sectorest/",
    element: <Strategic_Sector />,
  },
  {
    path: "/tutor/",
    element: <Tutor />,
  },
]);


function App() {
  return <div className="app">
    <div className="flexProperty">
      <Sidebar />
      <div className="appContainer">
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </div>
    <Footer />
  </div>
}

export default App;