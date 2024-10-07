import { Grid } from "@mui/material";
import CardComponent from "../../components/CardComponent";

const Cards = () => {
  return (
    <Grid container spacing={2} display={"flex"} flexDirection={"row"}>
      <Grid item xs={12} sm={4} md={2}>
        <CardComponent />
      </Grid>
      <Grid item xs={12} sm={4} md={2}>
        <CardComponent />
      </Grid>
      <Grid item xs={12} sm={4} md={2}>
        <CardComponent />
      </Grid>
      <Grid item xs={12} sm={4} md={2}>
        <CardComponent />
      </Grid>
      <Grid item xs={12} sm={4} md={2}>
        <CardComponent />
      </Grid>
      <Grid item xs={12} sm={4} md={2}>
        <CardComponent />
      </Grid>
    </Grid>
  );
};

export default Cards;
