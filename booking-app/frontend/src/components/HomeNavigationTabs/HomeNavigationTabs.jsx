import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

function HomeNavigationTabs({
  label1,
  label2,
  label3,
  indicatorColor,
  textColor = "black",
  selectedColor = "#00ffff !important",
}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
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
            color: textColor,
            textTransform: "none",
            fontSize: "1rem",
            minWidth: "auto",
            fontSize: { xs: "0.85rem", md: "1rem" },
            padding: { xs: "6px 10px", md: "12px 16px" },
            flexDirection: { xs: "row", md: "column" },
          },
          "& .Mui-selected": {
            color: `${selectedColor} !important`,
          },
          "& .MuiTabs-indicator": {
            backgroundColor: indicatorColor,
          },
        }}
      >
        <Tab label={label1} />
        <Tab label={label2} />
        <Tab label={label3} />
      </Tabs>
    </Box>
  );
}

export default HomeNavigationTabs;
