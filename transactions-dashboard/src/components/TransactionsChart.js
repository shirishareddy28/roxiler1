import React from "react";
import { Bar } from "react-chartjs-2";

const TransactionsChart = ({ chartData }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Transactions Bar Chart</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default TransactionsChart;
