// "use client"
import React from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import CustomPagination from './Pagination'; // Import your custom pagination component

// Define a type constraint for the 'T' type parameter
type AnyObject = Record<string, any>;

interface ReusableTableProps<T extends AnyObject> {
  dataSource: T[];
  columns: ColumnProps<T>[];
  total: number; // Add total prop for total items
  pageSize?: number;
  pgVariant?: string;
  onPageChange: (page: number, pageSize: number) => void; // Make onPageChange a required property
}

function ReusableTable<T extends AnyObject>(props: ReusableTableProps<T>) {
  const { dataSource, columns, total, pgVariant, pageSize = 10, onPageChange } = props;

  const paginationConfig = {
    pageSize,
    total,
    onChange: onPageChange,
  };

  return (
    <>
      <Table<T> dataSource={dataSource} columns={columns} pagination={false} />
      <CustomPagination {...paginationConfig} pgVariant={pgVariant} />
    </>
  );
}

export default ReusableTable;
