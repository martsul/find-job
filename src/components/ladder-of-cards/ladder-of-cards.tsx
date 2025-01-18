import { FC } from "react";
import { MainTitle } from "../main-title/main-title";
import { CardFromLadder } from "../card-from-ladder/card-from-ladder";
import { LadderInCardsProps } from "../../types/ladder-of-cards";
import styles from "./ladder-of-cards.module.css";

export const LadderOfCards: FC<LadderInCardsProps> = ({ data }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.head}>
          <MainTitle
            cost="h2"
            align="center"
            previousText="With Developli, hiring is "
            strongText="easy-peasy"
            lastText=", lemon squeezy"
          ></MainTitle>
          <p className={styles.subtitle}>
            Our hiring process is so simple and easy to do, just follow the
            steps and you’re done!
          </p>
        </div>
        <div className={styles.ladder}>
          {data.map((element, num) => (
            <CardFromLadder
              title={element.title}
              text={element.text}
              num={num + 1}
              key={num}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
