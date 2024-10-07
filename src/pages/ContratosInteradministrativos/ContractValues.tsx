import { Card, CardContent, Grid } from "@mui/material";

const ContractValues = () => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent sx={{ height: "100%" }}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={4} textAlign={"center"}>
                Valor Inicial
              </Grid>
              <Grid item xs={4} textAlign={"center"}>
                Adiciones
              </Grid>
              <Grid item xs={4} textAlign={"center"}>
                Valor Total
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4} textAlign={"center"}>
                $104.742.695.406
              </Grid>
              <Grid item xs={4} textAlign={"center"}>
                $104.742.695.406
              </Grid>
              <Grid item xs={4} textAlign={"center"}>
                $104.742.695.406
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            2
          </Grid>
          <Grid item xs={12}>
            3
          </Grid>
          <Grid item xs={12}>
            4
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ContractValues;
