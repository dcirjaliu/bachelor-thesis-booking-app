import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";
import Button from "../Button/Button";

function Header() {
  return (
    <header className={styles.mainheader}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>
      <div className={styles.btnsContainer}>
        <Button variant="primary">Intră în cont</Button>
        <Button variant="secondary">Creează-ți cont</Button>
      </div>
    </header>
  );
}

export default Header;
