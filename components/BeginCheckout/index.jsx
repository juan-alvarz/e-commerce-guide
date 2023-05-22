import { Box, Dialog, Typography, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useState } from "react";
export default function BeginCheckout({ game }) {
  const [openModal, setOpenModal] = useState(false);

  const router = useRouter();

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        variant="contained"
        color="primary"
      >
        Buy by ${game.price}
      </Button>
      <Dialog open={openModal}>
        <Box sx={{ p: 2 }} align="center">
          <Typography variant="h5" color="textPrimary" fontWeight={700}>
            Buying {game.name}
          </Typography>
          <Typography variant="h6" color="textPrimary">
            You are about to buy {game.name} for {game.price},
          </Typography>
          <Grid sx={{ my: 2 }} container spacing={2}>
            <Grid item xs={12} md={6}>
              <Button
                onClick={() => router.push(`confirmation-checkout/${game.id}`)}
                fullWidth
                variant="contained"
                color="primary"
              >
                Buy
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                onClick={() => setOpenModal(false)}
                fullWidth
                variant="outlined"
                color="primary"
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </>
  );
}
