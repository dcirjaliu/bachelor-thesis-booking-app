import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Button from "../Button/Button";
import Typography from "@mui/material/Typography";
import styles from "./ProfileCard.module.scss";

function ProfileCard() {
  return (
    <Card className={styles.profileCard}>
      <Avatar
        sx={{
          width: 100,
          height: 100,
          border: "4px solid white",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
        src="/broken-image.jpg"
      />
      <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
        Nume Prenume
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Număr matricol: XX123456
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Facultate: Autommatică și Calculatoare
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Anul X
      </Typography>
      <Button variant="tertiary">Editează profilul</Button>
      <Typography
        sx={{
          fontSize: "10px",
          color: "text.secondary",
          opacity: 0.7,
          alignSelf: "flex-start",
          ml: 2,
          mb: 0,
        }}
      >
        XX.XXO.00.0.XX123456
      </Typography>
    </Card>
  );
}

export default ProfileCard;
