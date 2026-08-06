
import {
  Menu,
  Bell,
  Search,
  UserCircle,
} from "lucide-react";

const Navbar = ({ onMenuClick }) => {

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


      {/* Search */}
      <div className="admin-search d-none d-md-flex">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search..."
        />

      </div>


      {/* Right */}
      <div className="d-flex align-items-center gap-2">

        {/* Notification */}
        <button className="admin-icon-btn">

          <Bell size={20} />

          <span className="notification-dot" />

        </button>


        {/* User */}
        <div className="admin-user">

          <div className="admin-avatar">
            <UserCircle size={22} />
          </div>

          <div className="d-none d-sm-block">

            <div className="admin-user-name">
              Admin
            </div>

            <div className="admin-user-role">
              Administrator
            </div>

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;

