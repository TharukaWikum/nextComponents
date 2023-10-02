

// // table.tsx
// import React, { useState } from 'react';
// import { Table } from 'antd';
// import { ColumnProps } from 'antd/lib/table';
// import CustomPagination from './Pagination'; // Import custom pagination component

// // Define a type constraint for the 'T' type parameter
// type AnyObject = Record<string, any>;

// interface ReusableTableProps<T extends AnyObject> {
//   data: T[];
//   columns: ColumnProps<T>[];
//   pageSize?: number;
//   pgVariant?: string;
// }

// function ReusableTable<T extends AnyObject>(props: ReusableTableProps<T>) {
//   const { data, columns, pgVariant, pageSize = 10 } = props;

//   const [currentPage, setCurrentPage] = useState(1);

//   const total = data.length; // Calculate the total based on dataSource

//   const onPageChange = (page: number) => {
//     setCurrentPage(page);
//     // You can perform any other actions related to pagination here
//   };

//   const pageData = data
//     .slice((currentPage - 1) * pageSize, currentPage * pageSize)
//     .map((item) => ({
//       ...item,
//       key: item.id, // Assuming 'id' is a unique identifier for each item
//     }));

//   const paginationConfig = {
//     pageSize,
//     total,
//     current: currentPage,
//     onChange: onPageChange,
//   };

//   return (
//     <>
//       <Table<T> dataSource={pageData} columns={columns} pagination={false} />
//       <CustomPagination {...paginationConfig} pgVariant={pgVariant} />
//     </>
//   );
// }

// export default ReusableTable;











// // table.tsx
// import React, { useState } from 'react';
// import { Table } from 'antd';
// import { ColumnProps } from 'antd/lib/table';
// import CustomPagination from './Pagination'; // Import custom pagination component

// // Define a type constraint for the 'T' type parameter
// type AnyObject = Record<string, any>;

// interface ReusableTableProps<T extends AnyObject> {
//   data: T[];
//   columns: ColumnProps<T>[];
//   pageSize?: number;
//   pgVariant?: string;
//   onRowSelect?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void; // Callback for row selection
// }

// function ReusableTable<T extends AnyObject>(props: ReusableTableProps<T>) {
//   const { data, columns, pgVariant, pageSize = 10, onRowSelect } = props;

//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

//   const total = data.length; // Calculate the total based on dataSource

//   const onPageChange = (page: number) => {
//     setCurrentPage(page);
//     // You can perform any other actions related to pagination here
//   };

//   const onSelectChange = (selectedKeys: React.Key[], selectedRows: T[]) => {
//     setSelectedRowKeys(selectedKeys);

//     if (onRowSelect) {
//       onRowSelect(selectedKeys, selectedRows);
//     }
//   };

//   const pageData = data
//     .slice((currentPage - 1) * pageSize, currentPage * pageSize)
//     .map((item) => ({
//       ...item,
//       key: item.id, // Assuming 'id' is a unique identifier for each item
//     }));

//   const rowSelection = {
//     selectedRowKeys,
//     onChange: onSelectChange,
//   };

//   const paginationConfig = {
//     pageSize,
//     total,
//     current: currentPage,
//     onChange: onPageChange,
//   };

//   return (
//     <>
//       <Table<T>
//         dataSource={pageData}
//         columns={columns}
//         pagination={false}
//         rowSelection={rowSelection} // Enable row selection
//       />
//       <CustomPagination {...paginationConfig} pgVariant={pgVariant} />
//     </>
//   );
// }

// export default ReusableTable;








// table.tsx
import React, { useState } from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import CustomPagination from './Pagination'; // Import custom pagination component
import './table.css'; // Import the CSS file

// Define a type constraint for the 'T' type parameter
type AnyObject = Record<string, any>;

interface ReusableTableProps<T extends AnyObject> {
  data: T[];
  columns: ColumnProps<T>[];
  pageSize?: number;
  pgVariant?: string;
  onSelectRow?: (selectedRow: T | null) => void; // Callback for row selection
}

function ReusableTable<T extends AnyObject>(props: ReusableTableProps<T>) {
  const { data, columns, pgVariant, pageSize = 10, onSelectRow } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState<T | null>(null);

  const total = data.length; // Calculate the total based on dataSource

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    // You can perform any other actions related to pagination here
  };

  const handleRowClick = (record: T) => {
    if (selectedRow && selectedRow.key === record.key) {
      // If the same row is clicked again, unselect it
      setSelectedRow(null);
      if (onSelectRow) {
        onSelectRow(null);
      }
    } else {
      // Select a new row
      setSelectedRow(record);
      if (onSelectRow) {
        onSelectRow(record);
      }
    }
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
      <Table<T>
  dataSource={pageData}
  columns={columns}
  pagination={false}
  onRow={(record) => ({
    onClick: () => handleRowClick(record),
    className: selectedRow && selectedRow.key === record.key ? 'selected-row' : '',
  })}
/>
<div className="pagination-container">
        <CustomPagination {...paginationConfig} pgVariant={pgVariant} />
      </div>
    </>
  );
}

export default ReusableTable;


