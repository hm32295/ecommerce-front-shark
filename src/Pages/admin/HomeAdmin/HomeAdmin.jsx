
import {
  Package,
  Users,
  Tags,
  TicketPercent,
  ShoppingCart,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

import "./HomeAdmin.css";
import { useEffect } from "react";
import { useUsers } from "../../../context/UsersContext";

const HomeAdmin = () => {
  
  const { dashboard, loading ,dashboardData } = useUsers({})
  
  
  useEffect(() => {
    const handelDashboard = async()=> {
      try {
         await dashboard()
      } catch (error) {
        console.log(error);
      }
    };
    handelDashboard()  
  },[dashboard])
 

  const stats = (dashboardData) => {
    
    return [
      {
        title: "Products",
        value: dashboardData.productCount
,
        icon: Package,
        className: "products",
      },
      {
        title: "Users",
        value: dashboardData.usersCount
,
        icon: Users,
        className: "users",
      },
      {
        title: "Categories",
        value: dashboardData.categoryCount
,
        icon: Tags,
        className: "categories",
      },
      {
        title: "Coupons",
        value: dashboardData.couponCount
,
        icon: TicketPercent,
        className: "coupons",
      },
      {
        title: "Orders",
        value: dashboardData.orderCount
,
        icon: ShoppingCart,
        className: "orders",
      },
    ];
  }

  return (
    <div className="admin-dashboard">

      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>

          <p>
            Welcome to your admin dashboard
          </p>
        </div>
      </div>

      <div className="dashboard-stats">

        {!loading ?(
        stats(dashboardData).map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            className={`dashboard-stat-card ${stat.className}`}
            key={stat.title}
          >

            <div className="stat-top">

              <div className="stat-icon">
                <Icon size={24} />
              </div>

              <div className="stat-arrow">
                <ArrowUpRight size={18} />
              </div>

            </div>

            <div className="stat-content">

              <span className="stat-title">
                {stat.title}
              </span>

              <strong className="stat-value">
                {stat.value}
              </strong>

            </div>

          </div>
        );
      })) : 'loading .....'}

      </div>

      {/* Welcome Section */}
      <div className="dashboard-welcome">

        <div className="welcome-content">

          <div className="welcome-icon">
            <ShoppingCart size={34} />
          </div>

          <div>
            <h2>
              Welcome to E-Commerce Admin
            </h2>

            <p>
              Here you can manage your products,
              categories, orders, users and coupons.
            </p>
          </div>

        </div>

        <div className="welcome-trend">
          <TrendingUp size={22} />

          <span>
            Store Overview
          </span>
        </div>

      </div>

    </div>
  );
};

export default HomeAdmin;
