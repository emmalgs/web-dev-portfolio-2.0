import { Link } from "react-router-dom";

function Splash() {
  return (
    <div className="splash-main">
      <h1>Emma Gerigscott</h1>
      <div className="splash-circle-big"></div>
      <div className="splash-circle-small"></div>
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
