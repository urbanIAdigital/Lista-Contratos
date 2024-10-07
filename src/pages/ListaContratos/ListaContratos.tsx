import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import dataResp from "../../constants/data_resp.json";

const ListaContratos = () => {
  const navigate = useNavigate();
  // const onSubmitFilter = (
  //   data: SetStateAction<{
  //     comuna: string;
  //     tipologia: string;
  //   }>
  // ) => {
  //   const filteredData = dataResp.filter((item: any) => {
  //     return item.comuna === +data.comuna;
  //   });
  //   setDataFromJson(filteredData);
  // };
  const rows = dataResp;
  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "id",
      headerName: "Identificador de Contrato",
      flex: 1,
    },
    {
      field: "ci",
      headerName: "Convenio Interadministrativo",
      flex: 2,
    },
    {
      field: "comuna",
      headerName: "Comuna",
      flex: 1,
    },
    {
      field: "ie",
      headerName: "Institucion Educativa",
      flex: 2,
    },
    {
      field: "prog%",
      headerName: "Avance Programado",
      flex: 1,
      renderCell: (params) => {
        return `${
          isNaN(+params.row["prog%"])
            ? "No aplica"
            : (+params.row["prog%"] * 100).toFixed() + "%"
        }`;
      },
    },
    {
      field: "ejec%",
      headerName: "Avance Ejecutado",
      flex: 1,
      renderCell: (params) => {
        return `${
          isNaN(+params.row["prog%"])
            ? "No aplica"
            : (+params.row["ejec%"] * 100).toFixed() + "%"
        }`;
      },
    },
    {
      field: "contrato",
      headerName: "Contrato",
      flex: 1,
    },
    {
      field: "vigencia",
      headerName: "Vigencia",
      flex: 1,
    },
  ];
  return (
    <Box>
      <Box width={"100%"} display={"flex"} justifyContent={"center"}>
        <Box bgcolor={"#FFF"} width={"90%"} borderRadius={"5px"} mt={2} p={2}>
          <DataGrid
            rows={rows}
            columns={columns}
            disableRowSelectionOnClick
            onCellClick={(params) => {
              console.log(
                "clickeado",
                navigate(`/contratos-interadministrativos/${params.id}`)
              );
            }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ListaContratos;
