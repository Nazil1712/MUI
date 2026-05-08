import { Button, Grid, Typography, Container } from "@mui/material";

const ResponsiveNess = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4">Learning Responsiveness</Typography>
      <Grid container spacing={2}>
        <Grid size={{xs:12, md:6, xl:4}}>
          <Button variant="contained" fullWidth>1</Button>
        </Grid>
        <Grid size={{xs:12, md:6, xl:4}}>
          <Button variant="contained" fullWidth>2</Button>
        </Grid>
        <Grid size={{xs:12, md:6, xl:4}}>
          <Button variant="contained" fullWidth>3</Button>
        </Grid>

        {/* This will automatically caluclate it's size accordingly... */}
        <Grid size="grow">
          <Button variant="contained" fullWidth>4</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResponsiveNess;
