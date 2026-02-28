import styles from "./AccentShape.module.scss";

function AccentShape({ children }) {
  return <div className={styles.shape}>{children}</div>;
}

export default AccentShape;
