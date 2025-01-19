import { Cross } from "../../svg/cross";
import styles from "./active-filters.module.css";

const TEMP_DATA = ["0-2 years", "Fulltime", "Remote"];

export const ActiveFilters = () => {
  return (
    <div className={styles.container}>
      {TEMP_DATA.map((element, index) => (
        <div className={styles.filter} key={index}>
          <button type="button" className={styles.cross}>
            <Cross />
          </button>
          <span className={styles.text}>{element}</span>
        </div>
      ))}
    </div>
  );
};
