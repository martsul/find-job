import { FC, ReactNode } from "react";
import { ActiveFilters } from "../active-filters/active-filters";
import { useFilters } from "../context/filters-context/use-filters";
import styles from "./recommendation.module.css";

export const Recommendation: FC<{ children: ReactNode }> = ({ children }) => {
  const filtersData = useFilters();

  if (!filtersData) {
    throw new Error("Filters Data Error");
  }

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.head}>
          <h3 className={styles.title}>Recommendation</h3>
        </div>
        <ActiveFilters />
        {children}
      </div>
    </section>
  );
};
