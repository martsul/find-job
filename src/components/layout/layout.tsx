import { Outlet } from "react-router-dom";
import { Footer } from "../footer-component/footer/footer";
import { Header } from "../header-component/header/header";
import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.background}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
