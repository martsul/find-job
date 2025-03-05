import { Employment } from "../../redux/entities/employments/employments-slice";
import { JobCardContainer } from "../job-card/job-card-container";
import styles from "./job-cards.module.css";

export const JobCards = ({ ids }: { ids: Employment["_id"][] }) => {
  return (
    <div className={styles.cards}>
      {ids.map((id) => (
        <JobCardContainer key={id} id={id} />
      ))}
    </div>
  );
};
