import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";

function Header({ children, className }) {
  return (
    <header className={styles.mainheader}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>
      <div className={className}>{children}</div>
    </header>
  );
}

export default Header;
