import { FC } from "react";
import styles from "./footer-nav-block.module.css";

type FooterNavBlockProps = { title: string; links: string[] };

export const FooterNavBlock: FC<FooterNavBlockProps> = ({ title, links }) => {
  return (
    <div className={styles.block}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.links}>
        {links.map((link, ind) => (
          <a className={styles.link} href="#" key={ind}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};
