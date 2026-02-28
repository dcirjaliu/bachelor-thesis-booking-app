import styles from "./Home.module.scss";
import Button from "../../../components/Button/Button.jsx";
import CardList from "../../../components/CardList/CardList.jsx";

function Home() {
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
