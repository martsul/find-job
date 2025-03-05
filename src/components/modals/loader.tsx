import { createPortal } from "react-dom";
import styles from "./loader.module.css";

export const Loader = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.loader}>
      <div className={styles.circle}></div>
    </div>,
    document.body
  );
};
