import React, { useState } from "react";
import { Table, Input, InputGroup, IconButton, Pagination } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import ActionsCell from "./ActionsCell";
import SwitchToCell from "./SwitchToCell";
import { switchUsers } from "@/components/db";
import useDatatableSort from "@/components/hooks/useDatatableSort";
import DatatableExportBtn from "./DatatableExportBtn";

const { Column, HeaderCell, Cell } = Table;

function SwitchAccountDt({ activeUserID, setActiveUserID, onSwitchAccount }) {
  // const [activeUserID, setActiveUserID] = useState(null);

  // const [data, setData] = useState(switchUsers); // Data for display
  // const [searchKeyword, setSearchKeyword] = useState("");
  // // State for sorting
  // const [sortColumn, setSortColumn] = useState(null);
  // const [sortType, setSortType] = useState(null);

  // // State for pagination
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 10;

  // // Sorting logic
  // const handleSortColumn = (sortColumn, sortType) => {
  //   setSortColumn(sortColumn);
  //   setSortType(sortType);
  // };

  // const handleSearch = (value) => {
  //   const filteredData = switchUsers.filter((item) =>
  //     Object.values(item).some((val) =>
  //       String(val).toLowerCase().includes(value.toLowerCase())
  //     )
  //   );
  //   setData(filteredData);
  //   setSearchKeyword(value);
  //   setCurrentPage(1); // Reset to the first page after searching
  // };

  // const getSortedData = () => {
  //   const sortedData = [...data];
  //   if (sortColumn && sortType) {
  //     sortedData.sort((a, b) => {
  //       let result = 0;
  //       if (a[sortColumn] > b[sortColumn]) {
  //         result = 1;
  //       } else if (a[sortColumn] < b[sortColumn]) {
  //         result = -1;
  //       }
  //       return sortType === "asc" ? result : -result;
  //     });
  //   }
  //   return sortedData;
  // };

  // // Pagination logic
  // const getPaginatedData = () => {
  //   const sortedData = getSortedData();
  //   const start = (currentPage - 1) * itemsPerPage;
  //   const end = start + itemsPerPage;
  //   return sortedData.slice(start, end);
  // };

  const itemsPerPage = 10;
  const {
    paginatedData,
    currentPage,
    setCurrentPage,
    handleSearch,
    handleSortColumn,
    searchKeyword,
    sortColumn,
    sortType,
    exportToCSV,
    exportToPDF,
    printTable,
    totalItems,
  } = useDatatableSort(switchUsers, itemsPerPage);

  return (
    <>
      <DatatableExportBtn
        exportToCSV={exportToCSV}
        exportToPDF={exportToPDF}
        printTable={printTable}
      />
      <div className="table-responsive">
        <InputGroup inside className="mb-4 rs-dt-search">
          <Input
            placeholder="Search..."
            value={searchKeyword}
            onChange={handleSearch}
          />
          <IconButton icon={<SearchIcon />} appearance="subtle" />
        </InputGroup>
        <Table
          // height={400}
          data={paginatedData}
          sortColumn={sortColumn}
          sortType={sortType}
          onSortColumn={handleSortColumn}
          className="table stripe table-hover text-nowrap cst-table"
          height={400}
        >
          <Column flexGrow={1} minWidth={150} align="" sortable>
            <HeaderCell>User ID</HeaderCell>
            <Cell dataKey="userID" verticalAlign="middle" />
          </Column>

          <Column flexGrow={1} minWidth={150} sortable>
            <HeaderCell>Name</HeaderCell>
            <Cell dataKey="name" verticalAlign="middle" />
          </Column>

          <Column flexGrow={1} minWidth={150} sortable>
            <HeaderCell>Email</HeaderCell>
            <Cell dataKey="email" verticalAlign="middle" />
          </Column>

          <Column flexGrow={1} minWidth={150}>
            <HeaderCell>Type</HeaderCell>
            <Cell dataKey="type" verticalAlign="middle" />
          </Column>

          <Column flexGrow={1} minWidth={150}>
            <HeaderCell>Fb A/c Count</HeaderCell>
            <Cell dataKey="FbCount" verticalAlign="middle" />
          </Column>

          <Column flexGrow={1} minWidth={150}>
            <HeaderCell>Last Logged In</HeaderCell>
            <Cell dataKey="lastLogged" verticalAlign="middle" />
          </Column>

          <Column flexGrow={1} minWidth={50}>
            <HeaderCell>Switch To</HeaderCell>
            <SwitchToCell
              dataKey="switchTo"
              activeUserID={activeUserID}
              setActiveUserID={setActiveUserID}
              onSwitchAccount={onSwitchAccount}
            />
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
          total={switchUsers.length}
          limit={itemsPerPage}
          activePage={currentPage}
          onChangePage={setCurrentPage}
        />
      </div>
    </>
  );
}

export default SwitchAccountDt;
