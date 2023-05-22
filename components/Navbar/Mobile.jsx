import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import Link from "next/link";

const ItemLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  fontWeight: 700,
  width: "100%",
}));

const BoxMobile = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
    visibility: "hidden",
  },
}));

function NavbarMobile() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <BoxMobile>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Video Games
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
          <Box
            sx={{
              width: "90%",
              width: "200px",
              mt: 5,
            }}
            align="center"
          >
            <Box
              sx={{
                p: 2,
              }}
            >
              <ItemLink href={"/"}>Home</ItemLink>
            </Box>
            <Box
              sx={{
                p: 2,
              }}
            >
              <ItemLink href={"/cart"}>My Cart</ItemLink>
            </Box>
          </Box>
        </Drawer>
      </BoxMobile>
    </>
  );
}

export default NavbarMobile;
