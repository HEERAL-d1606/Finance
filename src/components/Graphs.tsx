import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
// import './graphs.css'; // Import the CSS file

// Register the necessary chart components with Chart.js
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface Company {
  companyName: string;
  revenue: string;
  ebitda: string;
}

interface GraphsProps {
  selectedCompanies: Company[];
}

const Graphs: React.FC<GraphsProps> = ({ selectedCompanies }) => {
  if (!selectedCompanies || selectedCompanies.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-4">
        No companies are selected. Please select one or more companies to compare the data.
      </div>
    );
  }

  // Prepare data for charts
  const chartData = {
    labels: selectedCompanies.map((company) => company.companyName),
    datasets: [
      {
        label: "Revenue",
        data: selectedCompanies.map((company) =>
          parseFloat(company.revenue.replace("$", "").replace("M", ""))
        ),
        borderColor: "#4e79a7",
        backgroundColor: "rgba(78, 121, 167, 0.5)",
        fill: true,
      },
      {
        label: "EBITDA",
        data: selectedCompanies.map((company) =>
          parseFloat(company.ebitda.replace("$", "").replace("M", ""))
        ),
        borderColor: "#f28e2b",
        backgroundColor: "rgba(242, 142, 43, 0.5)",
        fill: true,
      },
    ],
  };

  const pieChartData = {
    labels: selectedCompanies.map((company) => company.companyName),
    datasets: [
      {
        data: selectedCompanies.map((company) =>
          parseFloat(company.revenue.replace("$", "").replace("M", ""))
        ),
        backgroundColor: ["#4e79a7", "#f28e2b", "#e15759", "#76b7b2"],
      },
    ],
  };

  const doughnutChartData = {
    labels: selectedCompanies.map((company) => company.companyName),
    datasets: [
      {
        data: selectedCompanies.map((company) =>
          parseFloat(company.ebitda.replace("$", "").replace("M", ""))
        ),
        backgroundColor: ["#4e79a7", "#f28e2b", "#e15759", "#76b7b2"],
      },
    ],
  };

  return (
    <div className="maincontainer">
    <section className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">
        Company Financial Data Comparison
      </h2>
      <div className="chart-container">
        <div className="chart-item">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Revenue vs EBITDA (Bar Chart)
          </h3>
          <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
        <div className="chart-item">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Revenue vs EBITDA (Line Chart)
          </h3>
          <Line data={chartData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
        <div className="chart-item">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Revenue Distribution (Pie Chart)
          </h3>
          <Pie data={pieChartData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
        <div className="chart-item">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            EBITDA Distribution (Doughnut Chart)
          </h3>
          <Doughnut data={doughnutChartData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
      </div>
    </section>
    </div>
  );
};

export default Graphs;
