import { Box, CircularProgress } from "@mui/material";
import { FC } from "react";

const LoadingComponent: FC<{ height?: number }> = ({ height }) => (
  <Box
    sx={{
      width: "100%",
      height: height,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CircularProgress />
  </Box>
);

LoadingComponent.defaultProps = {
  height: 400,
};

export default LoadingComponent;
