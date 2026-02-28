import { Outlet } from "react-router-dom";
import HomeNavigationTabs from "../../components/HomeNavigationTabs/HomeNavigationTabs";
import { useMemo } from "react";
import { useHeader } from "../../hooks/useHeader";
import Button from "../../components/Button/Button";
import styles from "./AuthenticatedLayout.module.scss";

function AuthenticatedLayout() {
  const headerButtons = useMemo(
    () => (
      <>
        <HomeNavigationTabs
          label1="Acasă"
          label2="Profilul meu"
          label3="Rezervările mele"
          textColor="white"
          indicatorColor="#00ffff"
        />
        <Button variant="primary">Ieși din cont</Button>
      </>
    ),
    [],
  );

  useHeader(headerButtons, styles.btnContainerHeader);
  return (
    <>
      <Outlet />
    </>
  );
}

export default AuthenticatedLayout;
