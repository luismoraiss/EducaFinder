import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Professores from "./pages/Professores.jsx";
import Login from "./pages/Login.jsx";
import Erro from "./pages/404.jsx";
import Home from "./pages/Home.jsx";
import Perfil from "./pages/Perfil.jsx";
import InfoPerfil from "./Components/InfoPerfil.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Erro />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <Erro />,
  },
  {
    path: "/professores/:id",
    element: <Professores />,
    errorElement: <Erro />,
  },
  {
    path: "/perfil",
    element: <InfoPerfil />,
    errorElement: <Erro />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
