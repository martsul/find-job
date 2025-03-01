import { Link } from "react-router-dom";
import { Logo } from "../../../svg/logo";
import { useAuthorization } from "../../context/authorization-context/use-authorization";
import { HeaderAuthorization } from "../header-autorization/header-authorization";
import { HeaderButtons } from "../header-buttons/header-buttons";
import { HeaderNav } from "../header-nav/header-nav";
import styles from "./header.module.css";

export const Header = () => {
  const { sign } = useAuthorization();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>{<Logo />}</Link>
        <HeaderNav />
        {sign && <HeaderAuthorization />}
        <HeaderButtons />
      </div>
    </header>
  );
};
