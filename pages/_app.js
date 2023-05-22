import "../styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../utils/MUIConfig/theme";
import createEmotionCache from "../utils/MUIConfig/createEmotionCache";
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
