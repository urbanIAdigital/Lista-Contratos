import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

const FilterComponent = (props: {
  onSubmit: (filters: {
    comuna: string;
    tipologia: string;
    estado: string;
    proyecto: string;
  }) => void;
}) => {
  const { onSubmit } = props;
  const optionsTipologia = [
    { label: "Mantenimiento General", value: "Mantenimiento General" },
    { label: "Mantenimiento Integral", value: "Mantenimiento Integral" },
    {
      label: "Restitución Parcial y Construcción de Espacios",
      value: "Restitución Parcial y Construcción de Espacios",
    },
  ];

  const comunas = [
    { label: "Popular - 1", value: "1" },
    { label: "Santa Cruz - 2", value: "2" },
    { label: "Manrique - 3", value: "3" },
    { label: "Aranjuez - 4", value: "4" },
    { label: "Castilla - 5", value: "5" },
    { label: "Doce de octubre - 6", value: "6" },
    { label: "Robledo - 7", value: "7" },
    { label: "Villa Hermosa - 8", value: "8" },
    { label: "Buenos Aires - 9", value: "9" },
    { label: "La Candelaria - 10", value: "10" },
    { label: "Laureles-Estadio - 11", value: "11" },
    { label: "La América - 12", value: "12" },
    { label: "San Javier - 13", value: "13" },
    { label: "Poblado - 14", value: "14" },
    { label: "Guayabal - 15", value: "15" },
    { label: "Belén - 16", value: "16" },
    { label: "San Sebastián de Palmitas - 50", value: "50" },
    { label: "San Cristóbal - 60", value: "60" },
    { label: "Altavista - 70", value: "70" },
    { label: "San Antonio de Prado - 80", value: "80" },
    { label: "Santa Elena - 90", value: "90" },
  ];

  const estados = [
    { label: "Recibido Cliente", value: "Recibido Cliente" },
    { label: "Terminado", value: "Terminado" },
    { label: "En Ejecucion", value: "En Ejecucion" },
  ];

  const initialValues = {
    label: "",
    value: "",
  };

  const [proyecto, setProyecto] = useState("");

  const [tipologia, setTipologia] = useState<{ label: string; value: string }>(
    initialValues
  );
  const [comuna, setComuna] = useState<{ label: string; value: string }>(
    initialValues
  );
  const [estado, setEstado] = useState<{ label: string; value: string }>(
    initialValues
  );

  const handleSubmit = () => {
    onSubmit({
      comuna: comuna.value,
      tipologia: tipologia.value,
      estado: estado.value,
      proyecto: proyecto,
    });
  };
  const handleClear = () => {
    setComuna(initialValues);
    setTipologia(initialValues);
    setProyecto("");
    setEstado(initialValues);
    onSubmit({ comuna: "", tipologia: "", estado: "", proyecto: "" });
  };
  return (
    <Box
      component={"div"}
      sx={{
        height: "200px",
        background:
          "linear-gradient(45deg, rgba(61,99,185,1) 0%, rgba(9,29,74,1) 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        alignContent={"center"}
      >
        <Grid item>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <TextField
              label="Buscar Proyecto"
              value={proyecto}
              onChange={(e) => setProyecto(e.target.value)}
              InputLabelProps={{
                sx: {
                  color: "#fff",
                  "&.Mui-focused": { color: "#fff" },
                  "&.MuiInputLabel-shrink": { color: "#fff" },
                },
              }}
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

            <Autocomplete
              options={comunas}
              value={comuna}
              getOptionLabel={(option) => option.label}
              onChange={(_, newValue) => setComuna(newValue || initialValues)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Seleccionar Comuna"
                  InputLabelProps={{
                    sx: {
                      color: "#fff",
                      "&.Mui-focused": { color: "#fff" },
                      "&.MuiInputLabel-shrink": { color: "#fff" },
                    },
                  }}
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
              sx={{ width: 250 }}
              ListboxProps={{
                sx: {
                  "& .MuiAutocomplete-option": {
                    color: "#000",
                    '&[aria-selected="true"]': {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  },
                },
              }}
            />

            <Autocomplete
              options={optionsTipologia}
              value={tipologia}
              getOptionLabel={(option) => option.label}
              onChange={(_, newValue) =>
                setTipologia(newValue || initialValues)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Seleccionar Tipología"
                  InputLabelProps={{
                    sx: {
                      color: "#fff",
                      "&.Mui-focused": { color: "#fff" },
                      "&.MuiInputLabel-shrink": { color: "#fff" },
                    },
                  }}
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
              sx={{ width: 250 }}
              ListboxProps={{
                sx: {
                  "& .MuiAutocomplete-option": {
                    color: "#000",
                    '&[aria-selected="true"]': {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  },
                },
              }}
            />
            <Autocomplete
              options={estados}
              value={estado}
              getOptionLabel={(option) => option.label}
              onChange={(_, newValue) => setEstado(newValue || initialValues)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Seleccionar Estado"
                  InputLabelProps={{
                    sx: {
                      color: "#fff",
                      "&.Mui-focused": { color: "#fff" },
                      "&.MuiInputLabel-shrink": { color: "#fff" },
                    },
                  }}
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
              sx={{ width: 250 }}
              ListboxProps={{
                sx: {
                  "& .MuiAutocomplete-option": {
                    color: "#000",
                    '&[aria-selected="true"]': {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  },
                },
              }}
            />

            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ height: "56px" }}
            >
              Ingresar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClear}
              sx={{ height: "56px" }}
            >
              Limpiar Filtros
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterComponent;
