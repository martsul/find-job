import { Link } from "react-router-dom";
import { Logo } from "../../../svg/logo";
import { HeaderButtons } from "../header-buttons/header-buttons";
import { HeaderNav } from "../header-nav/header-nav";
import styles from "./header.module.css";
import { AuthorizationState } from "../../../types/auth-state";
import { HeaderAuthorizationContainer } from "../header-autorization/header-authorization-container";

export const Header = ({
  authStatus,
}: {
  authStatus: AuthorizationState["status"];
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          {<Logo />}
        </Link>
        <HeaderNav />
        {authStatus === "authorized" && <HeaderAuthorizationContainer />}
        <HeaderButtons authStatus={authStatus} />
      </div>
    </header>
  );
};
