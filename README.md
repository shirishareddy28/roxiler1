# roxiler1
# Transaction Dashboard

This project is a web application that displays a transaction dashboard with a table, statistics, and a bar chart. The app allows users to search, filter, and paginate transaction data based on a selected month. It also provides insights into total sales, sold items, and unsold items for the selected month.

---

## Features

### 1. **Transactions Table**
- Displays transaction data including ID, title, description, price, category, sold status, and image.
- Allows filtering transactions by:
  - Selected month.
  - Search input matching title, description, or price.
- Supports pagination with Next and Previous buttons.

### 2. **Statistics Section**
- Shows key insights for the selected month:
  - Total sales.
  - Total sold items.
  - Total unsold items.

### 3. **Bar Chart**
- Visualizes the distribution of items across different price ranges for the selected month.

---

## Folder Structure

```
src/
├── components/
│   ├── TransactionsTable.js       # Displays the transaction table.
│   ├── TransactionsStatistics.js  # Shows the statistics.
│   └── TransactionsChart.js       # Renders the bar chart.
├── App.js                         # Main component integrating all others.
├── index.js                       # Entry point for the app.
├── styles.css                     # Application styles.
```

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository_url>
cd <repository_name>
```

### 2. Install Dependencies
Ensure you have Node.js installed. Then, run:
```bash
npm install
```

### 3. Run the Application
Start the development server:
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## API Used

### Data Source
The application fetches transaction data from the following API:
```
https://s3.amazonaws.com/roxiler.com/product_transaction.json
```

---

## Components Breakdown

### **TransactionsTable.js**
- Renders the transaction table.
- Handles month selection, search input, and pagination.

### **TransactionsStatistics.js**
- Displays the total sales, sold items, and unsold items for the selected month.

### **TransactionsChart.js**
- Visualizes the price distribution for the selected month using a bar chart.

### **App.js**
- Serves as the main component integrating all other components.
- Manages the state and handles API calls.

### **styles.css**
- Contains styles for consistent design across the app.

---

## Features in Detail

1. **Month Dropdown**
   - Lists all months from January to December.
   - Defaults to "March".

2. **Search Box**
   - Filters transactions based on title, description, or price.
   - Clears to show the default transaction list for the selected month.

3. **Pagination**
   - Navigates between pages of transaction data.
   - Displays 10 items per page.

4. **Bar Chart**
   - Groups items into price ranges (e.g., 0-50, 51-100, etc.).

5. **Statistics Section**
   - Computes and displays key metrics based on the transaction data.

---

## Libraries Used

- **React.js**: Core framework for building the UI.
- **Axios**: For fetching data from the API.
- **Chart.js**: For rendering the bar chart.
- **react-chartjs-2**: React wrapper for Chart.js.

---

## Future Improvements
- Add year selection for finer filtering.
- Enhance table sorting by columns.
- Add export functionality for transaction data.
- Improve UI/UX with advanced design elements.


#Backend Task

Project Structure

backend-task/
├── models/            # Mongoose schemas
├── routes/            # API routes
├── config/            # Configuration files
├── app.js             # Main application file
├── .env               # Environment variables
├── package.json       # Node.js dependencies
└── README.md          # Documentation


Author

Sirisha B.

GitHub: https://github.com/shirishareddy28/

LinkedIn: https://www.linkedin.com/in/shirisha-reddy-656b28241/

