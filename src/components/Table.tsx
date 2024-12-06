import React from "react";

type CompanyData = {
  companyName: string;
  totalShares: number;
  revenue: string;
  ebitda: string;
  pat: string;
  liabilities: string;
  promotersHoldings: string;
  lastUpdated: string;
};

type Props = {
  data: CompanyData[];
};

const Table: React.FC<Props> = ({ data }) => {
  if (data.length === 0)
    return <p className="text-center text-gray-600">No data to display</p>;

  return (
    <section className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">
        Financial Data Comparison
      </h2>

      {/* Table Wrapper with horizontal scroll */}
      <div className="table-container overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="thead bg-blue-600 text-white">
            <tr>
              {[
                "Company Name",
                "Total Shares",
                "Revenue",
                "EBITDA",
                "PAT",
                "Liabilities",
                "Promoter Holdings",
                "Last Updated",
              ].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-sm bg-blue-950 font-medium"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((company, index) => (
              <tr
                key={index}
                className={`hover:bg-blue-50 transition duration-200 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-800">
                  {company.companyName}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {company.totalShares}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {company.revenue}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {company.ebitda}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {company.pat}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {company.liabilities}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {company.promotersHoldings}
                </td>
                <td className="px-6 py-4 text-sm text-center text-gray-600">
                  {company.lastUpdated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
