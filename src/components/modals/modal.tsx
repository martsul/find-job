import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Cross } from "../../svg/cross";
import styles from "./modal.module.css";
import classNames from "classnames";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={classNames(styles.modal)}>
      <div className={styles.window}>
        <button type="button" onClick={onClose} className={styles.button}>
          <span className={styles.svg}>
            <Cross color={"#252A3F"} />
          </span>
        </button>
        {children}
      </div>
      <div className={styles.background} onClick={onClose}></div>
    </div>,
    document.body
  );
};
