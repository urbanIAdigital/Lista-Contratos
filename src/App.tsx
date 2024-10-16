import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home/Home";
import ListaContratos from "./pages/ListaContratos/ListaContratos";
import { createTheme, ThemeProvider } from "@mui/material";

// const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
// };

const App: FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#c14c21",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  return (
    <BrowserRouter basename="/Lista-Contratos/">
      <AuthProvider>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
