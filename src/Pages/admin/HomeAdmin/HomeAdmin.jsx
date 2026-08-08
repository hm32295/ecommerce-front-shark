
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
import { useEffect, useState } from "react";
import { useUsers } from "../../../context/UsersContext";

const HomeAdmin = () => {
  
  const [dashboardData ,setDashboardData] = useState({
    products: 0,
    users: 0,
    categories: 0,
    coupons: 0,
    orders: 0,
  })
  const { dashboard, loading } = useUsers({})
  
  





  const handelDashboard = async()=> {
    try {
      const response = await dashboard()
      setDashboardData({
            products: response.data.productCount,
            users: response.data.usersCount,
            categories: response.data.categoryCount,
            coupons: response.data.couponCount,
            orders: response.data.orderCount,
      });
      
    } catch (error) {
      console.log(error);
      
    }
  };


  useEffect(() => {
    handelDashboard()  
  },[])
 

  const stats = [
    {
      title: "Products",
      value: dashboardData.products,
      icon: Package,
      className: "products",
    },
    {
      title: "Users",
      value: dashboardData.users,
      icon: Users,
      className: "users",
    },
    {
      title: "Categories",
      value: dashboardData.categories,
      icon: Tags,
      className: "categories",
    },
    {
      title: "Coupons",
      value: dashboardData.coupons,
      icon: TicketPercent,
      className: "coupons",
    },
    {
      title: "Orders",
      value: dashboardData.orders,
      icon: ShoppingCart,
      className: "orders",
    },
  ];

  return (
    <div className="admin-dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>

          <p>
            Welcome to your admin dashboard
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="dashboard-stats">

        {stats.map((stat) => {
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
        })}

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
