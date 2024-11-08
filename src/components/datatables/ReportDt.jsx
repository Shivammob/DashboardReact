import React, { useState } from "react";
import { Table, Pagination } from "rsuite";


const { Column, HeaderCell, Cell } = Table;

const mockUsers = [
  {
    campaignDomain: "adhd-treatment-in-mexico.zone",
    totalSessions: 100435,
    mobileSessions: 100400,
    desktopSessions: 35,
    desktopSession: 35,
  },
  {
    campaignDomain: "Text",
    totalSessions: "Text",
    mobileSessions: "Text",
    desktopSessions: "Text",
    desktopSession: "Text",
  },
  {
    campaignDomain: "Text",
    totalSessions: "Text",
    mobileSessions: "Text",
    desktopSessions: "Text",
    desktopSession: "Text",
  },
  {
    campaignDomain: "Text",
    totalSessions: "Text",
    mobileSessions: "Text",
    desktopSessions: "Text",
    desktopSession: "Text",
  },
  {
    campaignDomain: "Text",
    totalSessions: "Text",
    mobileSessions: "Text",
    desktopSessions: "Text",
    desktopSession: "Text",
  },
  {
    campaignDomain: "Text",
    totalSessions: "Text",
    mobileSessions: "Text",
    desktopSessions: "Text",
    desktopSession: "Text",
  },
  {
    campaignDomain: "Text",
    totalSessions: "Text",
    mobileSessions: "Text",
    desktopSessions: "Text",
    desktopSession: "Text",
  },
  {
    campaignDomain: "Text",
    totalSessions: "Text",
    mobileSessions: "Text",
    desktopSessions: "Text",
    desktopSession: "Text",
  },
  {
    campaignDomain: "Text",
    totalSessions: "Text",
    mobileSessions: "Text",
    desktopSessions: "Text",
    desktopSession: "Text",
  },
  {
    campaignDomain: "Text",
    totalSessions: "Text",
    mobileSessions: "Text",
    desktopSessions: "Text",
    desktopSession: "Text",
  },
];


function ReportDt() {
  // State for sorting
  const [sortColumn, setSortColumn] = useState(null);
  const [sortType, setSortType] = useState(null);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sorting logic
  const handleSortColumn = (sortColumn, sortType) => {
    setSortColumn(sortColumn);
    setSortType(sortType);
  };

  const getSortedData = () => {
    if (!sortColumn || !sortType) return mockUsers;

    return [...mockUsers].sort((a, b) => {
      let result = 0;
      if (a[sortColumn] > b[sortColumn]) {
        result = 1;
      } else if (a[sortColumn] < b[sortColumn]) {
        result = -1;
      }
      return sortType === "asc" ? result : -result;
    });
  };

  // Pagination logic
  const getPaginatedData = () => {
    const sortedData = getSortedData();
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedData.slice(start, end);
  };

  return (
    <div className="table-responsive">
      <Table
        // height={400}
        data={getPaginatedData()}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        className="table stripe table-hover text-nowrap cst-table"
        height={400}>
        <Column flexGrow={1} minWidth={180} align="" sortable>
          <HeaderCell>Campaign Domain</HeaderCell>
          <Cell dataKey="campaignDomain" />
        </Column>

        <Column flexGrow={1} minWidth={180} sortable>
          <HeaderCell>Total Sessions</HeaderCell>
          <Cell dataKey="totalSessions" />
        </Column>

        <Column flexGrow={1} minWidth={180} sortable>
          <HeaderCell>Mobile Sessions</HeaderCell>
          <Cell dataKey="mobileSessions" />
        </Column>

        <Column flexGrow={1} minWidth={180}>
          <HeaderCell>Desktop Sessions</HeaderCell>
          <Cell dataKey="desktopSessions" />
        </Column>

        <Column flexGrow={1} minWidth={180}>
          <HeaderCell>Desktop Sessions</HeaderCell>
          <Cell dataKey="desktopSession" />
        </Column>
      </Table>

      {/* Pagination */}
      <Pagination
        prev
        next
        first
        last
        maxButtons={5}
        size="sm"
        layout={["total", "-", "pager", "-", "limit"]}
        total={mockUsers.length}
        limit={itemsPerPage}
        activePage={currentPage}
        onChangePage={setCurrentPage}
      />
    </div>
  );
}

export default ReportDt;
