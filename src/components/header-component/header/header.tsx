import { Logo } from "../../../svg/logo";
import { useAuthorization } from "../../authorization-context/use-authorization";
import { HeaderAuthorization } from "../header-autorization/header-authorization";
import { HeaderButtons } from "../header-buttons/header-buttons";
import { HeaderNav } from "../header-nav/header-nav";
import styles from "./header.module.css";

export const Header = () => {
  const { sign } = useAuthorization();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>{<Logo />}</a>
        <HeaderNav />
        {sign && <HeaderAuthorization />}
        <HeaderButtons />
      </div>
    </header>
  );
};
