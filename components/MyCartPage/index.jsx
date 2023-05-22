import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import { useEffect } from "react";
import { Card, Typography, Grid, Button, Box } from "@mui/material";
import ButtonAddToCart from "../ButtonAddToCart";
import CardGame from "../ContainerGames/CardGame";

export default function MyCartPage() {
  const allCartItems = useSelector(
    (state) => state.users.currentUser.cartItems
  );

  useEffect(() => {
    console.log({ allCartItems });
  }, [allCartItems]);

  return (
    <>
      <Navbar />
      <Grid alignItems={"center"} sx={{ p: 2 }} container spacing={2}>
        {allCartItems ? (
          allCartItems.map((item) => (
            <>
              <Grid item xs={12} md={4}>
                <CardGame key={item.id} game={item} />
                <Box align="center" sx={{ mt: 1 }}>
                  <Button variant="contained" color="primary">
                    Buy by ${item.price}
                  </Button>
                </Box>
              </Grid>
            </>
          ))
        ) : (
          <>
            <Typography variant="h6" color="textPrimary">
              No items in cart
            </Typography>
          </>
        )}
      </Grid>
    </>
  );
}
