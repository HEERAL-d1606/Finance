import { useEffect, useState } from 'react';
import Header from '../components/Header';
import CompanyComparison from '../components/CompanyComparison';
import Table from '../components/Table';
import Graphs from '../components/Graphs';
import ExportWorkflow from '../components/ExportWorkflow';

type Props = {
  onExport: (exportData: any) => void;
};

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
      <main className="main-content">
        <section className="comparison-section">
          <CompanyComparison companies={companies} onCompare={handleCompare} />
        </section>
        {/* <section className="table-section">
          <Table data={selectedCompanies} />
        </section> */}
        <section className="graphs-section">
          <Graphs selectedCompanies={selectedCompanies} />
        </section>
        <section className="export-section">
          <ExportWorkflow onExport={handleExport} data={selectedCompanies} />
        </section>
      </main>
    </div>
  );
};

export default IndexPage;
