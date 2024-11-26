import React, {useState} from 'react'
import Collapse from "react-bootstrap/Collapse";
import logo from "@/assets/images/logo.svg";
import dashboardIcon from "@/assets/images/dashboard.svg";
import dashboardHover from "@/assets/images/dashboard_1.svg";
import campaign from "@/assets/images/campaign.svg";
import campaignHover from "@/assets/images/campaign_1.svg";
import report from "@/assets/images/report.svg";
import reportHover from "@/assets/images/report_1.svg";
import facebook from "@/assets/images/facebook_cebo.svg";
import facebookHover from "@/assets/images/facebook_cebo_1.svg";
import settings from "@/assets/images/settings.svg";
import settingsHover from "@/assets/images/settings_1.svg";
import profileLogo from "@/assets/images/profile_logo.svg";
import profileLogoHover from "@/assets/images/profile_logo_1.svg";
import addNewAccount from "@/assets/images/add_new_account.svg";
import addNewAccountHover from "@/assets/images/add_new_account_1.svg";
import logOut from "@/assets/images/log_out.svg";
import logOutHover from "@/assets/images/log_out_1.svg";
import switchAccount from "@/assets/images/switch_account.svg";
import { NavLink } from "react-router-dom";


function Sidebar() {
    const [openSection, setOpenSection] = useState({section1: false, section2: false, section3: false});
   
    const [isChecked, setIsChecked] = useState(false);
    
    const sectionCollapse = (section) => {
      setOpenSection(prev => ({
          ...prev,                     
          [section]: !prev[section]     
        }));
      // console.log(section, "s")
    }

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      };
      
  return (
    <div className="sidebar">
        <img
          src={logo}
          alt="moborbitx"
          className="img-fluid bdr-bottom py-3 mx-auto d-block"
        />
        <div className="sidebar-menu">
          <div className="sidebar-menu-list py-3 bdr-bottom">
            <h6 className="secondary-text font-9">Main</h6>
            <NavLink to="/" className="sidebar-menu-list-item">
              <img
                src={dashboardIcon}
                alt="dashboard"
                className="img-fluid me-2 menu-icon img1"
              />
              <img
                src={dashboardHover}
                alt="dashboard"
                className="img-fluid me-2 menu-icon img2"
              />
              Dashboard
            </NavLink>
            <button
              className={`sidebar-menu-list-item w-100 collapsable collapsed ${openSection.section1 ? "active" : ""}`}
              type="button"
              onClick={() => sectionCollapse('section1')}
              aria-controls="collapseOne"
              aria-expanded={openSection.section1}>
              <img
                src={campaign}
                alt="campaign"
                className="img-fluid me-2 menu-icon img1"
              />
              <img
                src={campaignHover}
                alt="campaign"
                className="img-fluid me-2 menu-icon img2"
              />
              Campaign
            </button>
            <Collapse in={openSection.section1} >
              <ul className="sidebar-menu-list-sub" id="collapseOne">
                <li>
                  <NavLink to="/campaign/overview">
                    Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/campaign/subid">SubId</NavLink>
                </li>
                <li>
                  <NavLink to="/campaign/hourly">Hourly</NavLink>
                </li>
                <li>
                  <NavLink to="/campaign/timeframe">Timeframe</NavLink>
                </li>
                <li>
                  <NavLink to="/campaign/campaignfb">Campaign (FB)</NavLink>
                </li>
              </ul>
            </Collapse>

            <button
              className={`sidebar-menu-list-item w-100 collapsable collapsed ${openSection.section2 ? "active" : ""}`}
              type="button"
              onClick={() => sectionCollapse('section2')}
              aria-controls="collapseTwo"
              aria-expanded={openSection.section2}>
              <img
                src={report}
                alt="report"
                className="img-fluid me-2 menu-icon img1"
              />
              <img
                src={reportHover}
                alt="report"
                className="img-fluid me-2 menu-icon img2"
              />
              Reports
            </button>
            <Collapse in={openSection.section2} id="collapseTwo">
              <ul className="sidebar-menu-list-sub">
                <li>
                  <NavLink to="/reports/overview">
                    Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/reports/subid">SubId</NavLink>
                </li>
                <li>
                  <NavLink to="/reports/hourly">Hourly</NavLink>
                </li>
                <li>
                  <NavLink to="/reports/timeframe">Timeframe</NavLink>
                </li>
                <li>
                  <NavLink to="/reports/campaign">Campaign (FB)</NavLink>
                </li>
              </ul>
              {/* <Outlet /> */}
            </Collapse>

            <button
              className={`sidebar-menu-list-item w-100 collapsable collapsed ${openSection.section3 ? "active" : ""}`}
              type="button"
              onClick={() => sectionCollapse('section3')}
              aria-controls="collapseThree"
              aria-expanded={openSection.section3}>
              <img
                src={report}
                alt="report"
                className="img-fluid me-2 menu-icon img1"
              />
              <img
                src={reportHover}
                alt="report"
                className="img-fluid me-2 menu-icon img2"
              />
              Inventories
            </button>
            <Collapse in={openSection.section3} id="collapseThree">
              <ul className="sidebar-menu-list-sub">
                <li>
                  <NavLink to="/inventories/overview">
                    Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/change-password">SubId</NavLink>
                </li>
                <li>
                  <NavLink to="/inventories/hourly">Hourly</NavLink>
                </li>
                <li>
                  <NavLink to="/inventories/timeframe">Timeframe</NavLink>
                </li>
                <li>
                  <NavLink to="/inventories/campaign">Campaign (FB)</NavLink>
                </li>
              </ul>
              {/* <Outlet /> */}
            </Collapse>
            <NavLink to="/performance-report" className="sidebar-menu-list-item">
              <img
                src={facebook}
                alt="facebook cebo"
                className="img-fluid me-2 menu-icon img1"
              />
              <img
                src={facebookHover}
                alt="facebook cebo"
                className="img-fluid me-2 menu-icon img2"
              />
              Facebook CEBO
            </NavLink>
          </div>
          <div className="sidebar-menu-list py-3 mb-3 bdr-bottom">
            <h6 className="secondary-text font-9">Help</h6>
            <NavLink to="/control-panel" className="sidebar-menu-list-item">
              <img
                src={settings}
                alt="settings"
                className="img-fluid me-2 menu-icon img1"
              />
              <img
                src={settingsHover}
                alt="settings"
                className="img-fluid me-2 menu-icon img2"
              />
              Settings
            </NavLink>
          </div>
          <div className="sidebar-menu-list dark-bg rounded py-3 px-2 mb-3">
            <h6 className="secondary-text font-9 text-uppercase d-flex justify-content-between align-items-center">
              switch account{" "}
              <a href="#" onClick={(e) => e.preventDefault()} className="">
                <img
                  src={switchAccount}
                  alt="switch account"
                  className="img-fluid"
                />
              </a>
            </h6>
            <div className="sidebar-menu-list-users">
              <div className="users d-flex align-items-center py-2">
                <img
                  src={profileLogo}
                  alt="profile"
                  className="img-fluid me-2 menu-icon img1"
                />
                <img
                  src={profileLogoHover}
                  alt="profile"
                  className="img-fluid me-2 menu-icon img2"
                />
                <div className="form-check d-flex align-items-center justify-content-between ps-0 w-100">
                  <label
                    className="form-check-label w100 text-ellipses"
                    htmlFor="flexRadioDefault1"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Kunal Kothari"
                  >
                    Kunal Kothari
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={handleCheckboxChange}
                    checked={true}
                  />
                </div>
              </div>
              <div className="users d-flex align-items-center py-2">
                <img
                  src={profileLogo}
                  alt="profile"
                  className="img-fluid me-2 menu-icon img1"
                />
                <img
                  src={profileLogoHover}
                  alt="profile"
                  className="img-fluid me-2 menu-icon img2"
                />
                <div className="form-check d-flex align-items-center justify-content-between ps-0 w-100">
                  <label
                    className="form-check-label w-100 text-ellipses"
                    htmlFor="flexRadioDefault2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Monica Davis"
                  >
                    Monica Davis
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                </div>
              </div>
              <div className="users d-flex align-items-center py-2">
                <img
                  src={profileLogo}
                  alt="profile"
                  className="img-fluid me-2 menu-icon img1"
                />
                <img
                  src={profileLogoHover}
                  alt="profile"
                  className="img-fluid me-2 menu-icon img2"
                />
                <div className="form-check d-flex align-items-center justify-content-between ps-0 w-100">
                  <label
                    className="form-check-label w-100 text-ellipses"
                    htmlFor="flexRadioDefault3"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Ross Geller"
                  >
                    Ross Geller
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-menu-list mb-2">
            <NavLink to="/active-alerts" className="sidebar-menu-list-item">
              <img
                src={addNewAccount}
                alt="add new account"
                className="img-fluid me-2 menu-icon img1"
              />
              <img
                src={addNewAccountHover}
                alt="add new account"
                className="img-fluid me-2 menu-icon img2"
              />
              Add New Account
            </NavLink>
          </div>
          <div className="sidebar-menu-list mb-2">
            <NavLink to="/sign-in" className="sidebar-menu-list-item">
              <img
                src={logOut}
                alt="logout account"
                className="img-fluid me-2 menu-icon img1"
              />
              <img
                src={logOutHover}
                alt="logout account"
                className="img-fluid me-2 menu-icon img2"
              />
              Logout Account
            </NavLink>
          </div>
        </div>
      </div>
  )
}

export default Sidebar