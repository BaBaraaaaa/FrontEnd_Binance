import { useMemo } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
