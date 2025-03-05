import { CandidatesCardContainer } from "../candidates-card/candidates-card-container";
import styles from "./candidates-cards.module.css";

export const CandidatesCards = () => {
  return (
    <div className={styles.container}>
      {[...new Array(8)].map((_, ind) => (
        <CandidatesCardContainer key={ind} />
      ))}
    </div>
  );
};
