import { ActiveFilters } from "../active-filters/active-filters";
import { JobCard } from "../job-card/job-card";
import styles from "./recomendation.module.css";

export const Recomendation = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.head}>
          <h3 className={styles.title}>Recomendation</h3>
          <p className={styles.subTitle}>
            38 product designer Jobs in United States
          </p>
        </div>
        <ActiveFilters />
        <div className={styles.cards}>
          {[...new Array(2)].map(() => (
            <JobCard />
          ))}
        </div>
      </div>
    </section>
  );
};
