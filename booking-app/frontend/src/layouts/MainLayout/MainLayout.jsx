import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useState } from "react";
import styles from "./MainLayout.module.scss";

function MainLayout() {
  const [headerConfig, setHeaderConfig] = useState({
    content: null,
    className: "",
  });
  return (
    <div className={styles.snapContainer}>
      <Header className={headerConfig.className}>{headerConfig.content}</Header>
      <Outlet context={{ setHeaderConfig }} />
    </div>
  );
}

export default MainLayout;
