import styles from "./Index.module.scss";
import HeroImage from "../../components/HeroImage/HeroImage";
import Header from "../../components/Header/Header";
import "../../global_styles/_typography.scss";
import Typewriter from "typewriter-effect";
import Button from "../../components/Button/Button";
import CardList from "../../components/CardList/CardList";
import img from "../../assets/images/people.svg";
import MainPageFooter from "../../components/MainPageFooter/MainPageFooter";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

function Index() {
  return (
    <div className={styles.snapContainer}>
      <section className={`${styles.page} ${styles.page1}`} id="page1">
        <Header />
        <Grid container sx={{ flex: 1, p: "5px" }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              p: { xs: "20px", md: "40px" },
              color: "rgb(36, 6, 6)",
            }}
          >
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
          </Grid>
          <Grid
            size={{ md: 6 }}
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              p: "40px",
            }}
          >
            <HeroImage />
          </Grid>
        </Grid>
      </section>
      <section className={`${styles.page} ${styles.page2}`} id="page2">
        <div className={styles.header}>
          <h2 className="mainPage2">Programează-te acum!</h2>
        </div>
        <CardList />
      </section>
      <section className={styles.page} id="page3">
        <Box
          component="section"
          id="page3"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            scrollSnapAlign: "start",
            scrollSnapStop: "always",
          }}
        >
          <Box
            sx={{
              flex: { xs: 7, md: 3.5 },
              overflow: "hidden",
              minHeight: 0,
            }}
          >
            <img className={styles.img} src={img} alt="Section visual" />
          </Box>
          <Box
            sx={{
              flex: { xs: 3, md: 1.5 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <MainPageFooter />
          </Box>
        </Box>
      </section>
    </div>
  );
}

export default Index;
