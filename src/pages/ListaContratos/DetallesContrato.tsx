import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { IconArrowBackUp, IconPdf } from "@tabler/icons-react";
import axios from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CIFinanciero } from "../../interfaces/financiero";
import Financiero from "../ListaContratos/Detalles/Financiero";
import LoadingComponent from "../../components/LoadingComponent";
import PMO from "./Detalles/PMO";
import jsPDF from "jspdf";
import "jspdf-autotable";

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

  const generatePDF = () => {
    if (!financiero) return;

    const doc = new jsPDF();
    const { contrato_detalles, con_derivados, rubros } = financiero;

    // Agregar título
    doc.setFontSize(16);
    doc.text(
      `Contrato Interadministrativo: ${contrato_detalles.nombre_interadministrativo}`,
      10,
      20
    );

    // Agregar información básica
    doc.setFontSize(12);
    doc.text("Información Básica:", 10, 30);
    const basicInfo = [
      [
        "Contrato Interadministrativo",
        contrato_detalles.contrato_interadministrativo,
      ],
      [
        "Nombre Interadministrativo",
        contrato_detalles.nombre_interadministrativo,
      ],
      ["Objeto", contrato_detalles.objeto_contrato],
      ["Cliente", contrato_detalles.cliente],
      ["Centro de Costos", contrato_detalles.centro_de_costos],
      ["Valor Honorarios", contrato_detalles.valor_honorarios],
      ["Valor", contrato_detalles.valor],
      ["Porcentaje Honorarios", contrato_detalles.porcentaje_honorarios],
      ["Plazo", contrato_detalles.plazo],
    ];
    basicInfo.forEach(([key, value], index) => {
      doc.text(`${key}: ${value || "N/A"}`, 10, 40 + index * 10);
    });

    let currentY = 40 + basicInfo.length * 10;

    // Agregar tabla de contratos derivados si existen
    if (con_derivados.length > 0) {
      doc.text("Contratos Derivados:", 10, currentY);
      currentY += 10;

      const derivadosTable = con_derivados.map((item) => [
        item.codigo_derivado,
        item.cliente,
        item.supervisor,
        item.valor_total,
        item.pago_total,
      ]);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      doc.autoTable({
        startY: currentY,
        head: [
          ["Código", "Cliente", "Supervisor", "Valor Total", "Pago Total"],
        ],
        body: derivadosTable,
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      currentY = doc.lastAutoTable.finalY + 10;
    }

    // Agregar tabla de rubros si existen
    if (rubros.length > 0) {
      doc.text("Rubros:", 10, currentY);
      currentY += 10;

      const rubrosTable = rubros.map((item) => [
        item.rubro,
        item.nombre_rubro,
        item.total_apropiacion_inicial,
        item.total_apropiacion_definitiva,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        item.anos_unicos.join(", "),
      ]);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      doc.autoTable({
        startY: currentY,
        head: [
          [
            "Rubro",
            "Nombre",
            "Apropiación Inicial",
            "Apropiación Definitiva",
            "Años Únicos",
          ],
        ],
        body: rubrosTable,
      });
    }

    // Guardar el PDF
    doc.save(`Contrato_${contrato_detalles.contrato_interadministrativo}.pdf`);
  };

  return (
    <Box width="100%" display="flex" alignItems="center" flexDirection="column">
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
          minHeight: "500px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #e0e0e0",
            paddingBottom: 2,
            marginBottom: 2,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
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
          <Box>
            <Button startIcon={<IconPdf />} onClick={generatePDF}></Button>
          </Box>
        </Box>
        <Box
          sx={{ flex: 1, display: "flex", flexDirection: "column" }}
          width="100%"
        >
          <Box borderRadius="5px">
            <Tabs
              value={tabValue}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{ mb: 3 }}
            >
              <Tab label="Seven" value="financiero" />
              <Tab label="PMO" value="pmo" />
              <Tab label="Obra" disabled value="obra" />
            </Tabs>
            {tabValue === "financiero" && (
              <Box
                width="100%"
                sx={{
                  bgcolor: "#FFFFFF",
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "400px",
                }}
              >
                {!loading ? (
                  <Financiero data={financiero} />
                ) : (
                  <LoadingComponent />
                )}
              </Box>
            )}
            {tabValue === "pmo" && <PMO />}
            {tabValue === "obra" && <Box>Obra</Box>}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetallesContrato;
