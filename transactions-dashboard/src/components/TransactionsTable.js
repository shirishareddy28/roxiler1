import React from "react";

const TransactionsTable = ({
  transactions,
  months,
  selectedMonth,
  setSelectedMonth,
  searchText,
  setSearchText,
  page,
  setPage,
  itemsPerPage,
}) => {
  return (
    <div>
      {/* Month Dropdown */}
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search transaction"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      {/* Transactions Table */}
      <table border="1" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.price}</td>
              <td>{transaction.category}</td>
              <td>{transaction.sold ? "Yes" : "No"}</td>
              <td>
                <img
                  src={transaction.image}
                  alt={transaction.title}
                  width="50"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ marginTop: "10px" }}>
        <button
          disabled={page === 1}
          onClick={() => setPage((prevPage) => prevPage - 1)}
        >
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>Page {page}</span>
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionsTable;
