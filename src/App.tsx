import { useMemo } from "react";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./scenes/navbar";
import Dashboard from "./scenes/dashboard";
function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ width: "100%", height: "100vh", padding: "1rem 2rem 4rem" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/predictions" element={<div>Predictions page</div>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
