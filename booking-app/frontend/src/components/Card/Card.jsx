import styles from "./Card.module.scss";
import { color, motion } from "framer-motion";
import { Link } from "react-router-dom";

function Card({
  img,
  title,
  description,
  index,
  link,
  isLoggedIn = false,
  children,
  styleAlignment = "flex-start",
  styleGap = "20px",
}) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ alignItems: styleAlignment, gap: styleGap }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.1,
      }}
    >
      <div className={styles.imageWrapper}>
        <img src={img} alt={title} />
      </div>
      <p className={styles.heading}>{title}</p>
      <div style={{ overflow: "visible" }}>{children}</div>
      <p className={styles.description}>{description}</p>
      <Link
        to={link}
        className={!isLoggedIn ? styles.learnMoreBtn : undefined}
        style={{
          color: isLoggedIn ? "aqua" : undefined,
          alignSelf: "flex-start",
        }}
      >
        Află mai multe{" "}
      </Link>
    </motion.div>
  );
}

export default Card;
