import { User } from "../../../svg/user";
import { useAuthorization } from "../../authorization-context/use-authorization";
import styles from "./header-authorization.module.css";

export const HeaderAuthorization = () => {
  const { name } = useAuthorization();

  return (
    <div className={styles.container}>
      <User />
      <span className={styles.name}>{name}</span>
    </div>
  );
};
