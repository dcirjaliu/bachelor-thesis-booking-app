import Grid from "@mui/material/Grid";
import Header from "../../components/Header/Header";

function ServiceDetails() {
  return (
    <Grid container spacing={4} alignItems="center">
      <Header />
      <Grid item xs={12} md={5}></Grid>
      <Grid item xs={12} md={7}></Grid>
    </Grid>
  );
}

export default ServiceDetails;
