// import React, { useState } from "react";
// import { Select } from "antd";
// import "./multiSelectDropdown.css";

// const { Option } = Select;

// interface DropdownOption {
//   value: string;
//   label: string;
// }

// interface MultiSelectDropdownProps {
//   label: string;
//   options: DropdownOption[];
//   selectedOptions: string[] | undefined;
//   onSelect: (values: string[]) => void;
//   placeholder?: string;
//   disabled?: boolean;
// }

// const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
//   label,
//   options,
//   selectedOptions,
//   onSelect,
//   placeholder = "Input text",
//   disabled = false,
// }) => {
//   const [isFocused, setIsFocused] = useState(false);

//   const handleSelectChange = (values: string[]) => {
//     onSelect(values);
//   };

//   const handleSelectFocus = () => {
//     setIsFocused(true);
//   };

//   const handleSelectBlur = () => {
//     setIsFocused(false);
//   };

//   return (
//     <div className={`custom-dropdown ${isFocused ? "focused" : ""}`}>
//       {/* <label
//         className={`custom-label ${isFocused ? "focused-label" : ""} ${
//           disabled ? "disabled-label" : ""
//         }`}
//       >
//         {label}
//       </label> */}
//       <div className="select-container">
//         <Select
//           value={selectedOptions}
//           onChange={handleSelectChange}
//           mode="multiple"
//           className={`custom-select ${disabled ? "disabled-select" : ""}`}
//           onFocus={handleSelectFocus}
//           onBlur={handleSelectBlur}
//           placeholder={placeholder}
//           showSearch={true}
//           filterOption={(inputValue, option) =>
//             ((option?.props.children as string) || "")
//               .toLowerCase()
//               .indexOf(inputValue.toLowerCase()) >= 0
//           }
//           disabled={disabled}
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

// export default MultiSelectDropdown;


import React, { useState } from "react";
import { Select } from "antd";
import "./multiSelectDropdown.css";

const { Option } = Select;

interface DropdownOption {
  value: string;
  label: string;
}

interface MultiSelectDropdownProps {
  label: string;
  options: DropdownOption[];
  selectedOptions: string[] | undefined;
  onSelect: (values: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  mode?: "multiple" | undefined ; // Add mode prop
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  label,
  options,
  selectedOptions,
  onSelect,
  placeholder = "Input text",
  disabled = false,
  mode =  "multiple", // Default to "default" mode if not provided
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSelectChange = (values: string[]) => {
    onSelect(values);
  };

  const handleSelectFocus = () => {
    setIsFocused(true);
  };

  const handleSelectBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`custom-dropdown ${isFocused ? "focused" : ""}`}>
      <div className="select-container">
        <Select
          value={selectedOptions}
          onChange={handleSelectChange}
          mode={mode} // Use the mode prop here
          className={`custom-select ${disabled ? "disabled-select" : ""} ${
            mode === "multiple" ? "multiple-mode" : ""
          }`}
          onFocus={handleSelectFocus}
          onBlur={handleSelectBlur}
          placeholder={placeholder}
          showSearch={true}
          filterOption={(inputValue, option) =>
            ((option?.props.children as string) || "")
              .toLowerCase()
              .indexOf(inputValue.toLowerCase()) >= 0
          }
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

export default MultiSelectDropdown;

