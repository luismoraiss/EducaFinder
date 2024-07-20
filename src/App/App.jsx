import { Route, Routes, BrowserRouter } from "react-router-dom";
import BoxSala from "../Components/BoxSala";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element="Pagina Inicial" /> */}
        <Route path="/" element={<BoxSala/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;