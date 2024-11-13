import { Box, List, ListItem, Typography } from "@mui/material";
// import { IconSchool } from "@tabler/icons-react";
import IconSchool from "../assets/graduate.png";
import placeholderImage from "../assets/placeholder.jpg";

const CardComponent2 = (props: {
  name: string;
  listToRender: { primary: string; secondary: any }[];
}) => {
  const { name, listToRender } = props;

  return (
    <div className="first hero">
      <img src={placeholderImage} alt="" className="image" />
      <div className="text"></div>
      <div className="logo">
        <img src={IconSchool} alt="" />
      </div>
      <div className="main-text">
        <p>{name}</p>
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
