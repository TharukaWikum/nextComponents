

// import React, { useState } from 'react';
// import { Table, Tag } from 'antd'; // Import Tag component
// import { ColumnProps } from 'antd/lib/table';
// import CustomPagination from './Pagination';
// import './adtable.css';
// import { Avatar} from 'antd';

// // Define a type constraint for the 'T' type parameter
// type AnyObject = Record<string, any>;

// interface ReusableAdTableProps<T extends AnyObject> {
//   data: T[];
//   columns: ColumnProps<T>[];
//   pageSize?: number;
//   pgVariant?: string;
//   onSelectRow?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void;
//   columnTags?: Record<string, boolean>; // Prop for specifying column tags
//   iconColumns?: Record<string, React.ReactNode>; // Prop for specifying column icons
// }


// function ReusableAdTable<T extends AnyObject>(props: ReusableAdTableProps<T>) {
//   const { data, columns, pgVariant, pageSize = 10, onSelectRow ,columnTags, iconColumns, } = props;

//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
//   const [selectedRows, setSelectedRows] = useState<T[]>([]);

//   const total = data.length; // Calculate the total based on dataSource

//   const onPageChange = (page: number) => {
//     setCurrentPage(page);
//     // You can perform any other actions related to pagination here
//   };

//   const handleRowSelectionChange = (selectedRowKeys: React.Key[], selectedRows: T[]) => {
//     setSelectedRowKeys(selectedRowKeys);
//     setSelectedRows(selectedRows);
//     if (onSelectRow) {
//       onSelectRow(selectedRowKeys, selectedRows);
//     }
//   };

//   const pageData = data
//   .slice((currentPage - 1) * pageSize, currentPage * pageSize)
//   .map((item) => {
//     const modifiedItem: any = { ...item, key: item.id };
//     for (const column of columns) {
//       const dataIndex = column.dataIndex as keyof T;
//       if (columnTags?.[column.key as string]) {
//         modifiedItem[dataIndex] = (
//           <Tag className='label'>{item[dataIndex]}</Tag>
//         );
//       }
//       if (iconColumns && iconColumns[column.key as string]) {
//         // Check if the current column has an associated icon
//         modifiedItem[dataIndex] = (
//           <>
//             <Avatar className='avatar' icon={iconColumns[column.key as string]} /> {item[dataIndex]}
//           </>
//         );
//       }
//     }
//     return modifiedItem as T;
//   });


//   const rowSelection = {
//     selectedRowKeys,
//     onChange: handleRowSelectionChange,
//   };

//   const paginationConfig = {
//     pageSize,
//     total,
//     current: currentPage,
//     onChange: onPageChange,
//   };

//   // Define a function to determine row class based on selection
//   const getRowClassName = (record: T) => {
//     if (selectedRowKeys.includes(record.key)) {
//       return 'selected-row';
//     }
//     return '';
//   };

//   // Define the handleRowClick function
//   const handleRowClick = (record: T) => {
//     // Implement your logic for row click here
//     console.log('Row clicked:', record);
//   };

//   return (
//     <>
//      <Table<T>
//   dataSource={pageData}
//   columns={columns}
//   pagination={false}
//   rowSelection={rowSelection}
//   rowClassName={(record) => (selectedRowKeys.includes(record.key) ? 'selected-row' : '')}
//   onRow={(record) => ({
//     onClick: () => handleRowClick(record),
//   })}
// />
//       <div className="pagination-container">
//         <CustomPagination {...paginationConfig} pgVariant={pgVariant} />
//       </div>
//     </>
//   );
// }

// export default ReusableAdTable;











import React, { useState } from 'react';
import { Table, Tag, Avatar } from 'antd'; // Import Tag component
import { ColumnProps } from 'antd/lib/table';
import CustomPagination from './Pagination';
import './adtable.css';
import { EditFilled } from "@ant-design/icons";

// Define a type constraint for the 'T' type parameter
type AnyObject = Record<string, any>;

interface ReusableAdTableProps<T extends AnyObject> {
  data: T[];
  columns: ColumnProps<T>[];
  pageSize?: number;
  pgVariant?: string;
  onSelectRow?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void;
  columnTags?: Record<string, boolean>; // Prop for specifying column tags
  iconColumns?: Record<string, React.ReactNode>; // Prop for specifying column icons
}


function ReusableAdTable<T extends AnyObject>(props: ReusableAdTableProps<T>) {
  const { data, columns, pgVariant, pageSize = 10, onSelectRow ,columnTags, iconColumns, } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [checkedRowKeys, setCheckedRowKeys] = useState<React.Key[]>([]);

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
      if (iconColumns && iconColumns[column.key as string]) {
        // Check if the current column has an associated icon
        modifiedItem[dataIndex] = (
          <>
            <Avatar className='avatar' icon={iconColumns[column.key as string]} /> {item[dataIndex]}
          </>
        );
      }
    }
    return modifiedItem as T;
  });








  const editColumn: ColumnProps<T> = {
    title: " ",
    dataIndex: "edit",
    key: "edit",
    render: (text, record) => (
      <EditFilled onClick={() => handleEditClick(record)} className="edit-icon" />
    ),
  };


  const handleEditClick = (record: T) => {
    // Implement your logic for the edit button click here
    console.log('Edit clicked for record:', record);
  };


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
  const onRowClick = (record: T) => {
    const recordKey = record.key;
    const updatedSelectedRowKeys = selectedRowKeys.includes(recordKey)
      ? selectedRowKeys.filter((key) => key !== recordKey)
      : [...selectedRowKeys, recordKey];
    const updatedCheckedRowKeys = checkedRowKeys.includes(recordKey)
      ? checkedRowKeys.filter((key) => key !== recordKey)
      : [...checkedRowKeys, recordKey];
    setSelectedRowKeys(updatedSelectedRowKeys);
    setCheckedRowKeys(updatedCheckedRowKeys);
  };


  const updatedColumns = [...columns, editColumn];

  const handleRowClick = (record: T) => {
    // Implement your logic for row click here
    console.log('Row clicked:', record);
  };


  return (
    <>
     <Table<T>
  dataSource={pageData}
  columns={updatedColumns}
  pagination={false}
  rowSelection={rowSelection}
  rowClassName={(record) => (selectedRowKeys.includes(record.key) ? 'selected-row' : '')}
  onRow={(record) => ({
    onClick: () => {
      handleRowClick(record);
      onRowClick(record);
    },
  })}
/>
      <div className="pagination-container">
        <CustomPagination {...paginationConfig} pgVariant={pgVariant} />
      </div>
    </>
  );
}

export default ReusableAdTable;

































