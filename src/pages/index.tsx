// pages/index.tsx
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import CompanyComparison from '../components/CompanyComparison';
import Table from '../components/Table';
import Graphs from '../components/Graphs';
import ExportWorkflow from '../components/ExportWorkflow';

const IndexPage: React.FC = () => {
  const [companies, setCompanies] = useState<any[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/financialData')
      .then((response) => response.json())
      .then((data) => setCompanies(data));
  }, []);

  const handleCompare = (selectedIds: string[]) => {
    setSelectedCompanies(companies.filter((company) => selectedIds.includes(company.id)));
  };

  const handleExport = (exportData: any) => {
    console.log('Exporting data:', exportData);
  };

  return (
    <div className="page-container">
      <Header />
      <main>
        <CompanyComparison companies={companies} onCompare={handleCompare} />
        <Table data={selectedCompanies} />
        <Graphs selectedCompanies={selectedCompanies} />
        <ExportWorkflow onExport={handleExport} data={selectedCompanies} />
      </main>
    </div>
  );
};

export default IndexPage;
