import { useFilterWorkCards } from "../../hooks/filter-work-cards/use-filter-work-cards";
import { ActiveFilters } from "../active-filters/active-filters";
import { useFilters } from "../context/filters-context/use-filters";
import { JobCard } from "../job-card/job-card";
import styles from "./recomendation.module.css";

export const Recomendation = () => {
  const filtersData = useFilters();

  if (!filtersData) {
    throw new Error("Filters Data Error");
  }

  const { activeFilters } = filtersData;

  const filteredData = useFilterWorkCards(activeFilters);

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
          {filteredData.map((data, index) => (
            <JobCard key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};
