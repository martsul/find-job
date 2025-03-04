import { useState } from "react";
import { login } from "../../redux/authorization/thunks/login";
import { registration } from "../../redux/authorization/thunks/registration";
import { useAppDispatch } from "../../redux/hooks";

export const useAuthForm = () => {
  const [inputValues, setInputValue] = useState({
    nickname: "",
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();

  const handlerSubmitLogIn: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    dispatch(login({ email, password }));
  };

  const handlerSubmitRegistration: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const nickname = formData.get("nickname") as string;

    dispatch(registration({ email, password, nickname }));
  };

  const handleInput: React.FormEventHandler<HTMLInputElement> = (event) => {
    const target = event.currentTarget;
    setInputValue({ ...inputValues, [target.name]: target.value });
  };

  return {
    handlerSubmitLogIn,
    handlerSubmitRegistration,
    handleInput,
    inputValues,
  };
};
