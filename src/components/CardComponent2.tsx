import { Box, List, ListItem, Typography } from "@mui/material";
// import { IconSchool } from "@tabler/icons-react";
import IconSchool from "../assets/graduate.png";
import placeholderImage from "../assets/placeholder.jpg";

const CardComponent2 = (props: { data: any }) => {
  const { data } = props;
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "COP",
  });
  function timestampToDateBogota(timestamp) {
    // Crear un objeto Date con el timestamp
    const date = new Date(timestamp);

    // Convertir la fecha a la zona horaria de Bogotá (UTC-5)
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "America/Bogota",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };

    // Formatear la fecha en el formato dd/mm/yyyy
    const formattedDate = new Intl.DateTimeFormat("es-CO", options).format(
      date
    );

    // Reorganizar la fecha en el formato deseado
    const [day, month, year] = formattedDate.split("/");

    return `${day}/${month}/${year}`;
  }
  const listToRender = [
    { primary: "Estado Avance:", secondary: data.estado },
    { primary: "Contrato:", secondary: data.contrato },
    {
      primary: "Valor Contrato:",
      secondary: isNaN(data.vlrContrato)
        ? "NA"
        : USDollar.format(data.vlrContrato),
    },
    { primary: "Tipología:", secondary: data.tipologia },
    { primary: "Comuna:", secondary: data.comuna },
    {
      primary: "Fecha entrega:",
      secondary: timestampToDateBogota(data.final),
    },
  ];
  return (
    <div className="first hero">
      <img
        src={placeholderImage}
        alt=""
        className="image"
      />
      <div className="text"></div>
      <div className="logo">
        <img src={IconSchool} alt="" />
      </div>
      <div className="main-text">
        <p>{data.proyecto}</p>
      </div>
      <Box display={"flex"} flexDirection={"row"}>
        <List sx={{ color: "white" }}>
          {listToRender.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                justifyContent: "start",
                paddingTop: "0px",
                paddingBottom: "0px",
              }}
            >
              <Typography variant="body1" fontSize={14}>
                {item.primary}
              </Typography>
            </ListItem>
          ))}
        </List>
        <List sx={{ color: "white", maxWidth: "190px" }}>
          {listToRender.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                justifyContent: "start",
                py: 0,
                pl: 0,
              }}
            >
              <Typography
                variant="body1"
                fontSize={14}
                sx={{
                  m: 0,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontWeight: "bold",
                }}
              >
                {item.secondary}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      {/* <div className="hero-btn">
        <a href="#">Ver Detalles</a>
      </div> */}
    </div>
  );
};

export default CardComponent2;
