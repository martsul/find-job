import { AuthorizationFormContainer } from "../../components/authorization-form/authorization-form-container";

export const AuthorizationPage = ({
  thereIsAccount,
}: {
  thereIsAccount: boolean;
}) => {
  return <AuthorizationFormContainer thereIsAccount={thereIsAccount} />;
};
