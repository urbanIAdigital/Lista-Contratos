import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconMenu2 } from "@tabler/icons-react";
import { FC } from "react";

interface HeaderProps {
  onDrawerToggle: () => void;
}

const Header: FC<HeaderProps> = ({ onDrawerToggle }) => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onDrawerToggle}
        >
          <IconMenu2 />
        </IconButton>
        <Typography variant="h6" noWrap>
          Contratos Interadministrativos
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
