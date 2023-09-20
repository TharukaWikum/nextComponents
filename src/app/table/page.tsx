"use client";
import React, { useState } from "react";
import ReusableTable from "../components/table/table";
import data from "./data"; // Import your data source

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalItems = data.length; // for pagination

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // You can perform any other actions related to pagination here
  };

  // Define the columns for your table
  const columns = [
    {
      title: "ID",
      dataIndex: "id", // This should match the key in your data
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name", // This should match the key in your data
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description", // This should match the key in your data
      key: "description",
    },
    // Add more columns as needed
  ];

  return (
    <div>
      <ReusableTable
        dataSource={data
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((item) => ({
            ...item,
            key: item.id, // Assuming 'id' is a unique identifier for each item
          }))}
        columns={columns}
        total={totalItems}
        pageSize={pageSize}
        pgVariant='pgv4'
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
