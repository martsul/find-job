import { Outlet } from "react-router-dom";
import { Footer } from "../footer-component/footer/footer";
import { Header } from "../header-component/header/header";
import { FC } from "react";

type Props = {
  thereIsFooter?: boolean;
};

export const Layout: FC<Props> = ({ thereIsFooter = true }) => {
  return (
    <>
      <Header />
      <Outlet />
      {thereIsFooter && <Footer />}
    </>
  );
};
