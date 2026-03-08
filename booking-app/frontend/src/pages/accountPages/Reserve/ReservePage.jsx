import Calendar from "../../../components/Calendar/Calendar";
import styles from "./ReservePage.module.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BookingPanel from "../../../components/BookingPanel/BookingPanel";

function ReservePage() {
  return (
    <Box className={styles.container}>
      <Grid container spacing={0} sx={{ padding: "30px" }}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Calendar />
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BookingPanel />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ReservePage;
