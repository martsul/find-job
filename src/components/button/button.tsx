import { FC } from "react";
import { ButtonsData } from "../../types/buttons-data";
import classNames from "classnames";
import styles from "./button.module.css";

export const Button: FC<ButtonsData> = ({ children, info }) => {
  const { size, style, type, click } = info;

  return (
    <button
      type="button"
      onClick={click}
      className={classNames(
        styles.button,
        styles[size],
        styles[style],
        styles[type]
      )}
    >
      {children}
    </button>
  );
};
