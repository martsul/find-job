import { selectAuthData } from "../../../redux/authorization/authorization-slice";
import { useAppSelector } from "../../../redux/hooks";
import { HeaderAuthorization } from "./header-authorization";

export const HeaderAuthorizationContainer = () => {
  const data = useAppSelector(selectAuthData);

  if (data === null || typeof data === "string") {
    return null;
  }

  return <HeaderAuthorization name={data.nickname} />;
};
