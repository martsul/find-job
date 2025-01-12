import { Logo } from "../../../svg/logo";
import { FooterInfo } from "../footer-info/footer-info";
import { FooterNav } from "../footer-nav/footer-nav";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.info}>
            <Logo />
            <div className={styles.address}>
              <p className={styles.text}>Rouwais Dist, Jeddah Rouwais Saudi Arabia</p>
              <p className={styles.text}>00966 2 6676760</p>
            </div>
          </div>
          <FooterNav />
        </div>
        <FooterInfo />
      </div>
    </footer>
  );
};
