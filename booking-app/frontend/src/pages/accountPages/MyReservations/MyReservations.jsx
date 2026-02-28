import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import styles from "./MyReservations.module.scss";

function MyReservations() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className={styles.container}>
      <Box sx={{ width: "100%", bgcolor: "transparent" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="false"
          allowScrollButtonsMobile
          centered={false}
          sx={{
            "& .MuiTabs-flexContainer": {
              gap: { xs: 1, md: 6 },
              marginLeft: 0,
              justifyContent: { xs: "flex-start", md: "center" },
            },
            "& .MuiTab-root": {
              color: "black",
              textTransform: "none",
              fontSize: "1rem",
              minWidth: "auto",
              fontSize: { xs: "0.85rem", md: "1rem" },
              padding: { xs: "6px 10px", md: "12px 16px" },
              flexDirection: { xs: "row", md: "column" },
            },
            "& .Mui-selected": {
              fontWeight: "bold!important",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#280f91",
            },
          }}
        >
          <Tab label="Viitoare" />
          <Tab label="Istoric" />
          <Tab label="Anulate" />
        </Tabs>
      </Box>
    </Box>
  );
}

export default MyReservations;
