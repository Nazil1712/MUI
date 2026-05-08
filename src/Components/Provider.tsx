import { ThemeProvider } from "@mui/material";
import type { ReactNode } from "react";
import useTheme from "../hooks/useTheme";

const Provider = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;

/* Then You can wrap everything around <Provider></Provider> */
