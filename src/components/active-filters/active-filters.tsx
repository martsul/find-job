import { Cross } from "../../svg/cross";
import { FiltersContextValue } from "../../types/filters-context-data";
import { useFilters } from "../context/filters-context/use-filters";
import styles from "./active-filters.module.css";

export const ActiveFilters = () => {
  const filtersData = useFilters();

  if (!filtersData) {
    throw new Error("Error Filters Context");
  }

  const { activeFilters, deleteFilter } = filtersData;
  const filtersKeys = Object.keys(activeFilters);

  return (
    <div className={styles.container}>
      {filtersKeys.map((element, index) => (
        <FiltersButton key={index} name={element} deleteFilter={deleteFilter} />
      ))}
    </div>
  );
};

const FiltersButton = ({
  name,
  deleteFilter,
}: {
  name: string;
  deleteFilter: FiltersContextValue["deleteFilter"];
}) => (
  <div className={styles.filter}>
    <button
      onClick={() => {
        deleteFilter(name);
      }}
      type="button"
      className={styles.cross}
    >
      <Cross />
    </button>
    <span className={styles.text}>{name}</span>
  </div>
);
