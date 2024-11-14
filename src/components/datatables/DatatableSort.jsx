import { useState, useMemo } from "react";

function DatatableSort(data, itemsPerPage = 10) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortType, setSortType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  

  // Searching
  const filteredData = useMemo(() => {
    if (!searchKeyword) return data;
    return data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchKeyword.toLowerCase())
      )
    );
  }, [data, searchKeyword]);
  

  // Sorting
  const sortedData = useMemo(() => {
    if (!sortColumn || !sortType) return filteredData;
    return [...filteredData].sort((a, b) => {
      const valueA = a[sortColumn];
      const valueB = b[sortColumn];
      if (valueA > valueB) return sortType === "asc" ? 1 : -1;
      if (valueA < valueB) return sortType === "asc" ? -1 : 1;
      return 0;
    });
  }, [filteredData, sortColumn, sortType]);

  // Pagination
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedData.slice(start, end);
  }, [sortedData, currentPage, itemsPerPage]);

  // Handlers
  const handleSearch = (value) => {
    // console.log(value)
    setSearchKeyword(value);
    setCurrentPage(1); // Reset to first page after a new search
  };

  const handleSortColumn = (column, type) => {
    setSortColumn(column);
    setSortType(type);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return {
    paginatedData,
    currentPage,
    setCurrentPage: handlePageChange,
    handleSearch,
    handleSortColumn,
    searchKeyword,
    sortColumn,
    sortType,
    totalItems: filteredData.length,
  };
}

export default DatatableSort;
