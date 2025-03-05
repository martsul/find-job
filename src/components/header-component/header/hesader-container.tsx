import { selectAuthStatus } from "../../../redux/authorization/authorization-slice";
import { useAppSelector } from "../../../redux/hooks";
import { Header } from "./header";

export const HeaderContainer = () => {
  const authStatus = useAppSelector(selectAuthStatus);

  return <Header authStatus={authStatus} />;
};
