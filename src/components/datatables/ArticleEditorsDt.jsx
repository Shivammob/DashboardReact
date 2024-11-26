import React, { useState } from "react";
import { Table, Input, InputGroup, IconButton, Pagination } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import ActionsCell from "./ActionsCell";
import { articleEditors } from "@/components/db";
import useDatatableSort from "@/components/hooks/useDatatableSort";

const { Column, HeaderCell, Cell } = Table;

function ArticleEditorsDt({clickHandle}) {
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
  } = useDatatableSort(articleEditors, itemsPerPage);

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
        <Column flexGrow={1} minWidth={50} align="" sortable>
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="id" verticalAlign="middle" />
        </Column>

        <Column flexGrow={1} minWidth={300} sortable style={{display: "block"}}>
          <HeaderCell>Title</HeaderCell>
          <Cell dataKey="title" verticalAlign="middle" />
        </Column>

        <Column flexGrow={1} minWidth={300} sortable style={{display: "block"}}>
          <HeaderCell>Image</HeaderCell>
          <Cell dataKey="image" verticalAlign="middle" />
        </Column>

        <Column flexGrow={1} minWidth={300} style={{display: "block"}}>
          <HeaderCell>Small Description</HeaderCell>
          <Cell dataKey="smallDescription" verticalAlign="middle" />
        </Column>

        <Column flexGrow={1} minWidth={300} style={{display: "block"}}>
          <HeaderCell>Page URL</HeaderCell>
          <Cell dataKey="pageURL" verticalAlign="middle" />
        </Column>

        <Column flexGrow={1} minWidth={120}>
          <HeaderCell>Category Id</HeaderCell>
          <Cell dataKey="categoryId" verticalAlign="middle" />
        </Column>

        <Column flexGrow={1} minWidth={80}>
          <HeaderCell>User Id</HeaderCell>
          <Cell dataKey="userId" />
        </Column>

        <Column flexGrow={1} minWidth={150}>
          <HeaderCell>Publish Date</HeaderCell>
          <Cell dataKey="publishDate" />
        </Column>

        <Column flexGrow={1} minWidth={150}>
          <HeaderCell>Total Comments</HeaderCell>
          <Cell dataKey="totalComments" />
        </Column>

        <Column flexGrow={1} minWidth={150}>
          <HeaderCell>Read Time</HeaderCell>
          <Cell dataKey="readTime" />
        </Column>

        <Column flexGrow={1} minWidth={150}>
          <HeaderCell>Total Views</HeaderCell>
          <Cell dataKey="totalViews" />
        </Column>

        <Column flexGrow={1} minWidth={300} style={{display: "block"}}>
          <HeaderCell>Meta Title</HeaderCell>
          <Cell dataKey="metaTitle" />
        </Column>

        <Column flexGrow={1} minWidth={300} style={{display: "block"}}>
          <HeaderCell>Meta Description</HeaderCell>
          <Cell dataKey="metaDescription" />
        </Column>

        <Column flexGrow={1} minWidth={300} style={{display: "block"}}>
          <HeaderCell>Meta Keywords</HeaderCell>
          <Cell dataKey="metaKeywords" />
        </Column>

        <Column flexGrow={1} minWidth={150}>
          <HeaderCell>Actions</HeaderCell>
          <ActionsCell dataKey="actions" clickHandle={clickHandle} />
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
        total={articleEditors.length}
        limit={itemsPerPage}
        activePage={currentPage}
        onChangePage={setCurrentPage}
      />
    </div>
  );
}

export default ArticleEditorsDt;
