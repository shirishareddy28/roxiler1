import React, { useState, useEffect } from "react";
import axios from "axios";
import TransactionsTable from "./components/TransactionsTable";
import TransactionsStatistics from "./components/TransactionsStatistics";
import TransactionsChart from "./components/TransactionsChart";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [stats, setStats] = useState({});
  const [chartData, setChartData] = useState({});
  const itemsPerPage = 10;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const apiUrl = "https://s3.amazonaws.com/roxiler.com/product_transaction.json";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const monthIndex = months.indexOf(selectedMonth) + 1;
    const filtered = transactions.filter((transaction) => {
      const transactionMonth = new Date(transaction.date).getMonth() + 1;
      return (
        transactionMonth === monthIndex &&
        (searchText === "" ||
          transaction.title.toLowerCase().includes(searchText.toLowerCase()) ||
          transaction.description
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          transaction.price.toString().includes(searchText))
      );
    });

    setFilteredTransactions(
      filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    );

    const totalSale = filtered.reduce((sum, t) => sum + t.price, 0);
    const soldItems = filtered.filter((t) => t.sold).length;
    const notSoldItems = filtered.length - soldItems;

    setStats({ totalSale, soldItems, notSoldItems });

    const priceRanges = { "0-50": 0, "51-100": 0, "101-200": 0, "201+": 0 };
    filtered.forEach((t) => {
      if (t.price <= 50) priceRanges["0-50"]++;
      else if (t.price <= 100) priceRanges["51-100"]++;
      else if (t.price <= 200) priceRanges["101-200"]++;
      else priceRanges["201+"]++;
    });

    setChartData({
      labels: Object.keys(priceRanges),
      datasets: [
        {
          label: "Number of Items",
          data: Object.values(priceRanges),
          backgroundColor: ["#4CAF50", "#FF9800", "#2196F3", "#F44336"],
        },
      ],
    });
  }, [transactions, selectedMonth, searchText, page]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Transaction Dashboard</h1>
      <TransactionsTable
        transactions={filteredTransactions}
        months={months}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        searchText={searchText}
        setSearchText={setSearchText}
        page={page}
        setPage={setPage}
        itemsPerPage={itemsPerPage}
      />
      <TransactionsStatistics stats={stats} selectedMonth={selectedMonth} />
      <TransactionsChart chartData={chartData} />
    </div>
  );
};

export default App;

