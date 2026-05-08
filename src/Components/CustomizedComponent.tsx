import {
  styled,
  Slider,
  type SliderProps,
  createTheme,
  Button,
  ThemeProvider,
  Typography,
  CssBaseline,
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  useColorScheme,
  alpha,
} from "@mui/material";
import { blue, lime, purple, red } from "@mui/material/colors";

/* const CustomSlider = styled(Slider)<SliderProps>(({theme})=>({                      
    width: theme.spacing(10), // 10 * 8px ==> 80px                      
    color: theme.palette.success.main,                      

    "& .MuiSlider-thumb" : {                        
        "&:hover, &.Mui-focusVisible" :{                        
            color:theme.palette.error.main                      
        }                       
    }                       
})) */

// Using Custom SliderProps

type CustomSliderProps = SliderProps & {
  error?: boolean;
};

const CustomSlider = styled(Slider, {
  shouldForwardProp: (prop) => prop != "error",
})<CustomSliderProps>(({ theme, error }) => ({
  width: theme.spacing(10), // 10 * 8px ==> 80px
  color: theme.palette.success.main,

  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      color: error ? theme.palette.error.main : theme.palette.success.main,
    },
  },
}));

// Overriding Global theme
const theme = createTheme({
  colorSchemes: {
    // dark: true,
    dark: {
      palette: {
        primary: {
          main: "#543345",
        },
      },
    },

    light: {
      palette: {
        primary: {
          main: alpha("#ff0000", 0.5),
        },
        secondary: purple,
        // custom: lime
      },
    },
  },

  typography: {
    // fontFamily:"-apple-system",

    button: {
      // fontSize:"9rem",
      fontStyle: "italic",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        // disableRipple: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          fontSize: "2rem",
          variants: [
            {
              props: {
                variant: "outlined",
                color: "secondary",
              },
              style: {
                fontSize: ".5rem",
              },
            },
            {
              props: { variant: "dashed" },
              style: { border: `4px dashed ${red[500]}` },
            },
            {
              props: (props) =>
                props.variant == "dashed" && props.color != "secondary",
              style: {
                border: `2px dashed ${blue[500]}`,
              },
            },
          ],
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: (theme) => `
                * {
                    // margin: 20px;
                    // padding: 20px;
                }

                h1 {
                    color: ${theme.palette.success.main}
                }
            `,
    },
  },
});

function ThemeChanger() {
  const { mode, setMode } = useColorScheme();
  if (!mode) return null;

  return (
    <RadioGroup
      value={mode}
      onChange={(e) => setMode(e.target.value as "light" | "dark" | "system")}
    >
      <FormControlLabel control={<Radio />} value={"system"} label="System" />
      <FormControlLabel control={<Radio />} value={"light"} label="Light" />
      <FormControlLabel control={<Radio />} value={"dark"} label="Dark" />
    </RadioGroup>
  );
}

const CustomizedComponent = () => {
  return (
    <Stack
      sx={{
        gap: 2,
        maxWidth: "50vw",
        marginLeft: 5,
        marginTop: 5,
      }}
    >
      <ThemeProvider theme={theme}>
        <ThemeChanger />
        <CssBaseline />
        <CustomSlider error={true} />
        <Button>Submit</Button>
        <Button variant="outlined" color="secondary">
          Outlined Button
        </Button>

        <Button
          sx={[
            () => ({ backgroundColor: "red" }),
            (theme) =>
              theme.applyStyles("dark", {
                backgroundColor: "blue",
              }),
          ]}
        >
          Btn Depends on Mode
        </Button>
        <Button variant="dashed">Dashed Button</Button>
        <Typography variant="h1">H1</Typography>
        <Typography variant="h2">H2</Typography>
      </ThemeProvider>
    </Stack>
  );
};

export default CustomizedComponent;
