import React from "react";
import Select from "react-select";
import facebook from "@/assets/images/facebook.svg";
import google from "@/assets/images/google.svg";

// Sample options with images
const options = [
  {
    value: "All",
    label: <div className="custom-option">All</div>,
  },
  {
    value: "Facebook",
    label: (
      <div className="custom-option">
        <img src={facebook} alt="facebook" className="pe-1" />
        Facebook
      </div>
    ),
  },
  {
    value: "google",
    label: (
      <div className="custom-option">
        <img src={google} alt="google" className="pe-1" />
        Google
      </div>
    ),
  },
];

const CustomSelect = () => {
  return (
    <>
      <div className="custom-select" id="selectPlatform">
        <span className="font-10 label">Platform</span>
        <Select options={options} />
      </div>
      
    </>
  );
};

export default CustomSelect;
