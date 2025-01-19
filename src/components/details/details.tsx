import { FC, useCallback, useState } from "react";
import { DetailsProps } from "../../types/details";
import { DetailsItem } from "../details-item/details-item";
import { ArrowDown } from "../../svg/arrow-down";
import styles from "./details.module.css";
import classNames from "classnames";

export const Details: FC<DetailsProps> = ({ data }) => {
  const [activeCards, setActiveCards] = useState(
    new Array(data.length).fill(true)
  );

  const changeActive = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      const index = +event.currentTarget.id;
      const sense = !activeCards[index];

      setActiveCards((value) => {
        value[index] = sense;
        return [...value];
      });
    },
    [activeCards]
  );

  return (
    <aside className={styles.aside}>
      {data.map((element, index) => {
        const { title, info } = element;

        return (
          <div
            key={index}
            className={classNames(styles.card, {
              [styles.active]: activeCards[index],
            })}
          >
            <div className={styles.head}>
              <h3 className={styles.title}>{title}</h3>
              <button
                type="button"
                id={`${index}`}
                onClick={changeActive}
                className={styles.arrowDown}
              >
                <ArrowDown />
              </button>
            </div>
            <div className={styles.items}>
              {info.map((item, index) => (
                <DetailsItem data={item} key={index} />
              ))}
            </div>
          </div>
        );
      })}
    </aside>
  );
};
