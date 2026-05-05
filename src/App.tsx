import { Button, Container, Slider, Stack, TextField } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md">
      <Stack spacing={2}>
        <Button variant="contained">Hello World !</Button>
        <TextField label="Name or Email" />
        <Slider />
      </Stack>
    </Container>
  );
}

export default App;
