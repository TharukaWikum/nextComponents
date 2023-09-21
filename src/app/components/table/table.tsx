

// table.tsx
import React, { useState } from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import CustomPagination from './Pagination'; // Import custom pagination component

// Define a type constraint for the 'T' type parameter
type AnyObject = Record<string, any>;

interface ReusableTableProps<T extends AnyObject> {
  data: T[];
  columns: ColumnProps<T>[];
  pageSize?: number;
  pgVariant?: string;
}

function ReusableTable<T extends AnyObject>(props: ReusableTableProps<T>) {
  const { data, columns, pgVariant, pageSize = 10 } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const total = data.length; // Calculate the total based on dataSource

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    // You can perform any other actions related to pagination here
  };

  const pageData = data
    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
    .map((item) => ({
      ...item,
      key: item.id, // Assuming 'id' is a unique identifier for each item
    }));

  const paginationConfig = {
    pageSize,
    total,
    current: currentPage,
    onChange: onPageChange,
  };

  return (
    <>
      <Table<T> dataSource={pageData} columns={columns} pagination={false} />
      <CustomPagination {...paginationConfig} pgVariant={pgVariant} />
    </>
  );
}

export default ReusableTable;


