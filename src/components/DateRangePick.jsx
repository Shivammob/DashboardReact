import React, { useState } from "react";
import { DateRangePicker } from "rsuite";
import { addDays } from 'date-fns';

const predefinedRanges = [
  {
    label: "Today",
    value: [new Date(), new Date()],
    placement: "left",
  },
  {
    label: "Yesterday",
    value: [addDays(new Date(), -1), addDays(new Date(), -1)],
    placement: "left",
  },
  {
    label: "Last 7 Days",
    value: [addDays(new Date(), -7), new Date()],
    placement: "left",
  },
  {
    label: "Last 30 Days",
    value: [addDays(new Date(), -30), new Date()],
    placement: "left",
  },
];

function DateRangePick() {
  return (
    <div className="datepicker" id="customSelect1">
      <span className="d-block text-nowrap mb-2">Date</span>
      <DateRangePicker showOneCalendar ranges={predefinedRanges} />
      {/* Display selected date range */}
      {/* {dateRange[0] && dateRange[1] && (
        <div style={{ marginTop: '20px' }}>
          <p>Start Date: {dateRange[0].toLocaleDateString()}</p>
          <p>End Date: {dateRange[1].toLocaleDateString()}</p>
        </div>
      )} */}
    </div>
  );
}

export default DateRangePick;
