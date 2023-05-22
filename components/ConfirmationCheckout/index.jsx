import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "../Navbar";
import { Box } from "@mui/material";
import { theme } from "@/utils/MUIConfig/theme@";

export default function ConfirmationCheckout({ game }) {
  return (
    <>
      <Navbar />
      <Container
        align="center"
        sx={{
          mt: 2,
        }}
        maxWidth="lg"
      >
        <Typography variant="h4" fontWeight={700} color="textPrimary">
          Thank You for buy {game.name}
        </Typography>
        <Typography sx={{mt:5}} variant="h6" color="textPrimary">
          You recently have adquired {game.name} for {game.price}, enjoy the
          game!
        </Typography>
      </Container>
    </>
  );
}
