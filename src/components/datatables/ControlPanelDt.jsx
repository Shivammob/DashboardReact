import React, { useState } from "react";
import { Table, Input, InputGroup, IconButton, Pagination } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import StatusCell from "./StatusCell";
import ActionsCell from "./ActionsCell";
import { controlPanelUser } from "@/components/db";
import useDatatableSort from "@/components/hooks/useDatatableSort";

const { Column, HeaderCell, Cell } = Table;

function ControlPanelDt() {
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
  } = useDatatableSort(controlPanelUser, itemsPerPage);

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

        <Column flexGrow={1} minWidth={150}>
          <HeaderCell>Status</HeaderCell>
          <StatusCell dataKey="status" />
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
        total={controlPanelUser.length}
        limit={itemsPerPage}
        activePage={currentPage}
        onChangePage={setCurrentPage}
      />
    </div>
  );
}

export default ControlPanelDt;
