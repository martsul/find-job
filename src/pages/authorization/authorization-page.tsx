import { AuthorizationForm } from "../../components/authorization-form/authorization-form";

export const AuthorizationPage = ({
  thereIsAccount,
}: {
  thereIsAccount: boolean;
}) => {
  return <AuthorizationForm thereIsAccount={thereIsAccount} />;
};
