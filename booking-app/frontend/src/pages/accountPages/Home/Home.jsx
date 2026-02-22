import { useMemo, useState } from "react";
import { useHeader } from "../../../hooks/useHeader.js";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./Home.module.scss";
import Button from "../../../components/Button/Button.jsx";
import CardList from "../../../components/CardList/CardList.jsx";

function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const headerButtons = useMemo(
    () => (
      <>
        <Box sx={{ width: "100%", bgcolor: "transparent" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& .MuiTabs-flexContainer": {
                gap: 6,
                marginLeft: 12,
              },
              "& .MuiTab-root": {
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
              },
              "& .Mui-selected": {
                color: "#00ffff !important",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#00ffff",
              },
            }}
          >
            <Tab label="Acasă" />
            <Tab label="Profilul meu" />
            <Tab label="Rezervările mele" />
          </Tabs>
        </Box>

        <Button variant="primary">Ieși din cont în cont</Button>
      </>
    ),
    [value],
  );

  useHeader(headerButtons, styles.btnContainerHeader);
  return (
    <div>
      <CardList />
    </div>
  );
}

export default Home;
