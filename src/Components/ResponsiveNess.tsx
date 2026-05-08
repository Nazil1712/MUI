import {
  Button,
  Grid,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  useMediaQuery,
  Autocomplete,
  TextField,
} from "@mui/material";
import { urPK } from "@mui/material/locale";

const theme = createTheme(
  {
    /* We can define  */
    // breakpoints:{
    //   values :{
    //     mobile:0,
    //     tablet: 640,
    //     laptop: 1024,
    //     desktop: 1200
    //   }
    // }
    components: {
      MuiButton: {
        // variants:}
      },
    },
  },
  urPK,
);

// Responsive tag 🙃
theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.4rem",
  },
};

const useIsDesktop = () => useMediaQuery("(min-width:1200px)");

const myOptions = [
  { label: "The Godfather", id: 1 },
  { label: "Pulp Fiction", id: 2 },
];

const ResponsiveNess = () => {
  const isTablet = useMediaQuery("(min-width:600px)");

  // OR --  Can Also create custom hook
  const isDeskTop = useIsDesktop();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Typography variant="h3">Learning Responsiveness</Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6, xl: 4 }}>
            <Button variant="contained" fullWidth>
              1
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6, xl: 4 }}>
            <Button variant="contained" fullWidth>
              2
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6, xl: 4 }}>
            <Button variant="contained" fullWidth>
              3
            </Button>
          </Grid>

          {/* This will automatically caluclate it's size accordingly... */}
          <Grid size="grow">
            <Button variant="contained" fullWidth>
              4
            </Button>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          sx={(theme) => ({
            marginTop: 2,
            backgroundColor: "green",
            [theme.breakpoints.between("xs", "md")]: {
              bgcolor: "yellow",
              color: "black",
            },
          })}
        >
          Responsive Button
        </Button>

        <Autocomplete
          sx={{ width: 300, marginTop: 2 }}
          // options={[]} // -- If you won't provide any options here, then by default a select value with text "No Option comes up - Which will be in Urdu PK 🙃,  Why? Because have specified that language after theme (createTheme)."
          options={myOptions}
          renderInput={(params) => <TextField {...params} label="User" />}
        />
      </Container>
      {/* {isTablet ? <p>I am in Tablet....</p> : <p>I am not in tablet</p>} */}
    </ThemeProvider>
  );
};

export default ResponsiveNess;
