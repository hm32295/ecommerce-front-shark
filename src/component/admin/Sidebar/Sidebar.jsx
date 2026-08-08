
import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Package,
  Tags,
  Settings,
  LogOut,
  X,
  ChevronRight,
  TicketPercent,
} from "lucide-react";
import { useAuth } from "../../../context/AuthContext";


const Sidebar = ({
  open,
  onClose,
}) => {

  const navigation = useNavigate('')

  const {logout} = useAuth()
  const menuItems = [
    {
      title: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },

    {
      title: "Products",
      path: "/admin/products",
      icon: Package,
    },

    {
      title: "Orders",
      path: "/admin/orders",
      icon: ShoppingBag,
    },

    {
      title: "Users",
      path: "/admin/users",
      icon: Users,
    },

    {
      title: "Categories",
      path: "/admin/categories",
      icon: Tags,
    },
    {
      title: "Coupons",
      path: "/admin/coupon",
      icon: TicketPercent ,
    },
  ];


  return (
    <>


      {open && (
        <div
          className="admin-sidebar-overlay d-lg-none"
          onClick={onClose}
        />
      )}

      <aside
        className={`admin-sidebar ${
          open ? "show" : ""
        }`}
      >

        <div className="admin-sidebar-header">

          <div className="d-flex align-items-center gap-2">

            <div className="admin-sidebar-logo">
              A
            </div>

            <div>
              <div className="fw-bold">
                Dashboard
              </div>

              <small className="text-muted">
                Management
              </small>
            </div>

          </div>


          {/* Close Mobile */}

          <button
            type="button"
            className="btn admin-close-btn d-lg-none"
            onClick={onClose}
          >
            <X size={20} />
          </button>

        </div>


        {/* Menu */}

        <div className="admin-sidebar-content">

          <div className="admin-menu-title">
            MENU
          </div>


          <nav className="d-flex flex-column gap-1">

            {menuItems.map((item) => {

              const Icon = item.icon;

              return (

                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/admin"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `admin-nav-link ${
                      isActive
                        ? "active"
                        : ""
                    }`
                  }
                >

                  <Icon size={19} />

                  <span>
                    {item.title}
                  </span>

                  <ChevronRight
                    size={16}
                    className="admin-nav-arrow"
                  />

                </NavLink>

              );

            })}

          </nav>


          {/* Settings */}

          <div className="admin-menu-title mt-4">
            SYSTEM
          </div>


          <NavLink
            to="/admin/settings"
            onClick={onClose}
            className={({ isActive }) =>
              `admin-nav-link ${
                isActive ? "active" : ""
              }`
            }
          >

            <Settings size={19} />

            <span>
              Settings
            </span>

            <ChevronRight
              size={16}
              className="admin-nav-arrow"
            />

          </NavLink>

        </div>


        {/* Bottom */}

        <div className="admin-sidebar-footer">

          <button
            type="button"
            className="admin-logout-btn"
            onClick={async () => {
              await logout()
              navigation('/')
            }}
          >

            <LogOut size={19} />

            <span>
              Logout
            </span>

          </button>

        </div>

      </aside>

    </>
  );
};


export default Sidebar;

