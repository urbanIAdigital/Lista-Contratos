import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { IconArrowBackUp } from "@tabler/icons-react";
import axios from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CIFinanciero } from "../../interfaces/financiero";
import Financiero from "../ListaContratos/Detalles/Financiero";
import LoadingComponent from "../../components/LoadingComponent";

const DetallesContrato = () => {
  const [tabValue, setTabValue] = useState("financiero");
  const [financiero, setFinanciero] = useState<CIFinanciero | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const getCI = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/contratos_interadministrativos/${id}/detalles`
      );
      setFinanciero(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCI();
  }, []);

  return (
    <Box
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 3,
          border: "1px solid #e0e0e0",
          borderRadius: 2,
          boxShadow: 2,
          backgroundColor: "#fff",
          width: "90%",
          mt: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            borderBottom: "1px solid #e0e0e0",
            paddingBottom: 2,
            marginBottom: 2,
            width: "100%",
          }}
        >
          <Button
            startIcon={<IconArrowBackUp />}
            onClick={() => navigate(-1)}
          ></Button>
          <Typography variant="h5" component="h1">
            {financiero?.contrato_detalles.nombre_interadministrativo}
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }} width={"100%"}>
          <Box borderRadius={"5px"}>
            <Tabs
              value={tabValue}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{ mb: 3 }}
            >
              <Tab label="Financiero" value={"financiero"} />
              <Tab label="Contractual" disabled value={"contractual"} />
              <Tab label="Obra" disabled value={"obra"} />
            </Tabs>
            {tabValue === "financiero" && (
              <Box width={"100%"} sx={{ bgcolor: "#FFFFFF" }}>
                {!loading ? (
                  <Financiero data={financiero} />
                ) : (
                  <LoadingComponent />
                )}
              </Box>
            )}
            {tabValue === "contractual" && <Box>Contractual</Box>}
            {tabValue === "obra" && <Box>Obra</Box>}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetallesContrato;
