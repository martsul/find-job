import { FC } from "react";
import { ButtonsData } from "../../types/buttons-data";
import classNames from "classnames";
import styles from "./button.module.css";
import { NavLink } from "react-router-dom";

export const Button: FC<ButtonsData> = ({ children, info }) => {
  const { size, style, kind, click, type, parameters = "button" } = info;

  if (parameters === "button") {
    return (
      <button
        type={type}
        onClick={click}
        className={classNames(
          styles.button,
          styles[size],
          styles[style],
          styles[kind]
        )}
      >
        <div></div>
        {children}
      </button>
    );
  } else {
    const { link, activeStyle = style } = parameters;

    return (
      <NavLink
        type={type}
        to={link}
        className={({ isActive }) =>
          classNames(
            styles.button,
            styles[size],
            styles[kind],
            {
              [styles[activeStyle]]: isActive,
            },
            { [styles[style]]: !isActive }
          )
        }
      >
        {children}
      </NavLink>
    );
  }
};
