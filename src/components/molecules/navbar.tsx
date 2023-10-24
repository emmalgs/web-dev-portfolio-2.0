import { Link } from "react-router-dom";

interface Link {
  path: string;
  name: string;
}

interface NavBarProps {
  links: Link[];
}

function NavBar(props: NavBarProps) {
  return props.links.map((link: Link) => {
    return (
      <li className="nav-link">
        <Link to={link.path}>{link.name}</Link>
      </li>
    );
  });
}

export default NavBar;
