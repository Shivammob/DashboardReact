import React, { useState } from "react";
import { Table, Input, InputGroup, IconButton, Pagination } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import StatusCell from "./StatusCell";
import ActionsCell from "./ActionsCell";
import { activeAlerts } from "@/components/db";
import DatatableSort from "./DatatableSort";

const { Column, HeaderCell, Cell } = Table;

function ActiveAlertsDt() {
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
    totalItems,
  } = DatatableSort(activeAlerts, itemsPerPage);

  return (
    <div className="table-responsive">
      <InputGroup inside className="mb-4 rs-dt-search">
        <Input
          placeholder="Search..."
          value={searchKeyword}
          onChange={handleSearch}
        />
        <IconButton icon={<SearchIcon />} appearance="subtle" />
      </InputGroup>
      <Table rowHeight={60}
        data={paginatedData}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        className="table stripe table-hover text-nowrap cst-table"
        height={400}
      >
        <Column flexGrow={1} minWidth={150} sortable>
          <HeaderCell>Sr. No.</HeaderCell>
          <Cell dataKey="srno" verticalAlign="middle" />
        </Column>

        <Column flexGrow={1} minWidth={150} sortable>
          <HeaderCell>Campaign Name</HeaderCell>
          <Cell dataKey="campaignName" verticalAlign="middle" />
        </Column>

        <Column flexGrow={1} minWidth={150} sortable>
          <HeaderCell>Alert Type</HeaderCell>
          <Cell dataKey="alertType" verticalAlign="middle" />
        </Column>

        <Column flexGrow={1} minWidth={150}>
          <HeaderCell>Alert Param</HeaderCell>
          <Cell dataKey="alertParam" verticalAlign="middle" />
        </Column>

        <Column flexGrow={1} minWidth={150}>
          <HeaderCell>Alert Value</HeaderCell>
          <Cell dataKey="alertValue" verticalAlign="middle" />
        </Column>

        <Column flexGrow={1} minWidth={150}>
          <HeaderCell>Alert Date & Time</HeaderCell>
          <Cell dataKey="alertDateTime" verticalAlign="middle" />
        </Column>

        <Column flexGrow={1} minWidth={150}>
          <HeaderCell>Actions</HeaderCell>
          <Cell dataKey="actions" verticalAlign="middle"><a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="ms-2 btn redbtn py-1"
        >
          Close
        </a></Cell>
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
        total={activeAlerts.length}
        limit={itemsPerPage}
        activePage={currentPage}
        onChangePage={setCurrentPage}
      />
    </div>
  );
}

export default ActiveAlertsDt;
