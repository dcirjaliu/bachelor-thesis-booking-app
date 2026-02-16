import styles from "./Index.module.scss";
import AccentShape from "../../components/AccentShape/AccentShape";
import HeroImage from "../../components/HeroImage/HeroImage";
import Header from "../../components/Header/Header";
import "../../global_styles/_typography.scss";
import Typewriter from "typewriter-effect";
import Button from "../../components/Button/Button";
import CardList from "../../components/CardList/CardList";
import img from "../../assets/images/people.svg";
import MainPageFooter from "../../components/MainPageFooter/MainPageFooter";

function Index() {
  return (
    <div className={styles.snapContainer}>
      <section className={`${styles.page} ${styles.page1}`} id="page1">
        <Header />
        <div className={styles.contentContainer}>
          <div className={styles.gridItem}>
            <div className={styles.wrapper}>
              <h1 className="mainPageH1">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Rezervă-ți timpul, nu doar locul.")
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString("Simplu.")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Rapid.")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Rezervă-ți timpul, nu doar locul.") // Îl scrie iar la final
                      .start(); // Pornește secvența
                  }}
                  options={{
                    autoStart: true,
                    delay: 75,
                    cursor: "|", // Opțional: poți lăsa cursorul sau îl poți ascunde la final cu CSS
                  }}
                />
              </h1>
            </div>
            <div className={styles.wrapper}>
              <h2 className="mainPageH2">
                Gestionează-ți rapid accesul la sălile de studiu, terenurile
                sportive și spălătoriile din cămine.
              </h2>
              <div className={styles.btnsContainer}>
                <Button variant="primary">Află mai multe</Button>
                <Button variant="secondary">Întrebări frecvente</Button>
              </div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <HeroImage />
          </div>
        </div>
      </section>
      <section className={`${styles.page} ${styles.page2}`} id="page2">
        <div className={styles.header}>
          <h2 className="mainPage2">Programează-te acum!</h2>
        </div>
        <CardList />
      </section>
      <section className={styles.page3} id="page3">
        <div className={styles.div1}>
          <img className={styles.img} src={img} />
        </div>
        <div className={styles.div2}>
          <MainPageFooter />
        </div>
      </section>
    </div>
  );
}

export default Index;
