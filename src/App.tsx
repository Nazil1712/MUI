import { AutoAwesomeRounded } from "@mui/icons-material";
import { Button, Container, Slider, Stack, TextField } from "@mui/material";

function App() {
  /* return (
    <Container maxWidth="md">
      <Stack spacing={2}>
        <TextField label="Name or Email" />
        <Slider/>
        <Button startIcon={<AutoAwesomeRounded/>} variant="contained">Submit</Button>
      </Stack>
    </Container>
  ); */

  /* Customizing with sx={{}} */
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}

      // Here we have access of theme also: 
      /* sx={(theme)=>({
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:theme.spacing(20)
      })} */
    >
      <Stack spacing={2}>
        <Slider
          /* sx={{
            width: 100,
            color: "success.main",
            ":hover":{
              color:"red"
            },
            "& .MuiSlider-thumb": {
              color: "blue",
              ":hover" : {
                color:"white"
              }
            },
          }} */

        disabled
        sx={{
          width: 100,
          /* "&.Mui-disabled":{
            ".MuiSlider-thumb":{
              color:"green"
            }
          } */
         "&.Mui-disabled .MuiSlider-rail":{
          color:"green"
         }
        }}

        />
      </Stack>
    </Container>
  );
}

export default App;
