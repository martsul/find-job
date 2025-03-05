import { Outlet } from "react-router-dom";
import { Footer } from "../footer-component/footer/footer";
import { FC } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { checkAuth } from "../../redux/authorization/thunks/check-auth";
import { HeaderContainer } from "../header-component/header/hesader-container";

type Props = {
  thereIsFooter?: boolean;
};

export const Layout: FC<Props> = ({ thereIsFooter = true }) => {
  const dispatch = useAppDispatch();
  dispatch(checkAuth());

  return (
    <>
      <HeaderContainer />
      <Outlet />
      {thereIsFooter && <Footer />}
    </>
  );
};
