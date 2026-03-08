import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "../Button/Button";
import Typography from "@mui/material/Typography";
import img from "../../assets/images/BUPT.jpg";
import Chip from "@mui/material/Chip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./ReservationCard.module.scss";

const MOCK_DATA = Array.from({ length: 4 }, (_, index) => ({
  id: index,
  title: "Sala de studiu",
  dateTime: "Data: 00/00/0000, Ora: 00:00",
  location: "Biblioteca UPT, Sala 00, Etaj 0",
}));

function ReservationCard() {
  return (
    <>
      {MOCK_DATA.map((item) => (
        <Grid item xs={12} md={6} key={item.id}>
          <Card key={item.id} className={styles.card}>
            <CardMedia
              component="img"
              alt="green iguana"
              image={img}
              sx={{
                width: 150,
                height: 150,
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
            <CardContent className={styles.cardContent}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {item.dateTime}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {item.location}
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
        </Grid>
      ))}
    </>
  );
}

export default ReservationCard;
