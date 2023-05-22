import styled from "@emotion/styled";
import { Box, Button, Card, Typography, Grid } from "@mui/material";
import { theme } from "@/utils/MUIConfig/theme@";
import Link from "next/link";
import { useRouter } from "next/router";

const ItemLink = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  fontWeight: 700,
  width: "100%",
}));

const BoxDesktop = styled(Card)(({ theme }) => ({
  width: "100%",
  borderRadius: "0",
  color: "white",
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.down("md")]: {
    display: "none",
    visibility: "hidden",
  },
}));

export default function NavbarDesktop() {
  const router = useRouter();
  return (
    <>
      <BoxDesktop elevation={7} sx={{ py: 2 }}>
        <Box sx={{ mx: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography sx={{ ml: 2 }} variant="h6" color="white">
                Video Games
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    onClick={() => {
                      router.push("/");
                    }}
                    variant="outlined"
                    color="secondary"
                  >
                    Home
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    onClick={() => {
                      router.push("/my-cart");
                    }}
                    variant="outlined"
                    fullWidth
                    color="secondary"
                  >
                    My Cart
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </BoxDesktop>
    </>
  );
}
