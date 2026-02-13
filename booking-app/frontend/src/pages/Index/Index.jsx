import styles from "./Index.module.scss";
import AccentShape from "../../components/AccentShape/AccentShape";
import HeroImage from "../../components/HeroImage/HeroImage";
import Header from "../../components/Header/Header";
import "../../global_styles/_typography.scss";

function Index() {
  return (
    <div className={styles.snapContainer}>
      <section className={`${styles.page} ${styles.page1}`} id="page1">
        <Header />
        <div className={styles.contentContainer}>
          <div className={styles.gridItem}>
            <div className="typewriter">
              <h1>Rezervă-ți timpul, nu doar locul.</h1>
            </div>
          </div>
          <div className={styles.gridItem}>
            <HeroImage />
          </div>
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
