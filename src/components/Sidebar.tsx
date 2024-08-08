import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { IconDashboard } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onOpen, onClose }) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <List>
        <ListItem
          button
          component={Link}
          to="/seguimiento-contratos"
          onClick={onClose}
        >
          <ListItemIcon>
            <IconDashboard />
          </ListItemIcon>
          <ListItemText primary="Seguimiento de contratos interadministrativos" />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default Sidebar;
