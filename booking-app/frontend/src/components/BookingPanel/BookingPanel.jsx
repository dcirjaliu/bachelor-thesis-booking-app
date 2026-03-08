import Card from "@mui/material/Card";
import Button from "../Button/Button";
import Typography from "@mui/material/Typography";
import styles from "./BookingPanel.module.scss";
import img from "../../assets/images/svg-pic.svg";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function BookingPanel() {
  return (
    <Card className={styles.bookingCard}>
      <Box
        component="img"
        src={img}
        alt="Colaborare"
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "15px",
          mb: 5,
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
          mb: 3,
        }}
      >
        <Typography sx={{ fontWeight: 500, fontSize: "1.1rem" }}>
          Data
        </Typography>
        <Box
          sx={{
            backgroundColor: "#280f91",
            color: "white",
            borderRadius: "25px",
            width: "240px",
            height: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          30/00/2026
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
          mb: 5,
        }}
      >
        <Typography sx={{ fontWeight: 500, fontSize: "1.1rem" }}>
          Interval orar
        </Typography>
        <Select
          displayEmpty
          defaultValue=""
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            textAlign: "center",
            padding: "30px",
            backgroundColor: "#280f91",
            color: "white",
            borderRadius: "25px",
            width: "240px",
            height: "45px",
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "& .MuiSvgIcon-root": { color: "white" },
          }}
        >
          <MenuItem value="" disabled></MenuItem>
          <MenuItem value={1} sx={{ justifyContent: "center" }}>
            09:00 - 10:00
          </MenuItem>
        </Select>
      </Box>

      <Button variant="tertiary">Rezervă</Button>
    </Card>
  );
}

export default BookingPanel;
