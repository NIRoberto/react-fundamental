import React from "react";
import { Link, json, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  console.log(JSON.parse(localStorage.getItem("isLogin")));
  let user = JSON.parse(localStorage.getItem("isLogin"));

  return (
    <header>
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tours">Tours</Link>
          </li>
        </ul>
      </div>

      {localStorage.getItem("isLogin") ? (
        <div>
          <h1>{user?.user?.email}</h1>
          <button
            onClick={() => {
              localStorage.removeItem("isLogin");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </button>
        </div>
      )}
    </header>
  );
};

export default NavBar;
