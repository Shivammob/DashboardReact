import React, { useState } from "react";
import { Table } from "rsuite";
const { Cell } = Table;

function SwitchToCell({ rowData, dataKey, activeUserID, setActiveUserID, onSwitchAccount, ...props }) {
  
  const handleRadioChange = () => {
    setActiveUserID(rowData.name); // Set the current row as active when clicked
    onSwitchAccount()
  };

  // console.log(onSwitchAccount)
  

  return (
    <Cell {...props} className="">
      <div className="form-check d-flex align-items-center justify-content-center ps-0">
        <input
          className="form-check-input"
          type="radio"
          name="switchRadio"
          id={`tableRadio-${rowData.userID}`}
          checked={activeUserID === rowData.name}
          onChange={handleRadioChange}
        />
      </div>
    </Cell>
  );
}

export default SwitchToCell;
