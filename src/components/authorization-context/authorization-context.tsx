import { ReactNode, useState } from "react";
import { AuthorizationContext } from ".";

export const AuthorizationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [authorization, setAuthorization] = useState(false);

  const signCallback = () => {
    setAuthorization(!authorization);
  };

  return (
    <AuthorizationContext.Provider
      value={{
        name: "Name",
        sign: authorization,
        signCallback: signCallback,
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};
