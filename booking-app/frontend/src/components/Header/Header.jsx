import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";

function Header({ children, className, isHidden = false }) {
  return (
    <header className={`${styles.mainheader} ${isHidden ? styles.hidden : ""}`}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>
      <div className={className}>{children}</div>
    </header>
  );
}

export default Header;
