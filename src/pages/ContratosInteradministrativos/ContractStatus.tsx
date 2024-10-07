import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const ContractStatus = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: "ESTADO",
      definition: t("active"),
    },
    {
      title: "MODALIDAD",
      definition: "Mandato Sin Representación",
    },
    {
      title: "SUSCRIPCIÓN",
      definition: "30/12/2022",
    },
    {
      title: "CLIENTE",
      definition: "BUEN COMIENZO",
    },
    {
      title: "ACTA DE INICIO",
      definition: "6/01/2023",
    },
    {
      title: "INFORMES PRESENTADOS",
      definition: "Hasta mayo de 2024",
    },
    {
      title: "FINALIZACIÓN",
      definition: "31/12/2024",
    },
    {
      title: "INFORMES APROBADOS",
      definition: "Hasta mayo de 2024",
    },
    {
      title: "PLAZO INICIAL",
      definition: "24 meses",
    },
    {
      title: "OBJETO",
      definition:
        "Contratación directa para el fortalecimiento institucional de la infraestructura física en atención a la primera infancia de Medellín",
    },
    {
      title: "PLAZO TOTAL",
      definition: "24 meses",
    },
  ];
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent sx={{ height: "100%" }}>
        <Grid container sx={{ height: "inherit" }}>
          {data.map((item) => (
            <Grid item xs={6} key={item.title}>
              <Grid
                item
                width={"100%"}
                textAlign={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                display={"flex"}
                justifyContent={"center"}
              >
                <Typography
                  variant="h6"
                  bgcolor="#AAAAAA"
                  width={"70%"}
                  color={"white"}
                  borderRadius={1}
                >
                  {item.title}
                </Typography>
                <Typography>{item.definition}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ContractStatus;
