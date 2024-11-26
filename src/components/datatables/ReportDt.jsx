import React, { useState } from "react";
import { Table, Input, InputGroup, IconButton, Pagination } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { reportOverview } from "../db";
import useDatatableSort from "@/components/hooks/useDatatableSort";

const { Column, HeaderCell, Cell } = Table;

function ReportDt() {
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
  } = useDatatableSort(reportOverview, itemsPerPage);

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
        <Column flexGrow={1} minWidth={180} align="" sortable>
          <HeaderCell>Campaign Domain</HeaderCell>
          <Cell dataKey="campaignDomain" verticalAlign="middle"/>
        </Column>

        <Column flexGrow={1} minWidth={180} sortable>
          <HeaderCell>Total Sessions</HeaderCell>
          <Cell dataKey="totalSessions" verticalAlign="middle"/>
        </Column>

        <Column flexGrow={1} minWidth={180} sortable>
          <HeaderCell>Mobile Sessions</HeaderCell>
          <Cell dataKey="mobileSessions" verticalAlign="middle"/>
        </Column>

        <Column flexGrow={1} minWidth={180}>
          <HeaderCell>Desktop Sessions</HeaderCell>
          <Cell dataKey="desktopSessions" verticalAlign="middle"/>
        </Column>

        <Column flexGrow={1} minWidth={180}>
          <HeaderCell>Desktop Sessions</HeaderCell>
          <Cell dataKey="desktopSession" verticalAlign="middle"/>
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
        total={reportOverview.length}
        limit={itemsPerPage}
        activePage={currentPage}
        onChangePage={setCurrentPage}
      />
    </div>
  );
}

export default ReportDt;
