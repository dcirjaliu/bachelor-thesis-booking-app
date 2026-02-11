import styles from "./Index.module.scss";

function Index() {
  return (
    <div className={styles.snapContainer}>
      <section className={styles.page} id="page1">
        Page 1
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
