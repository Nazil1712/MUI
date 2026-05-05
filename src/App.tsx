import { AutoAwesomeRounded } from "@mui/icons-material";
import { Button, Container, Slider, Stack, TextField } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md">
      <Stack spacing={2}>
        <TextField label="Name or Email" />
        <Slider/>
        <Button startIcon={<AutoAwesomeRounded/>} variant="contained">Submit</Button>
      </Stack>
    </Container>
  );
}

export default App;
