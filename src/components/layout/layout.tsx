import { ReactNode } from "react";
import { Footer } from "../footer-component/footer/footer";
import { Header } from "../header-component/header/header";
import styles from "./layout.module.css";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.background}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
