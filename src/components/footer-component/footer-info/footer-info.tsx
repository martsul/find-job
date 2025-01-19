import { Facebook } from "../../../svg/facebook";
import { Inst } from "../../../svg/inst";
import { Twitter } from "../../../svg/twitter";
import styles from "./footer-info.module.css";

export const FooterInfo = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Copyright © 2022</span>
      <div className={styles.other}>
        <div className={styles.links}>
          <a href="#" className={styles.link}>
            Terms of Service
          </a>
          <a href="#" className={styles.link}>
            Privacy policy
          </a>
          <a href="#" className={styles.link}>
            Offer terms
          </a>
        </div>
        <div className={styles.networks}>
          <a className={styles.network} href="#">
            <Inst />
          </a>
          <a className={styles.network} href="#">
            <Twitter />
          </a>
          <a className={styles.network} href="#">
            <Facebook />
          </a>
        </div>
      </div>
    </div>
  );
};
