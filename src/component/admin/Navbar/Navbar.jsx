
import { jwtDecode } from "jwt-decode";
import {
  Menu,
  Bell,
  Search,
  UserCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = ({ onMenuClick }) => {

  const [user, setUser] = useState({})
  
  const handelToken = () => {
    const decoded = jwtDecode((localStorage.getItem('token')));
    // console.log(decoded);
    
    setUser(decoded)
  }
  useEffect(() => {
    handelToken()
  },[])
  return (
    <nav className="admin-navbar">

      <div className="d-flex align-items-center gap-3">

        {/* Mobile Menu */}
        <button
          type="button"
          className="btn admin-menu-btn d-lg-none"
          onClick={onMenuClick}
        >
          <Menu size={22} />
        </button>


        {/* Logo */}
        <div className="admin-logo">

          <div className="admin-logo-icon">
            A
          </div>

          <span>
            Admin Panel
          </span>

        </div>

      </div>


  
      {/* Right */}
      <div className="d-flex align-items-center gap-2">


        {/* User */}
        <div className="admin-user">

          <div className="admin-avatar">
            <UserCircle size={22} />
          </div>

          <div className="d-none d-sm-block">

            <div className="admin-user-name">
              {user?.name ? user.name : 'nuKnown'}
            </div>

            <div className="admin-user-role">
              {user?.role ? user.role: "Administrator"}
            </div>

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;

