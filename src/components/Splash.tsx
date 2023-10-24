import NavBar from "./molecules/navbar";
import { useState } from "react";
import "../App.css";
import anchovies from "../assets/img/anchovies.gif";

function Splash() {
  const [displayNav, setDisplayNav] = useState(false);

  const displayNavigation = () => {
    setDisplayNav(true);
  };

  const hideNavigation = () => {
    setDisplayNav(false);
  };

  const navigation = () => {
    return (
      <NavBar
        links={[
          { name: "Projects", path: "/projects" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" },
        ]}
      />
    );
  };

  return (
    <div
      className="splash-main"
      onMouseEnter={displayNavigation}
      onMouseLeave={hideNavigation}
    >
      <div className="splash-text">
        {"EMMA GERIGSCOTT".split("").map((letter, index) => {
          return (
            <span
              className="splash-letter"
              key={index}
              style={{
                fontSize: "38px",
                width: "20px",
                height: "250px",
                top: "45px",
                left: "436px",
                position: "absolute",
                transformOrigin: "bottom center",
                animation: `spin 20s linear ${index * -0.5}s infinite`,
              }}
            >
              {letter}
            </span>
          );
        })}
      </div>
      <div className="splash-circle-big">
        <img src={anchovies} alt="anchovies" height={"380px"} />
      </div>
      <div>{displayNav ? navigation() : null}</div>
    </div>
  );
}

export default Splash;
