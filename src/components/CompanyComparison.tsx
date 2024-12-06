import React, { useState } from 'react';

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

  const handleCheckboxChange = (id: string) => {
    const updatedIds = selectedIds.includes(id)
      ? selectedIds.filter((item) => item !== id)
      : [...selectedIds, id];
    setSelectedIds(updatedIds);
    onCompare(updatedIds);
  };

  return (
    <section className="p-4">
      <h2 className="component-header">Select Companies for Comparison</h2>

      <div className="flex">
        {/* Card for Company Comparison */}
        <div className="card">
          {/* <h3 className="card-title">Company Comparison</h3> */}
          <div className="company-checkbox-group">
            {companies.map((company) => (
              <div key={company.id} className="company-checkbox">
                <input
                  type="checkbox"
                  id={company.id}
                  onChange={() => handleCheckboxChange(company.id)}
                />
                <label htmlFor={company.id}>{company.companyName}</label>
              </div>
            ))}
          </div>
        </div>
 </div>
    </section>
  );
};

export default CompanyComparison;
