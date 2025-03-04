import { Email } from "../../svg/email";
import { Lock } from "../../svg/lock";
import { Person } from "../../svg/person";
import { Button } from "../button/button";
import { Input } from "../input/input";
import styles from "./authorization-form.module.css";
import { useAuthForm } from "./use-authorization-form";

export const AuthorizationForm = ({
  thereIsAccount,
}: {
  thereIsAccount: boolean;
}) => {
  const {
    handleInput,
    handlerSubmitLogIn,
    handlerSubmitRegistration,
    inputValues,
  } = useAuthForm();

  return (
    <form
      onSubmit={thereIsAccount ? handlerSubmitLogIn : handlerSubmitRegistration}
      className={styles.form}
    >
      <h2 className={styles.title}>{thereIsAccount ? "Sign In" : "Sign Up"}</h2>
      <div className={styles.buttons}>
        <div className={styles.buttonContainer}>
          <Button
            info={{
              size: "big",
              kind: "base",
              style: "neutral",
              type: "button",
              parameters: {
                activeStyle: "secondary",
                link: "/authorization/signin",
                role: "link",
              },
            }}
          >
            Sign In
          </Button>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            info={{
              size: "big",
              kind: "base",
              style: "neutral",
              type: "button",
              parameters: {
                activeStyle: "secondary",
                link: "/authorization/signup",
                role: "link",
              },
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
      <div className={styles.inputs}>
        {!thereIsAccount && (
          <Input
            isRequired={true}
            placeholder="Enter your nickname"
            value={inputValues.nickname}
            label="Nickname"
            name="nickname"
            handleInput={handleInput}
          >
            <Person />
          </Input>
        )}
        <Input
          isRequired={true}
          placeholder="Enter your email"
          value={inputValues.email}
          label="Email"
          name="email"
          handleInput={handleInput}
        >
          <Email />
        </Input>
        <Input
          isRequired={true}
          placeholder="Enter your password"
          value={inputValues.password}
          label="Password"
          name="password"
          secure={true}
          handleInput={handleInput}
        >
          <Lock />
        </Input>
      </div>

      <Button
        info={{
          size: "big",
          kind: "base",
          style: "neutral",
          type: "submit",
        }}
      >
        Continue
      </Button>
    </form>
  );
};
