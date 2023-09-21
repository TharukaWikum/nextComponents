
"use client";
import React from "react";
import ReusableTable from "../components/table/table";
import data from "./data"; // Import your data source

function Page() {
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

  const pageSize = 10; // Specify your desired page size

  return (
    <div>
      <ReusableTable
        data={data}
        columns={columns}
        pageSize={pageSize}
        pgVariant='pgv4'
      />
    </div>
  );
}

export default Page;
