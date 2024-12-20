import React from 'react'

function DatatableExportBtn({exportToCSV, exportToPDF, printTable}) {
   
  return (
    <div className='d-flex flex-wrap'>
        <button className='btn btn-secondary me-3 mb-3' onClick={exportToCSV}>Export CSV</button>
        <button className='btn btn-secondary me-3 mb-3' onClick={exportToPDF}>Export PDF</button>
        <button className='btn btn-secondary me-3 mb-3' onClick={printTable}>Print</button>
    </div>
  )
}

export default DatatableExportBtn