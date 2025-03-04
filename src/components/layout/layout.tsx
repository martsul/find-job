import { Outlet } from "react-router-dom";
import { Footer } from "../footer-component/footer/footer";
import { Header } from "../header-component/header/header";
import { FC } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { checkAuth } from "../../redux/authorization/thunks/check-auth";

type Props = {
  thereIsFooter?: boolean;
};

export const Layout: FC<Props> = ({ thereIsFooter = true }) => {
  const dispatch = useAppDispatch();
  dispatch(checkAuth());

  return (
    <>
      <Header />
      <Outlet />
      {thereIsFooter && <Footer />}
    </>
  );
};
