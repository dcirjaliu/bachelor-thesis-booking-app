import styles from "./HeroImage.module.scss";
import image from "../../assets/images/HeroImage.jpg";

function HeroImage() {
  return (
    <div className={styles.shape}>
      <img src={image} />
    </div>
  );
}

export default HeroImage;
