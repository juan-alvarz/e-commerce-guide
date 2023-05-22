import "../styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../utils/MUIConfig/theme";
import createEmotionCache from "../utils/MUIConfig/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { store } from "../app/store";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

export default MyApp;
