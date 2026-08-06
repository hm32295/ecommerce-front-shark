import './AdminLayout.css'
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../component/admin/Sidebar/Sidebar";
import Navbar from "../../../component/admin/Navbar/Navbar";


const AdminLayout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout min-vh-100 bg-light">

      {/* ============================= */}
      {/* Navbar */}
      {/* ============================= */}

      <Navbar
        onMenuClick={() => setSidebarOpen(true)}
      />


      {/* ============================= */}
      {/* Sidebar */}
      {/* ============================= */}

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />


      {/* ============================= */}
      {/* Main Content */}
      {/* ============================= */}

      <main className="admin-main">

        <div className="container-fluid p-3 p-md-4">

          <Outlet />

        </div>

      </main>

    </div>
  );
};

export default AdminLayout;
