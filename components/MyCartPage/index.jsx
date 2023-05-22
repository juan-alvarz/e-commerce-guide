import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import { useEffect } from "react";
import { Card, Typography, Grid, Button } from "@mui/material";
import ButtonAddToCart from "../ButtonAddToCart";

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
              <Grid item xs={12} md={6}>
                <Card variant="outlined">
                  <Grid
                    sx={{ px: 1 }}
                    alignItems="center"
                    container
                    spacing={2}
                  >
                    <Grid item xs={6}>
                      <Typography
                        variant="h5"
                        sx={{ p: 2 }}
                        color="textPrimary"
                      >
                        {item.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Button fullWidth variant="contained" color="secondary">
                        Buy by ${item.price}
                      </Button>
                    </Grid>
                    <Grid item xs={3}>
                      <ButtonAddToCart item={item} />
                    </Grid>
                  </Grid>
                </Card>
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
