
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Header1r } from "./components/header/header-1r";
import { Header2r } from "./components/header/header-2";
import { Hero } from "./components/hero/hero";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1r />
        <Header2r />
        <Hero />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
