import { User } from "../../../svg/user";
import styles from "./header-authorization.module.css";

export const HeaderAuthorization = ({ name }: { name: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.svgContainer}>
        <User />
      </div>
      <span className={styles.name}>{name}</span>
    </div>
  );
};
