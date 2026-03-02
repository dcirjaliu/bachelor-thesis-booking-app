import ReservationCard from "../../components/ReservationCard/ReservationCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function ReservationList() {
  return (
    <Box
      sx={{
        minHeight: "500px",
        width: "100%",
        paddingRight: "100px",
        paddingLeft: "100px",
        paddingTop: "20px",
      }}
    >
      <Grid container spacing={4} justifyContent={"center"}>
        <ReservationCard />
      </Grid>
    </Box>
  );
}

export default ReservationList;
