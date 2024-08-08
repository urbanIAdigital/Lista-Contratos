import { Card, CardContent, Icon, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface ItemDashboardProps {
  icon: React.ReactNode;
  title: string;
  isInDevelopment: boolean;
  redirectTo: string;
}

const ItemDashboard = ({
  icon,
  title,
  isInDevelopment,
  redirectTo,
}: ItemDashboardProps) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ cursor: "pointer" }} onClick={() => navigate(redirectTo)}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Icon sx={{ width: "3rem", height: "3rem" }}>{icon}</Icon>
        <Typography fontSize={"0.9rem"} textAlign={"center"}>
          {title}
        </Typography>
        {isInDevelopment && (
          <Typography color="#646cffaa">En desarrollo</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ItemDashboard;
