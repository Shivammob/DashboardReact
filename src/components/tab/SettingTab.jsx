import React from "react";
import refresh from "@/assets/images/refresh.svg"
import { NavLink } from "react-router-dom";

export default function SettingTab() {
  return (
    <>
      <div className="controlpanel-heading d-flex justify-content-between flex-wrap mb-4">
        <h1 className="mb-0">Settings</h1>
        <a href="#" onClick={(e) => e.preventDefault()} className="me-2">
          <img src={refresh} alt="refresh" className="img-fluid" />
        </a>
      </div>
      <div className="nav-lists bg-grey mb-4 p-3 p-md-4">
        <ul className="bg-white d-flex align-items-center p-0 mb-0">
          <li>
            <NavLink to="/account">
              Account
            </NavLink>
          </li>
          <li>
            <NavLink to="/control-panel">
              Control Panel
            </NavLink>
          </li>
          <li>
            <NavLink to="/switch-account">
              Switch Account
            </NavLink>
          </li>
          <li>
            <NavLink to="/performance-report">
              Performance Report
            </NavLink>
          </li>
          <li>
            <NavLink to="/change-password">
              Change Password
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
