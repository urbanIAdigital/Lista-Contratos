import { Grid } from "@mui/material";
import { IconContract } from "@tabler/icons-react";
import ItemDashboard from "../components/ItemDashboard";

const SeguimientoContratos = () => {
  const items = [
    {
      title: "Contrato Interadministrativo",
      icon: <IconContract size={30} />,
      isInDevelopment: false,
      redirectTo: "/contratos-interadministrativos",
    },
    {
      title: "Diseños",
      icon: <IconContract size={30} />,
      isInDevelopment: false,
      redirectTo: "/page",
    },
    {
      title: "Curva S",
      icon: <IconContract size={30} />,
      isInDevelopment: false,
      redirectTo: "/page",
    },
    {
      title: "Comunicaciones",
      icon: <IconContract size={30} />,
      isInDevelopment: false,
      redirectTo: "/page",
    },
    {
      title: "Financiero",
      icon: <IconContract size={30} />,
      isInDevelopment: false,
      redirectTo: "/page",
    },
    {
      title: "Obra",
      icon: <IconContract size={30} />,
      isInDevelopment: false,
      redirectTo: "/page",
    },
    {
      title: "Social",
      icon: <IconContract size={30} />,
      isInDevelopment: true,
      redirectTo: "/page",
    },
    {
      title: "Arquitectonicos - Técnicos",
      icon: <IconContract size={30} />,
      isInDevelopment: false,
      redirectTo: "/page",
    },
    {
      title: "Balance Contratos",
      icon: <IconContract size={30} />,
      isInDevelopment: false,
      redirectTo: "/page",
    },
    {
      title: "Alertas",
      icon: <IconContract size={30} />,
      isInDevelopment: false,
      redirectTo: "/page",
    },
    {
      title: "Georreferenciación",
      icon: <IconContract size={30} />,
      isInDevelopment: false,
      redirectTo: "/page",
    },
    {
      title: "Plan anual de Adquisiciones (PAA)",
      icon: <IconContract size={30} />,
      isInDevelopment: false,
      redirectTo: "/page",
    },
    {
      title: "Incumplimiento",
      icon: <IconContract size={30} />,
      isInDevelopment: false,
      redirectTo: "/page",
    },
    {
      title: "Predial",
      icon: <IconContract size={30} />,
      isInDevelopment: false,
      redirectTo: "/page",
    },
    {
      title: "Interadministrativos",
      icon: <IconContract size={30} />,
      isInDevelopment: true,
      redirectTo: "/page",
    },
    {
      title: "SST",
      icon: <IconContract size={30} />,
      isInDevelopment: true,
      redirectTo: "/page",
    },
  ];
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item xs={2} height={"150px"} key={item.title}>
          <ItemDashboard
            icon={item.icon}
            isInDevelopment={item.isInDevelopment}
            title={item.title}
            redirectTo={item.redirectTo}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SeguimientoContratos;
