import { createTheme } from "@mui/material";

export const materialTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#0d47a1",
      },
      secondary: {
        main: "#1976d2",
      },
    },
  });

export const GlobalStyles = {
  container: {
    backgroundColor: (theme) => theme.palette.background.paper,
    padding: (theme) => theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: (theme) => theme.spacing(2),
  },
  buttons: {
    marginTop: (theme) => theme.spacing(4),
  },
  cardGrid: {
    padding: (theme) => theme.spacing(4, 0),
  },
  cardMedia: {
    aspectRatio: "16 / 9",
  }
};
