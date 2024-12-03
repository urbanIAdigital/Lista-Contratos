import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Rubro, Detalle } from "../../../interfaces/financiero";
import { IconEye } from "@tabler/icons-react";
import { currencyFormatter } from "../../../helpers/date";

interface RubrosProps {
  rubros: Rubro[];
}

const RubrosContainer: React.FC<RubrosProps> = ({ rubros }) => {
  const [openModal, setOpenModal] = useState(false);
  console.log(rubros);

  const [selectedDetalles, setSelectedDetalles] = useState<Detalle[]>([]);
  const handleOpenModal = (detalles: Detalle[]) => {
    setSelectedDetalles(detalles);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedDetalles([]);
  };

  const rubrosColumns: GridColDef[] = [
    { field: "rubro", headerName: "Rubro", flex: 1 },
    { field: "nombre_rubro", headerName: "Nombre Rubro", flex: 1 },
    {
      field: "contrato_interadministrativo",
      headerName: "Contrato",
      flex: 1,
    },
    { field: "anos_unicos", headerName: "Años Únicos", flex: 1 },
    {
      field: "total_apropiacion_inicial",
      headerName: "Total Inicial",
      flex: 1,
    },
    {
      field: "total_apropiacion_definitiva",
      headerName: "Total Definitiva",
      flex: 1,
    },
    {
      field: "acciones",
      headerName: "Detalles",
      flex: 1,
      renderCell: (params) => (
        <>
          {/* {JSON.stringify(params.row.detalles)} */}
          {params.row.anos_unicos[0] && (
            <Tooltip title="Ver Detalles">
              <IconButton
                color="primary"
                onClick={() => handleOpenModal(params.row.detalles)}
              >
                <IconEye />
              </IconButton>
            </Tooltip>
          )}
        </>
      ),
    },
  ];

  const detallesColumns: GridColDef[] = [
    { field: "ano", headerName: "Año", flex: 1 },
    {
      field: "apropiacion_inicial",
      headerName: "Apropiación Inicial",
      flex: 1,
      valueFormatter: (params) => currencyFormatter(params),
    },
    {
      field: "apropiacion_definitiva",
      headerName: "Apropiación Definitiva",
      flex: 1,
      valueFormatter: (params) => currencyFormatter(params),
    },
    {
      field: "cdp",
      headerName: "CDP",
      flex: 1,
      valueFormatter: (params) => currencyFormatter(params),
    },
    {
      field: "disponible",
      headerName: "Disponible",
      flex: 1,
      valueFormatter: (params) => currencyFormatter(params),
    },
    {
      field: "comprometido",
      headerName: "Comprometido",
      flex: 1,
      valueFormatter: (params) => currencyFormatter(params),
    },
    {
      field: "pagos",
      headerName: "Pagos",
      flex: 1,
      valueFormatter: (params) => currencyFormatter(params),
    },
    {
      field: "por_comprometer",
      headerName: "Por Comprometer",
      flex: 1,
      valueFormatter: (params) => currencyFormatter(params),
    },
    {
      field: "por_pagar",
      headerName: "Por Pagar",
      flex: 1,
      valueFormatter: (params) => currencyFormatter(params),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rubros}
        columns={rubrosColumns}
        getRowId={(row) => row.rubro}
      />

      {/* Modal para mostrar detalles */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle>Detalles por Año</DialogTitle>
        <DialogContent>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={selectedDetalles}
              columns={detallesColumns}
              getRowId={(row) => row.ano}
            />
          </div>
          <Button
            onClick={handleCloseModal}
            color="primary"
            variant="contained"
            fullWidth
          >
            Cerrar
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RubrosContainer;
