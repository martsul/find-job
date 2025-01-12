import { useAuthorization } from "../../authorization-context/use-authorization";
import { Button } from "../../button/button";
import styles from "./header-buttons.module.css";

export const HeaderButtons = () => {
  const { signCallback, sign } = useAuthorization();

  return (
    <div className={styles.buttons}>
      <Button
        info={{
          size: "small",
          style: "bordered",
          type: "base",
          click: signCallback,
        }}
      >
        {sign? "Start hiring" : "Sign In"}
      </Button>
      <Button
        info={{
          size: "small",
          style: "primary",
          type: "base",
          click: signCallback,
        }}
      >
        {sign? "Start hiring" : "Sign Up"}
      </Button>
    </div>
  );
};
