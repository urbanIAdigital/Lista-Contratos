import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Pagination,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import CardComponent2 from "../../components/CardComponent2";
import { useEffect } from "react";
import axios from "axios";
import LoadingComponent from "../../components/LoadingComponent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface CI {
  id: number;
  CONTRATO_INTERADMINISTRATIVO: string;
  NOMBRE_INTERADMINISTRATIVO: string;
  CENTRO_DE_COSTOS: string;
  CLIENTE: string;
  NOMBRE_ENTIDAD: any;
  PLAZO: any;
  OBJETO: string;
  FECHA_INICIO: any;
  FECHA_FIN: any;
  VALOR: string;
  ESTADO: any;
  created_at: string;
}

const ContratosInteradministrativos = () => {
  const [ci, setCi] = useState<CI[]>([]);
  const [initialCi, setInitialCi] = useState<CI[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [isChecked, setIsChecked] = useState(false);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleToggle = (event) => {
    const newState = event.target.checked;
    setIsChecked(newState);
    listCI(newState); // Pasamos el nuevo estado al callback
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ci.slice(indexOfFirstItem, indexOfLastItem);

  const currencyFormatter = (value: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const listCI = async (is_active = false) => {
    setLoading(true);
    try {
      const { data } = await axios.get<CI[]>(
        "http://localhost:3000/api/contratos_interadministrativos",
        { params: { is_active } }
      );
      setCi(data);
      setInitialCi(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    listCI();
  }, []);
  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.down("md")
  );

  return (
    <Box>
      <Box
        component={"div"}
        sx={{
          height: "auto",
          padding: "16px",
          background:
            "linear-gradient(45deg, rgba(61,99,185,1) 0%, rgba(9,29,74,1) 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {isSmallScreen ? (
          <Accordion sx={{ bgcolor: "transparent" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ color: "#fff" }}>
                Filtros de búsqueda
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Autocomplete
                    options={initialCi.map((c) => ({
                      value: c.CONTRATO_INTERADMINISTRATIVO,
                      label: c.NOMBRE_INTERADMINISTRATIVO,
                    }))}
                    getOptionLabel={(option) => option.label}
                    onChange={(_, newValue) => {
                      if (!newValue.value) {
                        setCi(initialCi);
                        return;
                      }
                      setCi(
                        initialCi.filter(
                          (c) =>
                            c.CONTRATO_INTERADMINISTRATIVO === newValue.value
                        )
                      );
                    }}
                    getOptionKey={(option) => option.value}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Seleccionar Contrato Interadministrativo"
                        InputLabelProps={{
                          sx: {
                            color: "#fff",
                            "&.Mui-focused": { color: "#fff" },
                            "&.MuiInputLabel-shrink": { color: "#fff" },
                          },
                        }}
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#ccc",
                            },
                            "&:hover fieldset": {
                              borderColor: "#888",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#000",
                            },
                          },
                          "& .MuiInputBase-root": {
                            color: "#fff",
                          },
                        }}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ) : (
          <Grid container spacing={2}>
            <Grid item pr={2} xs={12} sm={6} md={3}>
              <Autocomplete
                options={initialCi.map((c) => ({
                  value: c.CONTRATO_INTERADMINISTRATIVO,
                  label: c.NOMBRE_INTERADMINISTRATIVO,
                }))}
                getOptionLabel={(option) => option.label}
                onChange={(_, newValue) => {
                  if (!newValue) {
                    setCi(initialCi);
                    return;
                  }
                  setCi(
                    initialCi.filter(
                      (c) => c.CONTRATO_INTERADMINISTRATIVO === newValue.value
                    )
                  );
                }}
                getOptionKey={(option) => option.value}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Seleccionar Contrato Interadministrativo"
                    InputLabelProps={{
                      sx: {
                        color: "#fff",
                        "&.Mui-focused": { color: "#fff" },
                        "&.MuiInputLabel-shrink": { color: "#fff" },
                      },
                    }}
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#ccc",
                        },
                        "&:hover fieldset": {
                          borderColor: "#888",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#000",
                        },
                      },
                      "& .MuiInputBase-root": {
                        color: "#fff",
                      },
                    }}
                  />
                )}
              />
            </Grid>
          </Grid>
        )}
      </Box>
      <Box width={"100%"} display={"flex"} justifyContent={"center"}>
        <Box
          bgcolor={"#ECDFDF"}
          width={"90%"}
          borderRadius={"5px"}
          mt={2}
          p={2}
        >
          {loading ? (
            <LoadingComponent />
          ) : (
            <Grid container>
              <Grid item xs={12} textAlign={"center"}>
                <Typography variant="h4">Contratos Interadministrativos</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                textAlign={"left"}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={isChecked} onChange={handleToggle} />
                    }
                    label="Proyectos Activos"
                  />
                </FormGroup>
                <Typography>Resultados: {`(${ci?.length})`}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  display={"flex"}
                  flexDirection={"row"}
                  width={"100%"}
                  spacing={1}
                >
                  {currentItems?.map((item, index: number) => (
                    <Grid key={index} item xs={12} sm={4} md={3} mb={1}>
                      <CardComponent2
                        name={item.NOMBRE_INTERADMINISTRATIVO}
                        cliente={item.CLIENTE}
                        id={item.CONTRATO_INTERADMINISTRATIVO}
                        listToRender={[
                          {
                            primary: "Centro de costos:",
                            secondary: item.CENTRO_DE_COSTOS,
                          },
                          {
                            primary: "Valor de contrato:",
                            secondary: currencyFormatter(+item.VALOR),
                          },
                          {
                            primary: "Plazo:",
                            secondary: `${item.PLAZO} meses`,
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
                  count={Math.ceil(ci.length / itemsPerPage)} // Total de páginas
                  page={currentPage} // Página actual
                  onChange={handlePageChange} // Cambiar página
                  color="primary"
                />
              </Grid>
            </Grid>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ContratosInteradministrativos;
