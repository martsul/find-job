import { useCallback } from "react";
import { Tick } from "../../svg/tick";
import styles from "./details-item.module.css";
import classNames from "classnames";
import { useFilters } from "../context/filters-context/use-filters";
import { FiltersTypes } from "../../types/filters-context-data";
import { useFilterWorkCards } from "../../hooks/filter-work-cards/use-filter-work-cards";

export const DetailsItem = ({
  text,
  type,
}: {
  text: string;
  type: FiltersTypes;
}) => {
  const filtersData = useFilters();

  if (!filtersData) {
    throw new Error("Filters Context Error");
  }

  const { activeFilters, addFilter, deleteFilter } = filtersData;

  const changeActive = useCallback(() => {
    if (text in activeFilters) {
      deleteFilter(text);
    } else {
      addFilter(text, type);
    }
  }, [addFilter, deleteFilter, activeFilters, type, text]);

  const count = useFilterWorkCards({ [text]: { name: text, type } }).length;

  return (
    <div
      className={classNames(styles.label, {
        [styles.active]: text in activeFilters,
      })}
    >
      <button onClick={changeActive} type="button" className={styles.container}>
        <span className={styles.tick}>
          <Tick></Tick>
        </span>
        <span className={styles.text}>{text}</span>
      </button>
      <span className={styles.count}>{count}</span>
    </div>
  );
};
