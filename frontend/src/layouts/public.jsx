// Layout.jsx
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      {/* The Outlet renders the matched child route */}
      <Outlet />
    </div>
  );
};

export default Layout;
