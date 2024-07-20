import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={"{/* Pagina Inicial */}"} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;