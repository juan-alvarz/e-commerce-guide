import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Navbar from "../Navbar";
import { Box, Button } from "@mui/material";
import ButtonAddToCart from "../ButtonAddToCart";
export default function GameDetail({ game }) {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 2 }} maxWidth="lg">
        <Grid alignItems="center" container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box align="center">
              <Image
                src={game.image}
                alt={`game-image-${game.name}`}
                width={400}
                height={700}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box align="center">
              <Typography variant="h3" color="textPrimary" fontWeight={700}>
                {game.name}
              </Typography>
              <Typography variant="h5" color="textSecondary">
                Platform: {game.platform}
              </Typography>
              <Typography variant="h6" color="textPrimary">
                {game.description}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <ButtonAddToCart item={game} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button fullWidth variant="outlined" color="primary">
                    Buy by ${game.price}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
