import { FC } from "react";
import { ActiveFilters } from "../active-filters/active-filters";
import { useFilters } from "../context/filters-context/use-filters";
import styles from "./recommendation.module.css";
import { Employment } from "../../redux/entities/employments/employments-slice";
import { JobCardContainer } from "../job-card/job-card-container";

export const Recommendation: FC<{ ids: Employment["_id"][] }> = ({ ids }) => {
  const filtersData = useFilters();

  if (!filtersData) {
    throw new Error("Filters Data Error");
  }

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.head}>
          <h3 className={styles.title}>Recommendation</h3>
          <p className={styles.subTitle}>
            {ids.length} product designer Jobs
          </p>
        </div>
        <ActiveFilters />
        <div className={styles.cards}>
          {ids.map((id) => (
            <JobCardContainer key={id} id={id} />
          ))}
        </div>
      </div>
    </section>
  );
};
