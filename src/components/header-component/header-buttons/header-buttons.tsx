import { AuthorizationState } from "../../../types/auth-state";
import { Button } from "../../button/button";
import styles from "./header-buttons.module.css";
import { useHeaderButtons } from "./use-header-buttons";

export const HeaderButtons = ({
  authStatus,
}: {
  authStatus: AuthorizationState["status"];
}) => {
  const { buttonsLinks, buttonsText, handlerLogOut } =
    useHeaderButtons(authStatus);

  return (
    <div className={styles.buttons}>
      <Button
        info={{
          size: "small",
          style: "bordered",
          kind: "base",
          parameters: { role: "link", link: buttonsLinks.first },
        }}
      >
        {buttonsText.first}
      </Button>
      <Button
        info={{
          size: "small",
          style: "primary",
          kind: "base",
          parameters: { role: "link", link: buttonsLinks.second },
        }}
      >
        {buttonsText.second}
      </Button>
      {authStatus === "authorized" && (
        <Button
          info={{
            size: "small",
            style: "primary",
            kind: "base",
            type: "button",
            click: handlerLogOut,
          }}
        >
          Log Out
        </Button>
      )}
    </div>
  );
};
