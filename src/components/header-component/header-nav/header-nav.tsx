import { NavLink } from "react-router-dom";
import styles from "./header-nav.module.css";
import classNames from "classnames";

export const HeaderNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/employers"
        className={({ isActive }) =>
          classNames(styles.link, {
            [styles.active]: isActive,
          })
        }
      >
        Employers
      </NavLink>
      <a href="#" className={styles.link}>
        Candidates
      </a>
      <div className={styles.group}>
        <a href="#" className={styles.link}>
          Company
        </a>
        <div className={styles.modal}>
          <a href="#" className={styles.sublink}>
            For Students
          </a>
          <a href="#" className={styles.sublink}>
            Careers
          </a>
          <a href="#" className={styles.sublink}>
            About
          </a>
          <a href="#" className={styles.sublink}>
            Brand Ambassadors
          </a>
          <a href="#" className={styles.sublink}>
            Resources
          </a>
        </div>
      </div>
      <a href="#" className={styles.link}>
        Blog
      </a>
    </nav>
  );
};
