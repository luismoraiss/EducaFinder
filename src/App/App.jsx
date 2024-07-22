import { Route, Routes, BrowserRouter } from "react-router-dom";
import HorarioProfessor from "../Pages/HorarioProfessor";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element="Pagina Inicial" /> */}
        <Route path="/" element={<HorarioProfessor/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;