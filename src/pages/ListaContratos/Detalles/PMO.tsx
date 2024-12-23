import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TextField, Box, CircularProgress, Typography } from "@mui/material";

const PMO = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [pmo, setPMO] = useState(null);

  const getPMO = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/contratos_interadministrativos/${id}/pmo`
      );
      setPMO(data[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPMO();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!pmo) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="40vh"
      >
        <Typography variant="h6">No se encontraron datos</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Información del PMO
      </Typography>
      <Box
        component="form"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 2,
        }}
      >
        <TextField
          label="CI"
          value={pmo.CI || ""}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <TextField
          label="Contrato Interadministrativo"
          value={pmo.CONTRATO_INTERADMINISTRATIVO || ""}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <TextField
          label="Categoría"
          value={pmo.CATEGORIA || ""}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <TextField
          label="Cliente"
          value={pmo.CLIENTE || ""}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <TextField
          label="Estado"
          value={pmo.ESTADO || ""}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <TextField
          label="Fecha de Suscripción"
          value={pmo.FECHA_DE_SUSCRIPCION || ""}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <TextField
          label="Acta de Inicio"
          value={pmo.ACTA_DE_INICIO || ""}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <TextField
          label="Plazo Inicial"
          value={pmo.PLAZO_INICIAL || ""}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <TextField
          label="Prórrogas Acumuladas"
          value={pmo.PRORROGAS_ACUMULADAS || ""}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <TextField
          label="Plazo Total"
          value={pmo.PLAZO_TOTAL || ""}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <TextField
          label="Fecha de Finalización"
          value={pmo.FECHA_DE_FINALIZACION || ""}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <TextField
          label="Avance Físico Programado"
          value={pmo.AVANCE_FISICO_PROGRAMADO || ""}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <TextField
          label="Avance Físico Real"
          value={pmo.AVANCE_FISICO_REAL || ""}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <TextField
          label="Informes Presentados"
          value={pmo.INFORMES_PRESENTADOS || ""}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <TextField
          label="Informes Aprobados"
          value={pmo.INFORMES_APROBADOS || ""}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        {/* Agrega más campos de texto según lo necesites */}
      </Box>
    </Box>
  );
};

export default PMO;
