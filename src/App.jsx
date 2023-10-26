import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import NavBar from "./components/NavBar";
import Tour from "./pages/Tour";
import SingleTour from "./pages/SingleTour";
import Login from "./pages/Login";
import { tours } from "./utils/data";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import Register from "./pages/Register";
import AppProvider from "./context/AppProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ToursDash from "./pages/ToursDash";
import AddTour from "./pages/AddTour";

const sidebarLinks = [
  { to: "/dashboard", icon: <FaHome />, label: "Home" },
  { to: "tours", icon: <FaChartBar />, label: "Tours" },
  { to: "tours/add", icon: <FaChartBar />, label: "AddTour" },
  { to: "users", icon: <FaUsers />, label: "Users" },
  { to: "bookings", icon: <FaCog />, label: "bookings" },
  { to: "/", icon: <FaSignOutAlt />, label: "Logout" },
];

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

const SidebarLink = ({ to, icon, label }) => {
  return (
    <Link to={to} className="sidebar-link">
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const DashboardLayout = () => {
  if (!localStorage.getItem("isLogin")) {
    alert("Login first");
    window.location.href = "/login";
  }
  return (
    <div className="dashboard">
      <nav className="dashboard-sidebar">
        {sidebarLinks.map((link, index) => (
          <SidebarLink
            key={index}
            to={link.to}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </nav>
      <div>
        <header className="dashboard-header">
          <h1>Robert</h1>
          <button
            className="logout"
            onClick={() => {
              localStorage.removeItem("isLogin");
              window.location.href = "/login";
            }}
          >
            logout
          </button>
        </header>
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

function App() {
  const query = new QueryClient({});

  return (
    <QueryClientProvider client={query}>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<h1>Home</h1>} />
              <Route path="/tours" element={<Tour />} />
              <Route path="/tours/:tourId" element={<SingleTour />} />
              <Route
                path="*"
                element={
                  <div>
                    <h1>Page not found</h1>
                    <Link to="/">Go back to home</Link>
                  </div>
                }
              ></Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route path="/dashboard/*" element={<DashboardLayout />}>
              <Route index element={<h1>Home</h1>} />
              <Route path="tours" element={<ToursDash />} />
              <Route path="tours/add" element={<AddTour />} />
              <Route path="users" element={<>users</>} />
              <Route path="bookings" element={<>bookings</>} />

              <Route
                path="*"
                element={
                  <div>
                    <h1>Page not found</h1>
                    <Link to="/">Go back to home</Link>
                  </div>
                }
              ></Route>
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
