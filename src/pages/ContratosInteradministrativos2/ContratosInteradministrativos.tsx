import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
// import FilterComponent from "../../components/FilterComponent";
// import dataResp from "../../constants/data_resp.json";
import CardComponent2 from "../../components/CardComponent2";
import { useEffect } from "react";
import axios from "axios";
import { timestampToDateBogota, USDollar } from "../../helpers/date";

interface CI {
  contrato_id: number;
  tipo: number;
  num_contrato: number;
  codigo: string;
  rubro: string;
  nombre: string;
  cliente: string;
  con_interadministrativo: string;
  nombre_interadministrativo: string;
  tipologia: string;
  anio: number;
  estado: string;
  fecha_contrato: string;
  plazo: number[];
  tipo_plazo: string[];
  prorroga_dias: number;
  total_dias: number;
  supervisor: string;
  proy_codi: string;
  proyecto: string;
  porcentaje_proyecto: string;
  fecha_ini_contrato: string;
  fecha_final_contrato: string;
  fecha_real_fini: string;
  fecha_competencia: string;
  tipo_contrato: string[];
  valtotal: string;
  pago_total: string;
  activo: string;
  convenio: string;
  nombre_convenio: string;
  ct_estado: string;
  subgerencia: string;
}

const ContratosInteradministrativos = () => {
  const [ci, setCi] = useState<CI[]>();
  //   const [dataFromJson, setDataFromJson] = useState(ci);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [itemsPerPage] = useState(8);

  //   const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
  //     setCurrentPage(value);
  //   };
  //   const onSubmitFilter = (data: {
  //     comuna: string;
  //     tipologia: string;
  //     estado: string;
  //     proyecto: string;
  //   }) => {
  //     console.log(data);

  //     // if (
  //     //   data.comuna === "" &&
  //     //   data.tipologia === "" &&
  //     //   data.estado === "" &&
  //     //   data.proyecto === ""
  //     // ) {
  //     //   setDataFromJson(ci);
  //     //   return;
  //     // }

  //     // const filteredData = [...ci].filter((item) => {
  //     //   const filterByComuna = data.comuna ? item.comuna === +data.comuna : true;
  //     //   const filterByEstado = data.estado ? item.estado === data.estado : true;
  //     //   const filterByTipologia = data.tipologia
  //     //     ? item.tipologia === data.tipologia
  //     //     : true;
  //     //   const filterByProyecto = data.proyecto
  //     //     ? item.proyecto.toLowerCase().includes(data.proyecto.toLowerCase())
  //     //     : true;

  //     //   return (
  //     //     filterByComuna &&
  //     //     filterByTipologia &&
  //     //     filterByEstado &&
  //     //     filterByProyecto
  //     //   );
  //     // });

  //     // setDataFromJson(filteredData);
  //   };
  useEffect(() => {
    axios
      .get<CI[]>("http://localhost:3000/api/contratos_derivados")
      .then((res) => setCi(res.data));
  }, []);

  //   const indexOfLastItem = currentPage * itemsPerPage;
  //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //   const currentItems = dataFromJson.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Box>
      {/* <FilterComponent onSubmit={(data) => onSubmitFilter(data)} /> */}
      <Box width={"100%"} display={"flex"} justifyContent={"center"}>
        <Box
          bgcolor={"#ECDFDF"}
          width={"90%"}
          borderRadius={"5px"}
          mt={2}
          p={2}
        >
          <Grid container>
            <Grid item xs={12} textAlign={"center"}>
              <Typography variant="h4">Proyectos</Typography>
            </Grid>
            <Grid item xs={12} textAlign={"left"}>
              <Typography variant="h6">
                Resultados: {`(${ci?.length})`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                display={"flex"}
                flexDirection={"row"}
                width={"100%"}
                spacing={3}
              >
                {ci?.map((item, index: number) => (
                  <Grid key={index} item xs={12} sm={4} md={3} mb={1}>
                    <CardComponent2
                      name={item.proyecto}
                      listToRender={[
                        { primary: "Rubro:", secondary: item.rubro },
                        { primary: "Cliente:", secondary: item.cliente },
                        {
                          primary: "Valor Contrato:",
                          secondary: isNaN(+item.valtotal)
                            ? "NA"
                            : USDollar.format(+item.valtotal),
                        },
                        { primary: "Pago:", secondary: item.pago_total },
                        { primary: "Convenio:", secondary: item.convenio },
                        {
                          primary: "Fecha Real Final:",
                          secondary: timestampToDateBogota(
                            item.fecha_real_fini
                          ),
                        },
                      ]}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Agregar el paginador */}
            {/* <Grid item xs={12} display="flex" justifyContent="center" mt={3}>
              <Pagination
                count={Math.ceil(dataFromJson.length / itemsPerPage)} // Total de páginas
                page={currentPage} // Página actual
                onChange={handlePageChange} // Cambiar página
                color="primary"
              />
            </Grid> */}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ContratosInteradministrativos;
