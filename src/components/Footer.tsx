import { Container, Link, Typography } from "@mui/material";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f5f5f5",
        padding: "10px 0",
        marginTop: "20px",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          {"© "}
          <Link color="inherit" href="https://your-website.com">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
