import NavBar from "./molecules/navbar";
import { useState } from "react";

function Header() {
  const [displayNav, setDisplayNav] = useState(false);

  const displayDropDownNav = () => {
    setDisplayNav(true);
  };

  const hideDropDownNav = () => {
    setDisplayNav(false);
  }

  const dropDownNav = () => {
    return (
      <NavBar
        links={[
          { name: "Projects", path: "/projects" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" },
          { name: "Home", path: "/"}
        ]}
      />
    );
  };

  return (
    <div className="header" onMouseEnter={displayDropDownNav} onMouseLeave={hideDropDownNav}>
      <div className="header-line"></div>
      <div className="header-circle-big"></div>
      <div
        className="header-circle-small"

      ></div>
      <div>{displayNav ? dropDownNav() : null}</div>
    </div>
  );
}

export default Header;
