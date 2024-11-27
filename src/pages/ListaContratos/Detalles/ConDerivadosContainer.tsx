import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ConDerivado } from "../../../interfaces/financiero";

interface ConDerivadosProps {
  conDerivados: ConDerivado[];
}

const ConDerivadosContainer: React.FC<ConDerivadosProps> = ({
  conDerivados,
}) => {
  const columns: GridColDef[] = [
    { field: "codigo_derivado", headerName: "Código Derivado", flex: 1 },
    { field: "cliente", headerName: "Cliente", flex: 1 },
    { field: "supervisor", headerName: "Supervisor", flex: 1 },
    { field: "valor_total", headerName: "Valor Total", flex: 1 },
    { field: "pago_total", headerName: "Pago Total", flex: 1 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={conDerivados}
        columns={columns}
        getRowId={(row) => row.codigo_derivado}
      />
    </div>
  );
};

export default ConDerivadosContainer;
