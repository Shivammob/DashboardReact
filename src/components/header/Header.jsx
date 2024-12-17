import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import SigninHeader from "./SigninHeader";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isSignInPage = location.pathname === "/sign-in";
  const isSignUpPage = location.pathname === "/sign-up";

  return isSignInPage || isSignUpPage ? (
    <SigninHeader />
  ) : (
    <header>
      <Nav />
      <Sidebar />
    </header>
  );
}

export default Header;
