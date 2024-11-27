import { Box, Grid, Pagination, Typography } from "@mui/material";
import { useState } from "react";
import FilterComponent from "../../components/FilterComponent";
import dataResp from "../../constants/data_resp.json";
import CardComponent2 from "../../components/CardComponent2";
import { timestampToDateBogota, USDollar } from "../../helpers/date";
import ApexChartComponent from "../../components/TimelineChart";
const Home = () => {
  const [dataFromJson, setDataFromJson] = useState(dataResp);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  const onSubmitFilter = (data: {
    comuna: string;
    tipologia: string;
    estado: string;
    proyecto: string;
  }) => {

    if (
      data.comuna === "" &&
      data.tipologia === "" &&
      data.estado === "" &&
      data.proyecto === ""
    ) {
      setDataFromJson(dataResp);
      return;
    }

    const filteredData = [...dataResp].filter((item) => {
      const filterByComuna = data.comuna ? item.comuna === +data.comuna : true;
      const filterByEstado = data.estado ? item.estado === data.estado : true;
      const filterByTipologia = data.tipologia
        ? item.tipologia === data.tipologia
        : true;
      const filterByProyecto = data.proyecto
        ? item.proyecto.toLowerCase().includes(data.proyecto.toLowerCase())
        : true;

      return (
        filterByComuna &&
        filterByTipologia &&
        filterByEstado &&
        filterByProyecto
      );
    });
    setDataFromJson(filteredData);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataFromJson.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Box>
      <FilterComponent onSubmit={(data) => onSubmitFilter(data)} />
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
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
                Resultados: {`(${dataFromJson.length})`}
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
                {currentItems.map((item) => (
                  <Grid key={item.id} item xs={12} sm={4} md={3} mb={1} >
                    <CardComponent2
                      name={item.proyecto}
                      id={item.id}
                      listToRender={[
                        { primary: "Estado Avance:", secondary: item.estado },
                        { primary: "Contrato:", secondary: item.contrato },
                        {
                          primary: "Valor Contrato:",
                          secondary: isNaN(+item.vlrContrato)
                            ? "NA"
                            : USDollar.format(+item.vlrContrato),
                        },
                        { primary: "Tipología:", secondary: item.tipologia },
                        { primary: "Comuna:", secondary: item.comuna },
                        {
                          primary: "Fecha entrega:",
                          secondary: timestampToDateBogota(item.final),
                        },
                      ]}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Agregar el paginador */}
            <Grid item xs={12} display="flex" justifyContent="center" mt={3}>
              <Pagination
                count={Math.ceil(dataFromJson.length / itemsPerPage)} // Total de páginas
                page={currentPage} // Página actual
                onChange={handlePageChange} // Cambiar página
                color="primary"
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          bgcolor={"#ECDFDF"}
          width={"90%"}
          borderRadius={"5px"}
          mt={2}
          p={2}
        >
          <ApexChartComponent
            data={dataResp.map((proyecto) => ({
              x: proyecto.proyecto,
              y: [proyecto.inicio, proyecto.final],
            }))}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
