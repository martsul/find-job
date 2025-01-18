import { FC } from "react";
import { LadderCard } from "../../types/ladder-of-cards";
import styles from "./card-from-ladder.module.css";

type CurrentCard = LadderCard & { num: number };

export const CardFromLadder: FC<CurrentCard> = ({ title, text, num }) => {
  return (
    <div className={styles.card}>
      <span className={styles.num}>{num}</span>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
