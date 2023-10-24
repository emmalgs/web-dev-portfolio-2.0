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
      <div className="nav-link">
        <Link to={link.path}>{link.name}</Link>
      </div>
    );
  });
}

export default NavBar;
