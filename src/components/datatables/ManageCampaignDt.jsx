import React from "react";
import { Table, Input, InputGroup, IconButton, Pagination } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { manageCampaign } from "@/components/db";
import useDatatableSort from "@/components/hooks/useDatatableSort";

const { Column, HeaderCell, Cell } = Table;

function ManageCampaignDt() {
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
  } = useDatatableSort(manageCampaign, itemsPerPage);

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
        height={400}>
        <Column flexGrow={1} minWidth={150} sortable>
          <HeaderCell>Account Name</HeaderCell>
          <Cell dataKey="accountName" verticalAlign="middle" />
        </Column>

        <Column flexGrow={1} minWidth={150} sortable>
          <HeaderCell>Campaign ID</HeaderCell>
          <Cell dataKey="campaignID" verticalAlign="middle" />
        </Column>

        <Column flexGrow={1} minWidth={300} sortable>
          <HeaderCell>Campaign Name</HeaderCell>
          <Cell dataKey="campaignName" verticalAlign="middle" />
        </Column>

        <Column minWidth={100}>
          <HeaderCell>Actions</HeaderCell>
          <Cell dataKey="actions" verticalAlign="middle">
          <a href="#" onClick={(e) => e.preventDefault()} className=""> Edit</a>
          </Cell>
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
        total={manageCampaign.length}
        limit={itemsPerPage}
        activePage={currentPage}
        onChangePage={setCurrentPage}
      />
    </div>
  );
}

export default ManageCampaignDt;
