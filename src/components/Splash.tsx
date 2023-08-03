import { Link } from "react-router-dom";

function Splash() {
  return (
    <div className="splash-main">
      <h1>Emma Gerigscott</h1>
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Splash;
