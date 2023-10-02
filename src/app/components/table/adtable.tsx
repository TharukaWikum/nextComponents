


import React, { useState } from 'react';
import { Table, Tag } from 'antd'; // Import Tag component
import { ColumnProps } from 'antd/lib/table';
import CustomPagination from './Pagination';
import './adtable.css';


// Define a type constraint for the 'T' type parameter
type AnyObject = Record<string, any>;

interface ReusableAdTableProps<T extends AnyObject> {
  data: T[];
  columns: ColumnProps<T>[];
  pageSize?: number;
  pgVariant?: string;
  onSelectRow?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void;
  columnTags?: Record<string, boolean>; // New prop for specifying column tags
}

function ReusableAdTable<T extends AnyObject>(props: ReusableAdTableProps<T>) {
  const { data, columns, pgVariant, pageSize = 10, onSelectRow ,columnTags } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const total = data.length; // Calculate the total based on dataSource

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    // You can perform any other actions related to pagination here
  };

  const handleRowSelectionChange = (selectedRowKeys: React.Key[], selectedRows: T[]) => {
    setSelectedRowKeys(selectedRowKeys);
    setSelectedRows(selectedRows);
    if (onSelectRow) {
      onSelectRow(selectedRowKeys, selectedRows);
    }
  };

  const pageData = data
  .slice((currentPage - 1) * pageSize, currentPage * pageSize)
  .map((item) => {
    const modifiedItem: any = { ...item, key: item.id };
    for (const column of columns) {
      const dataIndex = column.dataIndex as keyof T;
      if (columnTags?.[column.key as string]) {
        modifiedItem[dataIndex] = (
          <Tag className='label'>{item[dataIndex]}</Tag>
        );
      }
    }
    return modifiedItem as T;
  });

  const rowSelection = {
    selectedRowKeys,
    onChange: handleRowSelectionChange,
  };

  const paginationConfig = {
    pageSize,
    total,
    current: currentPage,
    onChange: onPageChange,
  };

  // Define a function to determine row class based on selection
  const getRowClassName = (record: T) => {
    if (selectedRowKeys.includes(record.key)) {
      return 'selected-row';
    }
    return '';
  };

  // Define the handleRowClick function
  const handleRowClick = (record: T) => {
    // Implement your logic for row click here
    console.log('Row clicked:', record);
  };

  return (
    <>
     <Table<T>
  dataSource={pageData}
  columns={columns}
  pagination={false}
  rowSelection={rowSelection}
  rowClassName={(record) => (selectedRowKeys.includes(record.key) ? 'selected-row' : '')}
  onRow={(record) => ({
    onClick: () => handleRowClick(record),
  })}
/>
      <div className="pagination-container">
        <CustomPagination {...paginationConfig} pgVariant={pgVariant} />
      </div>
    </>
  );
}

export default ReusableAdTable;
