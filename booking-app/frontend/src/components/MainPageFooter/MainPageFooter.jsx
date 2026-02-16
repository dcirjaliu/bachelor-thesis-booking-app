import styles from "./MainPageFooter.module.scss";
import Button from "../Button/Button";

function MainPageFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        {" "}
        {}
        <aside className={styles.textContainer}>
          <h1 className={styles.h1}>Ești gata să îți rezervi locul?</h1>
          <h3>
            Intră în contul tău pentru a face o rezervare sau contactează-ne
            dacă întâmpini dificultăți.
          </h3>
        </aside>
        <aside className={styles.btnsContainer}>
          <Button variant="primary">Contact</Button>
          <Button variant="secondary">Intră in cont</Button>
        </aside>
      </div>

      <h4 className={styles.copyright}>Copyright © UPT {year}</h4>
    </footer>
  );
}

export default MainPageFooter;
