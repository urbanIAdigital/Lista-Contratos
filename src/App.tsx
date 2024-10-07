import { FC, ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import Home from "./pages/Home/Home";
import ListaContratos from "./pages/ListaContratos/ListaContratos";

const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const App: FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Ruta pública para el login */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/list" element={<Layout />}>
            <Route index element={<ListaContratos />} />
          </Route>

          {/* Rutas protegidas */}
          {/* <Route
            path="/login"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<>Home</>} />
            <Route path="contrato/:contrato_id" element={<>contract</>} />
            <Route path="*" element={<NotFoundPage />} />
          </Route> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
