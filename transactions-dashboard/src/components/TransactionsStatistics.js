import React from "react";

const TransactionsStatistics = ({ stats, selectedMonth }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Statistics - {selectedMonth}</h2>
      <p>Total Sale: {stats.totalSale}</p>
      <p>Total Sold Items: {stats.soldItems}</p>
      <p>Total Not Sold Items: {stats.notSoldItems}</p>
    </div>
  );
};

export default TransactionsStatistics;
