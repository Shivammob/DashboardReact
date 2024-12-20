import { useState, useMemo } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

function useDatatableSort(data, itemsPerPage = 10) {
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

  // Export to CSV
  const exportToCSV = (filename = "table.csv") => {
    const csvContent = [
      Object.keys(data[0]).join(","), // Header row
      ...sortedData.map((row) =>
        Object.values(row)
          .map((value) => `"${String(value).replace(/"/g, '""')}"`)
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export to PDF
  const exportToPDF = (filename = "table.pdf") => {
    const doc = new jsPDF();
    const columns = Object.keys(data[0]);
    const rows = sortedData.map((row) => Object.values(row));

    doc.autoTable({ head: [columns], body: rows });
    doc.save(filename);
  };

  // Print Table
  const printTable = () => {
    const printContent = document.createElement("div");
    const tableHtml = `
      <table border="1" style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr>
            ${Object.keys(data[0])
              .map((key) => `<th>${key}</th>`)
              .join("")}
          </tr>
        </thead>
        <tbody>
          ${sortedData
            .map(
              (row) =>
                `<tr>${Object.values(row)
                  .map((value) => `<td>${value}</td>`)
                  .join("")}</tr>`
            )
            .join("")}
        </tbody>
      </table>
    `;
    printContent.innerHTML = tableHtml;

    const newWindow = window.open("", "Print", "width=800,height=600");
    newWindow.document.body.appendChild(printContent);
    newWindow.document.close();
    newWindow.print();
    // newWindow.close();
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
    exportToCSV,
    exportToPDF,
    printTable,
  };
}

export default useDatatableSort;
