import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import FeYAlegria from "../assets/fe_y_alegria.png";

export default function CardComponent(props: { data: any }) {
  const { data } = props;
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "COP",
  });

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={FeYAlegria}
          alt={data.contrato}
        />
        <CardContent sx={{ p: 1 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              m: 0,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.proyecto}
          </Typography>
          <List>
            {[
              { primary: "Contrato:", secondary: data.contrato },
              { primary: "CI:", secondary: data.ci },
              { primary: "Estado Avance:", secondary: data.estado },
              {
                primary: "Valor Contrato:",
                secondary: isNaN(data.vlrContrato)
                  ? "NA"
                  : USDollar.format(data.vlrContrato),
              },
              { primary: "Tipología:", secondary: data.tipologia },
              { primary: "Comuna:", secondary: data.comuna },
            ].map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: 0.5,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold" }}
                  fontSize={14}
                >
                  {item.primary}
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={12}
                  sx={{
                    m: 0,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.secondary}
                </Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
