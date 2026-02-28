import styles from "./Index.module.scss";
import HeroImage from "../../components/HeroImage/HeroImage";
import "../../global_styles/_typography.scss";
import Typewriter from "typewriter-effect";
import Button from "../../components/Button/Button";
import CardList from "../../components/CardList/CardList";
import img from "../../assets/images/people.svg";
import MainPageFooter from "../../components/MainPageFooter/MainPageFooter";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { useMemo } from "react";
import { useHeader } from "../../hooks/useHeader";
import { services } from "../../assets/data/indexData";

function Index() {
  const headerButtons = useMemo(
    () => (
      <>
        <Button variant="primary">Intră în cont</Button>
        <Button variant="secondary">Creează-ți cont</Button>
      </>
    ),
    [],
  );

  useHeader(headerButtons, styles.btnsContainerHeader);
  return (
    <div>
      <section className={`${styles.page} ${styles.page1}`} id="page1">
        <Grid container sx={{ height: "100%", maxHeight: "100vh" }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: { xs: 2, md: 4 },
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
                      .typeString("Rezervă-ți timpul, nu doar locul.")
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    delay: 75,
                    cursor: "|",
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
        <CardList isLoggedIn={false} />
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
