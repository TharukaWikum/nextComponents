// import React from 'react';
// import { Pagination } from 'antd';
// import './CustomPagination.css'; // Import your custom CSS for styling

// interface CustomPaginationProps {
//   total: number;
//   pageSize: number;
//   onChange: (page: number, pageSize: number) => void;
// }

// const CustomPagination: React.FC<CustomPaginationProps> = ({ total, pageSize, onChange }) => {
//   return (
//     <Pagination
//       total={total}
//       pageSize={pageSize}
//       onChange={onChange}
//       showSizeChanger={false}
//       showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
//       className="custom-pagination" // Apply a class for custom styling
//     />
//   );
// };

// export default CustomPagination;


// CustomPaginationV2.tsx
// import React from 'react';
// import { Pagination } from 'antd';
// import './CustomPagination.css'; // Import your custom CSS for styling

// interface CustomPaginationProps {
//   total: number;
//   pageSize: number;
//   onChange: (page: number, pageSize: number) => void;
//   pgVariant?: String |'pgv1'|'pgv2'|'pgv3'; // Add variant prop
// }



// const CustomPagination: React.FC<CustomPaginationProps> = ({
//   total,
//   pageSize,
//   onChange,
//   pgVariant = 'pgv1', // Default to pgv1 if variant is not provided
// }) => {
//   // Determine the class name based on the selected variant
//   const className = `custom-pagination ${pgVariant}`;

  

//   return (
//     <Pagination
//     responsive={true}
    
//       total={total}
//       pageSize={pageSize}
//       onChange={onChange}
//       showSizeChanger={false}
//       showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
//       className={className} // Apply the class for custom styling
//     />
//   );
// };

// export default CustomPagination;



import React from 'react';
import { Pagination } from 'antd';
import './CustomPagination.css'; // Import your custom CSS for styling

interface CustomPaginationProps {
  total: number;
  pageSize: number;
  onChange: (page: number, pageSize: number) => void;
  pgVariant?: String | 'pgv1' | 'pgv2' | 'pgv3' | 'pgv4'; // Add variant prop
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  total,
  pageSize,
  onChange,
  pgVariant = 'pgv1', // Default to pgv1 if variant is not provided
}) => {
  // Determine the class name based on the selected variant
  const className = `custom-pagination ${pgVariant}`;

  // Define a custom render function for pgVariant === 'pgv5'
  const customRender = (
    page: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    originalElement: React.ReactNode
  ) => {
    if (pgVariant === 'pgv4') {
      if (type === 'prev') {
        return <span className="custom-prev">Prev</span>;
      } else if (type === 'next') {
        return <span className="custom-next">Next</span>;
      }
    }
  
    // For other types (page, jump-prev, jump-next), return the original element
    return originalElement;
  };

  return (
    <Pagination
      total={total}
      pageSize={pageSize}
      onChange={onChange}
      showSizeChanger={false}
    //   showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      className={className} // Apply the class for custom styling
      itemRender={customRender} // Apply the custom render function
    />
  );
};

export default CustomPagination;






















