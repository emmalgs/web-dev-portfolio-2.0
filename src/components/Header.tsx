import NavBar from "./molecules/navbar";

function Header() {
  return (
    <div className="header">
      <NavBar
        links={[
          { name: "Projects", path: "/projects" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <div className="header-line"></div>
      <div className="header-circle-big"></div>
      <div className="header-circle-small"></div>
    </div>
  );
}

export default Header;
