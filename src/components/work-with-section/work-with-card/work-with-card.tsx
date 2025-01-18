import { FC } from "react";
import { WorkWithCardType } from "../../../types/work-with";
import styles from "./work-with-card.module.css";

export const WorkWithCard: FC<WorkWithCardType> = ({
  head,
  text,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        {head}
        <p className={styles.text}>{text}</p>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
