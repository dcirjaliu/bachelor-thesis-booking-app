import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccentShape from "../../../components/AccentShape/AccentShape";
import ProfileCard from "../../../components/ProfileCard/ProfileCard";
import styles from "./MyProfile.module.scss";

function MyProfile() {
  const headerHeight = "80px";
  return (
    <Box className={styles.container}>
      <Grid container spacing={0}>
        <Grid
          size={{ md: 6 }}
          sx={{
            display: { xs: "none", md: "block" },
            mt: 0.1,
          }}
        >
          <AccentShape>
            Salut, <br /> [nume]!
          </AccentShape>
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
          <ProfileCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyProfile;
