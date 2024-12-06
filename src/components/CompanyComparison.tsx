import React, { useState } from 'react';
import ExportWorkflow from './ExportWorkflow';  // Import ExportWorkflow component
// import '../styles/components.css'

type Company = {
  id: string;
  companyName: string;
};

type Props = {
  companies: Company[];
  onCompare: (selectedIds: string[]) => void;
};

const CompanyComparison: React.FC<Props> = ({ companies, onCompare }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<any[]>([]);


  const handleCheckboxChange = (id: string) => {
    const updatedIds = selectedIds.includes(id)
      ? selectedIds.filter((item) => item !== id)
      : [...selectedIds, id];
    setSelectedIds(updatedIds);
    onCompare(updatedIds);
  };
  const handleExport = (exportData: any) => {
    console.log('Exporting data:', exportData);
  };

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Select Companies for Comparison</h2>
      
      {/* Flex container for layout */}
      <div className="flex flex-wrap justify-between gap-6">
        {/* Left section for Company Comparison */}
        <div className="w-full sm:w-1/2">
          <div className="card">
            <h3 className="card-title">Company Comparison</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {companies.map((company) => (
                <div key={company.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={company.id}
                    onChange={() => handleCheckboxChange(company.id)}
                    className="mr-2"
                  />
                  <label htmlFor={company.id}>{company.companyName}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right section for Export Workflow */}
       
      </div>
    </section>
  );
};

export default CompanyComparison;
