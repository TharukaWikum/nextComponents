
"use client";
import React from "react";
import ReusableTable from "../components/table/adtable";
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

  const columnTags = {
    id:true,
    name: true, // Render "Name" column as a Tag
    // Add more columns and their tag rendering flags as needed
  };

  return (
    <div>
      <ReusableTable
        data={data}
        columns={columns}
        pageSize={pageSize}
        pgVariant='pgv4'
        onSelectRow={(selectedRow) => {
          console.log('Selected Row:', selectedRow);
        }}
        columnTags={columnTags} // Pass the columnTags prop
      />
    </div>
  );
}

export default Page;
