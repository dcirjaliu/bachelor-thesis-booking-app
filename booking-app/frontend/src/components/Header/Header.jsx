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
        <Button>
          <text>Intra in contul de student</text>
        </Button>
        <Button>Contact</Button>
      </div>
    </header>
  );
}

export default Header;
