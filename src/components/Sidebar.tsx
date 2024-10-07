// src/components/Sidebar.tsx
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useTranslation } from "react-i18next";
import { Collapse } from "@mui/material";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import data from '../constants/data_resp.json'

interface SidebarProps {
  open: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggleSidebar }) => {
  const { isAuthenticated } = useAuth();
  const { t } = useTranslation();
  const [openProjects, setOpenProjects] = useState(false);

  const handleProjectsClick = () => {
    setOpenProjects(!openProjects);
  };
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      onClose={toggleSidebar}
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          top: "64px",
          backgroundColor: "#FFF",
          color: "#E65700",
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Ecosistema Digital" />
        </ListItem>
        {isAuthenticated && (
          <>
            <ListItem button onClick={handleProjectsClick}>
              <ListItemText
                primary={`${t("Contratos Interadministrativos")}`}
              />
              {openProjects ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openProjects} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {data.contratos.map((item) => (
                  <ListItem
                    button
                    component={Link}
                    to={`/contrato/${item.redirect}`}
                    key={item.project_id}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary={item.menu_title} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </>
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
