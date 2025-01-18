import { FC } from "react";
import styles from "./main-title.module.css";
import classNames from "classnames";

type MainTitleProps = {
  cost: "h1" | "h2";
  align: "left" | "center" | "right";
  previousText?: string;
  lastText?: string;
  strongText?: string;
};

export const MainTitle: FC<MainTitleProps> = ({
  previousText,
  lastText,
  strongText,
  cost,
  align,
}) => {
  switch (cost) {
    case "h1":
      return (
        <h1 className={classNames(styles.title, styles[align])}>
          {previousText}
          {strongText && (
            <strong className={styles.strong}>{strongText}</strong>
          )}
          {lastText}
        </h1>
      );
    case "h2":
      return (
        <h2 className={classNames(styles.title, styles[align])}>
          {previousText}
          {strongText && (
            <strong className={styles.strong}>{strongText}</strong>
          )}
          {lastText}
        </h2>
      );
  }
};
