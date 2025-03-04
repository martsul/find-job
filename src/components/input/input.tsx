import { FC, ReactNode, useState } from "react";
import { Eye } from "../../svg/eye";
import styles from "./input.module.css";
import classNames from "classnames";

type Props = {
  value: string;
  placeholder: string;
  secure?: boolean;
  label?: string;
  children?: ReactNode;
  isRequired?: boolean;
  type?: HTMLInputElement["type"];
  name: string;
  disabled?: boolean;
  handleInput: React.FormEventHandler<HTMLInputElement>;
};

export const Input: FC<Props> = ({
  value,
  placeholder,
  secure = false,
  label,
  isRequired = false,
  children,
  type = "text",
  name,
  disabled = false,
  handleInput,
}) => {
  const [isInputHidden, setIsInputHidden] = useState<boolean>(true);

  const toggleHidden = () => {
    setIsInputHidden(!isInputHidden);
  };

  return (
    <label className={styles.label}>
      {label && (
        <span className={styles.labelText}>
          {label}
          {isRequired && <strong>*</strong>}
        </span>
      )}
      <div className={styles.inputContainer}>
        {children && <span className={styles.icon}>{children}</span>}
        <input
          type={isInputHidden && secure ? "password" : type}
          placeholder={placeholder}
          className={styles.input}
          value={value}
          required={isRequired}
          name={name}
          onInput={handleInput}
          disabled={disabled}
        />
        {secure && (
          <button
            onClick={toggleHidden}
            type="button"
            className={classNames(styles.eye, {
              [styles.hidden]: !isInputHidden,
            })}
          >
            <Eye />
          </button>
        )}
      </div>
    </label>
  );
};
