import styles from "./CardList.module.scss";
import { services } from "../../assets/data/indexData.js";
import Card from "../Card/Card";

function CardList() {
  return (
    <div className={styles.parent}>
      {services.map((item, index) => (
        <Card
          key={index}
          img={item.image}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default CardList;
