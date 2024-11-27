import React from "react";
import { TextField, Grid } from "@mui/material";
import { ContratoDetalles } from "../../../interfaces/financiero";
import { currencyFormatter } from "../../../helpers/date";

interface ContratoDetallesProps {
  contratoDetalles: ContratoDetalles;
}

const ContratoDetallesContainer: React.FC<ContratoDetallesProps> = ({
  contratoDetalles,
}) => {
  const currencyFields = ["valor_honorarios", "valor"];
  return (
    <Grid container spacing={2}>
      {Object.entries(contratoDetalles).map(([key, value]) => (
        <Grid
          item
          xs={12}
          sm={key === "objeto_contrato" ? 12 : 6}
          md={key === "objeto_contrato" ? 12 : 4}
          key={key}
        >
          <TextField
            multiline={key === "objeto_contrato" ? true : false}
            label={key.replace(/_/g, " ").toUpperCase()}
            value={
              currencyFields.includes(key) ? currencyFormatter(+value) : value
            }
            fullWidth
            InputProps={{ readOnly: true }}
            variant="outlined"
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ContratoDetallesContainer;
