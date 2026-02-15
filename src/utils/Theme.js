import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Style for the scrollbar
        "*::-webkit-scrollbar": {
          width: "0.5em",
          height: "0.5em",
          backgroundColor: "#ecf0f1",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#3A506B",
          borderRadius: "0.2em",
        },
        "*": {
          boxSizing: "unset",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FEFFFF",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Manrope', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      smd: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      primary: "#ecf0f1",
      secondary: "#bdc3c7",
    },
    text: {
      primary: "#0B132B",
      secondary: "#53739A",
      drawer: "#ecf0f1",
    },
    logo: {
      primary: "#53739A",
    }
  }
});

export const darkTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Style for the scrollbar
        "*::-webkit-scrollbar": {
          width: "0.4em",
          height: "0.4em",
          backgroundColor: "#212121",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#5BC0BE",
          borderRadius: "0.2em",
        },
        "*": {
          boxSizing: "unset",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FEFFFF",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Manrope', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      smd: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      primary: "#212121",
      secondary: "#3A506B",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#6FFFE9"
    },
    logo: {
      primary: "#03DAC6",
    }
  },
});
