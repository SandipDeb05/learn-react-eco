import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseLine from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine>{children}</CssBaseLine>
    </ThemeProvider>
  );
};

export default AppProviders;
