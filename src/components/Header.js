import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        Cocktails app
      </Link>
    </div>
  );
}

export default Header;
