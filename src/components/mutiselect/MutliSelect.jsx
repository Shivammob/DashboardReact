import React, { useState } from "react";
import Select from "react-select";

function MutliSelect({options}) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    
      // Handler for multi-select changes
      const handleChange = (selected) => {
        setSelectedOptions(selected);
      };
    
      // Function to handle assignment
      const handleAssignUsers = () => {
        const assignedUsers = selectedOptions.map((option) => option.value);
        console.log("Assigned Users:", assignedUsers);
      };
  return (
    <div className="mb-4">
      <label htmlFor="multi-select" className="form-label">
        Username
      </label>
      <div className="d-flex align-items-center">
        <Select
          id="multi-select"
          options={options}
          isMulti
          name="users"
          value={selectedOptions}
          onChange={handleChange}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <button
          type="button"
          className="btn btn-primary ms-3"
          onClick={handleAssignUsers}
        >
          Assign Users
        </button>
      </div>
    </div>
  );
}

export default MutliSelect;
