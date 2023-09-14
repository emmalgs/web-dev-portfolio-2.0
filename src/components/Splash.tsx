import { Link } from "react-router-dom";
import "../App.css";
import anchovies from "../assets/img/anchovies.gif";

function Splash() {
  return (
    <div className="splash-main">
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
                top: "9.6%",
                left: "34.5%",
                position: "absolute",
                transformOrigin: "bottom center",
                animation: `spin 10s linear ${index * -0.5}s infinite`,
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
      <div className="splash-circle-small"></div>
      <div className="splash-gif"></div>
      <ul className="nav">
        <li className="nav-link">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="bottom-triangle"></div>
    </div>
  );
}

export default Splash;
