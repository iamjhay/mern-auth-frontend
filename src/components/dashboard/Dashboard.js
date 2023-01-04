import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { AdminAuthorLink } from "../protect/hiddenLink";

const Dashboard = () => {
  useRedirectLoggedOutUser("/login");
  return (
    <div>
      <nav className="--btn-google --p --mb">
        <ul className="home-links">
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/changePassword">Change Password</NavLink>
          </li>
          <AdminAuthorLink>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </AdminAuthorLink>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Dashboard;
