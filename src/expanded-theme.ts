import { Palette } from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
      custom: Palette['primary'];
    }
  
    interface PaletteOptions {
      custom?: PaletteOptions['primary'];
    }
  }
  