import React, { useState } from "react";
import { Table, Pagination } from "rsuite";
import ActionsCell from "./ActionsCell";
import SwitchToCell from "./SwitchToCell";


const { Column, HeaderCell, Cell } = Table;

const mockUsers = [
  {
    userID: 1,
    name: "Kunal Kothari",
    email: "k@mobavenue.com",
    type: "Super Admin",
    FbCount: 0,
    lastLogged: "2024-09-20 05:37:18",
    switchTo: true,
    actions: "",
  },
  {
    userID: 2,
    name: "Text",
    email: "Text",
    type: "Text",
    FbCount: "Text",
    lastLogged: "Text",
    switchTo: false,
    actions: "",
  },
  {
    userID: 3,
    name: "Text",
    email: "Text",
    type: "Text",
    FbCount: "Text",
    lastLogged: "Text",
    switchTo: false,
    actions: "",
  },
  {
    userID: 4,
    name: "Text",
    email: "Text",
    type: "Text",
    FbCount: "Text",
    lastLogged: "Text",
    switchTo: false,
    actions: "",
  },
  {
    userID: 5,
    name: "Text",
    email: "Text",
    type: "Text",
    FbCount: "Text",
    lastLogged: "Text",
    switchTo: false,
    actions: "",
  },
  {
    userID: 6,
    name: "Text",
    email: "Text",
    type: "Text",
    FbCount: "Text",
    lastLogged: "Text",
    switchTo: false,
    actions: "",
  },
  {
    userID: 7,
    name: "Text",
    email: "Text",
    type: "Text",
    FbCount: "Text",
    lastLogged: "Text",
    switchTo: false,
    actions: "",
  },
  {
    userID: 8,
    name: "Text",
    email: "Text",
    type: "Text",
    FbCount: "Text",
    lastLogged: "Text",
    switchTo: false,
    actions: "",
  },
  {
    userID: 9,
    name: "Text",
    email: "Text",
    type: "Text",
    FbCount: "Text",
    lastLogged: "Text",
    switchTo: false,
    actions: "",
  },
  {
    userID: "Text",
    name: "Text",
    email: "Text",
    type: "Text",
    FbCount: "Text",
    lastLogged: "Text",
    switchTo: false,
    actions: "",
  },
];


function SwitchAccountDt() {
  // State for sorting
  const [sortColumn, setSortColumn] = useState(null);
  const [sortType, setSortType] = useState(null);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [activeUserID, setActiveUserID] = useState(null);
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
        <Column flexGrow={1} minWidth={150} align="" sortable>
          <HeaderCell>User ID</HeaderCell>
          <Cell dataKey="userID" />
        </Column>

        <Column flexGrow={1} minWidth={150} sortable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column flexGrow={1} minWidth={150} sortable>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column flexGrow={1} minWidth={150}>
          <HeaderCell>Type</HeaderCell>
          <Cell dataKey="type" />
        </Column>

        <Column flexGrow={1} minWidth={150}>
          <HeaderCell>Fb A/c Count</HeaderCell>
          <Cell dataKey="FbCount" />
        </Column>

        <Column flexGrow={1} minWidth={150}>
          <HeaderCell>Last Logged In</HeaderCell>
          <Cell dataKey="lastLogged" />
        </Column>

        <Column flexGrow={1} minWidth={50}>
          <HeaderCell>Switch To</HeaderCell>
          <SwitchToCell dataKey="switchTo" activeUserID = {activeUserID} setActiveUserID={setActiveUserID}/>
        </Column>

        <Column flexGrow={1} minWidth={150}>
          <HeaderCell>Actions</HeaderCell>
          <ActionsCell dataKey="actions" />
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

export default SwitchAccountDt;
