import Box from "@mui/material/Box";
import styles from "./MyReservations.module.scss";
import HomeNavigationTabs from "../../../components/HomeNavigationTabs/HomeNavigationTabs";
import ReservationList from "../../../containers/ReservationList/ReservationList";

function MyReservations() {
  return (
    <Box className={styles.container}>
      <HomeNavigationTabs
        label1="Viitoare"
        label2="Istoric"
        label3="Anulate"
        indicatorColor="#280f91"
      />
      <ReservationList />
    </Box>
  );
}

export default MyReservations;
