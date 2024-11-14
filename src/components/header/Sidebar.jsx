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
    const [openSection, setOpenSection] = useState({section1: false, section2: false});
   
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
            <NavLink
              className="sidebar-menu-list-item collapsable collapsed"
              type="button"
            //   data-bs-toggle="collapse"
            //   data-bs-target="#collapseOne"
            //   aria-expanded="false"
            //   aria-controls="collapseOne"
              onClick={() => sectionCollapse('section1')}
              aria-controls="collapseOne"
              aria-expanded={openSection.section1}
              to="/yo"
            >
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
            </NavLink>
            <Collapse in={openSection.section1} >
              <ul className="sidebar-menu-list-sub" id="collapseOne">
                <li>
                  <NavLink to="#" onClick={(e) => e.preventDefault()} className="active">
                    Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" onClick={(e) => e.preventDefault()}>SubId</NavLink>
                </li>
                <li>
                  <NavLink to="#" onClick={(e) => e.preventDefault()}>Hourly</NavLink>
                </li>
                <li>
                  <NavLink to="#" onClick={(e) => e.preventDefault()}>Timeframe</NavLink>
                </li>
                <li>
                  <NavLink to="#" onClick={(e) => e.preventDefault()}>Campaign (FB)</NavLink>
                </li>
              </ul>
            </Collapse>

            <NavLink
              className="sidebar-menu-list-item collapsable collapsed"
              type="button"
              onClick={() => sectionCollapse('section2')}
              aria-controls="collapseTwo"
              aria-expanded={openSection.section2}
              to="/reports"
            >
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
            </NavLink>
            <Collapse in={openSection.section2} id="collapseTwo">
              <ul className="sidebar-menu-list-sub">
                <li>
                  <NavLink to="/reports/overview" onClick={(e) => e.preventDefault()} className="active">
                    Overview
                  </NavLink>
                </li>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()}>SubId</a>
                </li>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()}>Hourly</a>
                </li>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()}>Timeframe</a>
                </li>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()}>Campaign (FB)</a>
                </li>
              </ul>
            </Collapse>
            <NavLink to="/cc" className="sidebar-menu-list-item">
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
            <NavLink to="/switch-account" className="sidebar-menu-list-item">
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
            <a href="#" onClick={(e) => e.preventDefault()} className="sidebar-menu-list-item">
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
            </a>
          </div>
        </div>
      </div>
  )
}

export default Sidebar