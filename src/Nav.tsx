import { Link, useLocation } from "react-router-dom";
function Nav() {
      const { pathname } = useLocation();
      return (
            <nav className="nav nav-tabs mt-2">
                  <Link to="/Labs/a3"
                        className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>A3</Link>
                  <Link className="nav-link" to="/Labs/a4">
                        A4</Link>
                  <Link className="nav-link" to="/Labs/a5">
                        A5</Link>
                  <Link to="/Kanbas"
                        className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>
                  <Link to="/hello"
                        className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}>Hello</Link>
            </nav>
      );
}
export default Nav;