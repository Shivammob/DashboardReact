import React from "react";
import { Table, Input, InputGroup, IconButton, Pagination } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { adAccountManagement } from "@/components/db";
import useDatatableSort from "@/components/hooks/useDatatableSort";
import users from "@/assets/images/users.svg";
import manageCampaign from "@/assets/images/manage_campaign.svg";
import DatatableExportBtn from "./DatatableExportBtn";

const { Column, HeaderCell, Cell } = Table;

function AdAccountManagementDt() {
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
  } = useDatatableSort(adAccountManagement, itemsPerPage);

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
          rowHeight={60}
          data={paginatedData}
          sortColumn={sortColumn}
          sortType={sortType}
          onSortColumn={handleSortColumn}
          className="table stripe table-hover text-nowrap cst-table"
          height={400}
        >
          <Column flexGrow={1} minWidth={150} sortable>
            <HeaderCell>Platform</HeaderCell>
            <Cell dataKey="platform" verticalAlign="middle" />
          </Column>

          <Column flexGrow={1} minWidth={150} sortable>
            <HeaderCell>Ad Account Name</HeaderCell>
            <Cell dataKey="adAccountName" verticalAlign="middle" />
          </Column>

          <Column flexGrow={1} minWidth={300} sortable>
            <HeaderCell>Users Name</HeaderCell>
            <Cell dataKey="usersName" verticalAlign="middle" />
          </Column>

          <Column flexGrow={1} minWidth={400}>
            <HeaderCell>Actions</HeaderCell>
            <Cell dataKey="actions" verticalAlign="middle">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="btn assignbtn me-2"
              >
                <img src={users} alt="assign user" className="img-fluid me-1" />{" "}
                Assign User
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="btn assignbtn"
              >
                <img
                  src={manageCampaign}
                  alt="manage campaign"
                  className="img-fluid me-1"
                />{" "}
                Manage Campaign
              </a>
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
          total={adAccountManagement.length}
          limit={itemsPerPage}
          activePage={currentPage}
          onChangePage={setCurrentPage}
        />
      </div>
    </>
  );
}

export default AdAccountManagementDt;
