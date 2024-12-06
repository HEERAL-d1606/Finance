import React, { useState } from 'react';
import * as XLSX from 'xlsx';  // Library for exporting to Excel
import jsPDF from 'jspdf';      // Library for exporting to PDF

type Props = {
//   onExport: (exportData: any) => void;
  data: any[];  // Added prop to pass the selected data
};

const ExportWorkflow: React.FC<Props> = ({  data }) => {
  const [name, setName] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [reason, setReason] = useState('');
//   const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

  const handleExport = (format: 'excel' | 'pdf') => {
    if (format === 'excel') {
      const ws = XLSX.utils.json_to_sheet(data); // Convert the data to Excel format
      const wb = XLSX.utils.book_new(); // Create a new workbook
      XLSX.utils.book_append_sheet(wb, ws, 'Financial Data'); // Append the sheet to the workbook
      XLSX.writeFile(wb, 'financial_data.xlsx'); // Download the Excel file
    } else if (format === 'pdf') {
      const doc = new jsPDF();
      doc.text('Financial Data', 20, 20); // Adding a title

      data.forEach((company, index) => {
        doc.text(`${company.companyName}: Revenue - ${company.revenue}`, 20, 30 + (index * 10)); 
      });

      doc.save('financial_data.pdf'); // Download the PDF file
    }
  };

  return (
    <div className="container">
      <div className="export-card">
        <h3 className="export-card-title">Export Data</h3>
        <form className="export-form">
          <div className="export-input-group">
            <label htmlFor="name" className="export-label">Enter Your Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="export-input"
              placeholder="Enter your name"
            />
          </div>

          <div className="export-input-group">
            <label htmlFor="dateRange" className="export-label">Enter Date Range</label>
            <input
              id="dateRange"
              type="text"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="export-input"
              placeholder="Enter date range"
            />
          </div>

          <div className="export-input-group">
            <label htmlFor="reason" className="export-label">Reason for Export</label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="export-input"
              placeholder="Enter reason"
            />
          </div>

          <div className="export-buttons">
            <button
              type="button"
              onClick={() => handleExport('excel')}
              className="export-button excel-button"
            >
              Export as Excel
            </button>
            <button
              type="button"
              onClick={() => handleExport('pdf')}
              className="export-button pdf-button"
            >
              Export as PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExportWorkflow;
