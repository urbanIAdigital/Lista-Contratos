import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ContratosInteradministrativos from "./pages/ContratosInteradministrativos/ContratosInteradministrativos";
import NotFoundPage from "./pages/NotFoundPage";
import SeguimientoContratos from "./pages/SeguimientoContratos";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SeguimientoContratos />} />
          <Route
            path="/seguimiento-contratos"
            element={<SeguimientoContratos />}
          />
          <Route
            path="/contratos-interadministrativos"
            element={<ContratosInteradministrativos />}
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
