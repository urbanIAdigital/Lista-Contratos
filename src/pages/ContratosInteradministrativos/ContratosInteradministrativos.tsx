import { Grid } from "@mui/material";
import ContractStatus from "./ContractStatus";
import ContractValues from "./ContractValues";

const ContratosInteradministrativos = () => {
  return (
    <Grid container height={"100%"} spacing={1}>
      <Grid item xs={5} height={"100%"}>
        <ContractStatus />
      </Grid>
      <Grid item xs={7} height={"100%"}>
        <ContractValues />
      </Grid>
    </Grid>
  );
};

export default ContratosInteradministrativos;
