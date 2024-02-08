import React from "react";
import { SiTodoist } from "react-icons/si";

function Header() {
  return (
    <header>
      <h1><SiTodoist size={26} /> To-Do List</h1>
    </header>
  );
}

export default Header;