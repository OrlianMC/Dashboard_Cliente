import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Area from "./pages/area/Area"
import Areadeconocimiento from "./pages/areadeconocimiento/Areadeconocimiento"
import Centro from "./pages/centro/Centro"
import Doctor from "./pages/doctor/Doctor"
import Doctorando from "./pages/doctorando/Doctorando"
import Pais from "./pages/pais/Pais"
import Programa from "./pages/programa/Programa"
import Sectorest from "./pages/sectorest/Sectorest"
import Tutor from "./pages/tutor/Tutor"

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
    element: <Areadeconocimiento />,
  },
  {
    path: "/centro/",
    element: <Centro />,
  },
  {
    path: "/doctor/",
    element: <Doctor />,
  },
  {
    path: "/doctorando/",
    element: <Doctorando />,
  },
  {
    path: "/pais/",
    element: <Pais />,
  },
  {
    path: "/programa/",
    element: <Programa />,
  },
  {
    path: "/sectorest/",
    element: <Sectorest />,
  },
  {
    path: "/tutor/",
    element: <Tutor />,
  },
]);


function App() {
  return <div className="app">
    <RouterProvider router={router} />
  </div>
}

export default App;