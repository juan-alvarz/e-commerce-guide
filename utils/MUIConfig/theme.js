import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#13293D",
    },
    secondary: {
      main: "#9EDC7C",
    },
    text: {
      primary: "#101828",
      secondary: "#1795A6",
      disabled: "rgba(99, 106, 133, 1)",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          borderRadius: "4px",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});
