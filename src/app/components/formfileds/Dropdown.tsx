// import React from "react";
// import { Select } from "antd";
// import "./dropdown.css";

// const { Option } = Select;

// interface DropdownOption {
//     value: string;
//     label: string;
//   }

//   interface DropdownProps {
//     label: string;
//     options: DropdownOption[];
//     selectedOption: string | undefined;
//     onSelect: (value: string) => void;
//   }

// const Dropdown: React.FC<DropdownProps> = ({
//   label,
//   options,
//   selectedOption,
//   onSelect,
// }) => {
//   const handleSelectChange = (value: string) => {
//     onSelect(value);
//   };

//   return (
//     <div className="custom-dropdown">
//       <label className="custom-label">{label}</label>
//       <div className="select-container">
//       <Select
//         value={selectedOption}
//         onChange={handleSelectChange}
//         className="custom-select"
//       >
//         {options.map((option) => (
//           <Option key={option.value}  value={option.value}>
//             {option.label}
//           </Option>
//         ))}
//       </Select>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

// import React, { useState } from "react";
// import { Select } from "antd";
// import "./dropdown.css";

// const { Option } = Select;

// interface DropdownOption {
//   value: string;
//   label: string;
// }

// interface DropdownProps {
//   label: string;
//   options: DropdownOption[];
//   selectedOption: string | undefined;
//   onSelect: (value: string) => void;
//   placeholder?:  string;
// }

// const Dropdown: React.FC<DropdownProps> = ({
//   label,
//   options,
//   selectedOption,
//   onSelect,
//   placeholder = "Input text",
// }) => {
//   const [isFocused, setIsFocused] = useState(false);

//   const handleSelectChange = (value: string) => {
//     onSelect(value);
//   };

//   const handleSelectFocus = () => {
//     setIsFocused(true);
//   };

//   const handleSelectBlur = () => {
//     setIsFocused(false);
//   };

//   return (
//     <div className={`custom-dropdown ${isFocused ? "focused" : ""}`}>
//       <label className={`custom-label ${isFocused ? "focused-label" : ""}`}>
//         {label}
//       </label>
//       <div className="select-container">
//         <Select
//           value={selectedOption}
//           onChange={handleSelectChange}
//           className="custom-select"
//           onFocus={handleSelectFocus}
//           onBlur={handleSelectBlur}
//           placeholder={placeholder}
//         >
//           {options.map((option) => (
//             <Option key={option.value} value={option.value}>
//               {option.label}
//             </Option>
//           ))}
//         </Select>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

import React, { useState } from "react";
import { Select } from "antd";
import "./dropdown.css";

const { Option } = Select;

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  selectedOption: string | undefined;
  onSelect: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedOption,
  onSelect,
  placeholder = "Input text",
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSelectChange = (value: string) => {
    onSelect(value);
  };

  const handleSelectFocus = () => {
    setIsFocused(true);
  };

  const handleSelectBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`custom-dropdown ${isFocused ? "focused" : ""}`}>
      <label
        className={`custom-label ${isFocused ? "focused-label" : ""} ${
          disabled ? "disabled-label" : ""
        }`}
      >
        {label}
      </label>
      <div className="select-container">
        <Select
          value={selectedOption}
          onChange={handleSelectChange}
          className={`custom-select ${disabled ? "disabled-select" : ""}`}
          onFocus={handleSelectFocus}
          onBlur={handleSelectBlur}
          placeholder={placeholder}
          showSearch={true} // Enable type-to-search
          filterOption={(inputValue, option) =>
            (option?.props.children || "")
              .toLowerCase()
              .indexOf(inputValue.toLowerCase()) >= 0
          } // Customize the filtering behavior
          disabled={disabled}
        >
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Dropdown;
