import styles from "./Card.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Card({ img, title, description, index, link }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
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
      <p className={styles.description}>{description}</p>
      <Link to={link} className={styles.learnMoreBtn}>
        Află mai multe{" "}
      </Link>
    </motion.div>
  );
}

export default Card;
