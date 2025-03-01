import { useCallback } from "react";
import { Tick } from "../../svg/tick";
import styles from "./details-item.module.css";
import classNames from "classnames";
import { useFilters } from "../context/filters-context/use-filters";
import { useAppSelector } from "../../redux/hooks";
import { selectCollectionOfRelevantCards } from "../../redux/entities/employments/employments-slice";

export const DetailsItem = ({ text }: { text: string }) => {
  const filtersData = useFilters();
  const collection = useAppSelector(selectCollectionOfRelevantCards);

  if (!filtersData) {
    throw new Error("Filters Context Error");
  }

  const { activeFilters, addFilter, deleteFilter } = filtersData;

  const changeActive = useCallback(() => {
    if (activeFilters.has(text)) {
      deleteFilter(text);
    } else {
      addFilter(text);
    }
  }, [addFilter, deleteFilter, activeFilters, text]);

  return (
    <div
      className={classNames(styles.label, {
        [styles.active]: activeFilters.has(text),
      })}
    >
      <button onClick={changeActive} type="button" className={styles.container}>
        <span className={styles.tick}>
          <Tick></Tick>
        </span>
        <span className={styles.text}>{text}</span>
      </button>
      <span className={styles.count}>{collection[text] || 0}</span>
    </div>
  );
};
