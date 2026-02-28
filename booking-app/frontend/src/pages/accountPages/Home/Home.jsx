import { useMemo } from "react";
import { useHeader } from "../../../hooks/useHeader.js";
import styles from "./Home.module.scss";
import Button from "../../../components/Button/Button.jsx";
import CardList from "../../../components/CardList/CardList.jsx";
import HomeNavigationTabs from "../../../components/HomeNavigationTabs/HomeNavigationTabs.jsx";

function Home() {
  const headerButtons = useMemo(() => (
    <>
      <HomeNavigationTabs />
      <Button variant="primary">Ieși din cont</Button>
    </>
  ));

  useHeader(headerButtons, styles.btnContainerHeader);
  return (
    <div className={styles.container}>
      <h1>Salut [nume]!</h1>
      <CardList
        isLoggedIn={true}
        children={<Button variant="primary">Rezervă</Button>}
        styleAlignment="center"
        styleGap="6px"
      />
    </div>
  );
}

export default Home;
