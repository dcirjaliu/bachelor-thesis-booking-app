import styles from "./Card.module.scss";

function Card({ img, title, description }) {
  return (
    <div class={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={img} alt={title} />
      </div>
      <p class={styles.heading}>{title}</p>
      <p class={styles.description}>{description}</p>
      <button class={styles.learnMoreBtn}>Află mai multe </button>
    </div>
  );
}

export default Card;
