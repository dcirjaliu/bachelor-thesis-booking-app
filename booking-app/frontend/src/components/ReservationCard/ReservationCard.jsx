import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "../Button/Button";
import Typography from "@mui/material/Typography";
import img from "../../assets/images/BUPT.jpg";
import Chip from "@mui/material/Chip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";

function ReservationCard() {
  return (
    <Card
      sx={{
        width: "500px",
        height: "250px",
        borderRadius: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        image={img}
        sx={{
          width: 200,
          height: 200,
          borderRadius: "12px",
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ gap: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
          Sala de studiu
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Data: 00/00/0000, Ora: 00:00
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Biblioteca UPT, Sala 00, Etaj 0
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Chip
            icon={<CheckCircleIcon style={{ color: "#4caf50" }} />}
            label="Confirmat"
            variant="outlined"
            sx={{
              border: "none",
              backgroundColor: "transparent",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          />
          <Button variant="tertiary">Anuleaza Rezervarea</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ReservationCard;
