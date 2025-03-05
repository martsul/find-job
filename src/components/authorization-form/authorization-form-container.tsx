import { useNavigate } from "react-router-dom";
import {
  selectAuthData,
  selectAuthStatus,
} from "../../redux/authorization/authorization-slice";
import { useAppSelector } from "../../redux/hooks";
import { AuthorizationForm } from "./authorization-form";
import { Loader } from "../modals/loader";

export const AuthorizationFormContainer = ({
  thereIsAccount,
}: {
  thereIsAccount: boolean;
}) => {
  const authStatus = useAppSelector(selectAuthStatus);
  const authData = useAppSelector(selectAuthData);
  const navigate = useNavigate();

  if (authStatus === "authorized") {
    navigate("/");
  }

  return (
    <>
      <AuthorizationForm
        errorMessage={typeof authData === "string" ? authData : undefined}
        thereIsAccount={thereIsAccount}
      />
      <Loader isOpen={authStatus === "pending"} />
    </>
  );
};
