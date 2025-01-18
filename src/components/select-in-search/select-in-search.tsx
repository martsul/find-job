import { Location } from "../../svg/location";
import { useChangeCity, useChangeVisible } from "./use-select-in-search";
import styles from "./select-in-search.module.css";
import { ArrowDown } from "../../svg/arrow-down";
import classNames from "classnames";

export const SelectInSearch = () => {
  const { city, changeCity } = useChangeCity();
  const { isVisible, changeVisible } = useChangeVisible();


  return (
    <div className={styles.container} onClick={changeVisible}>
      <div className={styles.svgContainer}>
        <Location />
      </div>
      <input type="text" value={city} readOnly className={styles.input} />
      <div className={classNames(styles.modal, { [styles.active]: isVisible })}>
        <span id="United States" className={styles.option} onClick={changeCity}>
          United States
        </span>
        <span id="Saudi Arabia" className={styles.option} onClick={changeCity}>
          Saudi Arabia
        </span>
        <span id="Germany" className={styles.option} onClick={changeCity}>
          Germany
        </span>
        <span id="Australia" className={styles.option} onClick={changeCity}>
          Australia
        </span>
      </div>
      <span className={styles.svgMax}>
        <ArrowDown />
      </span>
    </div>
  );
};
