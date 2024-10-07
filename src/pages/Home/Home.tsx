import { Box, Grid, Pagination, Typography } from "@mui/material";
import { useState } from "react";
import CardComponent from "../../components/CardComponent";
import FilterComponent from "../../components/FilterComponent";
import dataResp from "../../constants/data_resp.json";


const Home = () => {
  const [dataFromJson, setDataFromJson] = useState(dataResp);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [itemsPerPage] = useState(8); // Cantidad de items por página

  // Función para cambiar la página
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  // Filtrar datos según los inputs del filtro
  const onSubmitFilter = (data: {
    comuna: string;
    tipologia: string;
    estado: string;
  }) => {
    console.log(data);

    if (data.comuna === "" && data.tipologia === "" && data.estado === "") {
      setDataFromJson(dataResp);
      return;
    }
    const filteredData = [...dataResp].filter((item) => {
      const filterByComuna = data.comuna ? item.comuna === +data.comuna : true;
      const filterByEstado = data.estado ? item.estado === data.estado : true;
      const filterByTipologia = data.tipologia
        ? item.tipologia === data.tipologia
        : true;
      console.log(filterByComuna);

      return filterByComuna && filterByTipologia && filterByEstado;
    });
    setDataFromJson(filteredData);
  };

  // Obtener los datos correspondientes a la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataFromJson.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Box>
      <FilterComponent onSubmit={(data) => onSubmitFilter(data)} />
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
                Resultados: {`(${dataFromJson.length})`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                display={"flex"}
                flexDirection={"row"}
                width={"100%"}
                spacing={1}
              >
                {currentItems.map((item, index: number) => (
                  <Grid key={index} item xs={12} sm={4} md={3} mb={1}>
                    <CardComponent data={item} />
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
      </Box>
    </Box>
  );
};

export default Home;
