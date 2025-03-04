import { Button } from "../../button/button";
import styles from "./header-buttons.module.css";

export const HeaderButtons = () => {
  return (
    <div className={styles.buttons}>
      <Button
        info={{
          size: "small",
          style: "bordered",
          type: "button",
          kind: "base",
          parameters: { role: "link", link: "/authorization/signin" },
        }}
      >
        Sign In
      </Button>
      <Button
        info={{
          size: "small",
          style: "primary",
          type: "button",
          kind: "base",
          parameters: { role: "link", link: "/authorization/signup" },
        }}
      >
        Sign Up
      </Button>
    </div>
  );
};
