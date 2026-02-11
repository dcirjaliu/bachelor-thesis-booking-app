import styles from "./Index.module.scss";
import AccentShape from "../../components/AccentShape/AccentShape";
import HeroImage from "../../components/HeroImage/HeroImage";

function Index() {
  return (
    <div className={styles.snapContainer}>
      <section className={styles.page} id="page1">
        <div className={styles.page1}>
          <AccentShape />
          <HeroImage />
        </div>
      </section>
      <section className={styles.page} id="page2">
        Page 2
      </section>
      <section className={styles.page} id="page3">
        Page 3
      </section>
    </div>
  );
}

export default Index;
