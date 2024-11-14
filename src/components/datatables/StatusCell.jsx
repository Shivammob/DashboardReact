import React, { useState } from 'react'
import { Table } from "rsuite";
const { Cell } = Table;


function StatusCell({ rowData, dataKey, ...props }) {
    const [isActive, setIsActive] = useState(rowData[dataKey]);
    const handleToggle = () => {
      setIsActive(isActive => !isActive);
    };
  
    return (
      <Cell {...props} className="">
        <label className="form-switch">
          <input
            type="checkbox"
            checked={isActive}
            onChange={handleToggle}
          />
          <span className="slider"></span>
        </label>
      </Cell>
    );
  }

export default StatusCell