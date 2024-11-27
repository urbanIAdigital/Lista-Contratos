import { Box, List, ListItem, Typography } from "@mui/material";
import IconSchool from "../assets/graduate.png";
import placeholderImage from "../assets/placeholder.jpg";
import { useNavigate } from "react-router-dom";

const CardComponent2 = (props: {
  name: string;
  cliente: string;
  listToRender: { primary: string; secondary: any }[];
  id: string;
}) => {
  const { name, listToRender, id, cliente } = props;
  const navigate = useNavigate();
  return (
    <div className="first hero" onClick={() => navigate(`/${id}`)}>
      <img src={placeholderImage} alt="" className="image" />
      <div className="text"></div>
      <div className="logo">
        <img src={IconSchool} alt="" />
      </div>
      <div className="main-text">
        <p>{id}</p>
      </div>
      <Box display={"flex"} flexDirection={"column"} mt={"-20px"}>
        <Box zIndex={1} textAlign={"center"}>
          <Typography
            color={"white"}
            fontSize={12}
            fontWeight={"bold"}
            px={2}
          >
            {name}
          </Typography>
          <Typography
            color={"white"}
            fontSize={12}
            px={2}
            m={0}
          >
            {cliente}
          </Typography>
        </Box>
        <List sx={{ color: "white" }}>
          {listToRender.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between", // Asegura que estén uno al lado del otro
                paddingTop: "0px",
                paddingBottom: "0px",
                alignItems: "center",
                flexWrap: "nowrap", // Impide que los elementos se muevan a otra línea
              }}
            >
              <Typography
                variant="body1"
                fontSize={14}
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  flex: 1, // Asegura que use espacio proporcional
                  marginRight: "8px", // Espacio entre primary y secondary
                }}
              >
                {item.primary}
              </Typography>
              <Typography
                variant="body1"
                fontSize={14}
                sx={{
                  maxWidth: "220px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontWeight: "bold",
                  textAlign: "right", // Alinea el texto a la derecha si es necesario
                }}
              >
                {item.secondary}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default CardComponent2;
