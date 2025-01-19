import { useCallback, useState } from "react";
import { Tick } from "../../svg/tick";
import { FilterCardInfo } from "../../types/details";
import styles from "./details-item.module.css";
import classNames from "classnames";

export const DetailsItem = ({ data }: { data: FilterCardInfo }) => {
  const { name, text } = data;
  const [isActive, setActive] = useState(false);

  const changeActive = useCallback(() => {
    setActive((value) => !value);
  }, []);

  return (
    <div
      onClick={changeActive}
      className={classNames(styles.label, { [styles.active]: isActive })}
      id={name}
    >
      <div className={styles.container}>
        <div className={styles.tick}>
          <Tick></Tick>
        </div>
        <span className={styles.text}>{text}</span>
      </div>
      <span className={styles.count}>123</span>
    </div>
  );
};
