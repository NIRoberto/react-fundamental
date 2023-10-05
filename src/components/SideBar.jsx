import React from "react";

import { AiFillVideoCamera, AiFillHome } from "react-icons/ai";

import { VscRepoPull } from "react-icons/vsc";

import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <AiFillHome className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/trending">
            <AiFillVideoCamera className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/series">
            <VscRepoPull className="icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
