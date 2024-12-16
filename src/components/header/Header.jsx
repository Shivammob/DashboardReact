import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

function Header({handleSignOut}) {

  return (
    <header>
      <Nav />
      <Sidebar handleSignOut={handleSignOut}/>
    </header>
  );
}

export default Header;
