// 'use client'
// import React, { useState } from 'react';
// import Dropdown from '../components/formfileds/Dropdown';
// import MultiSelectDropdown from '../components/formfileds/MultiSelectDropdown';



// const MyPage: React.FC = () => {
//   const [selectedOption, setSelectedOption] = useState<string | undefined>();
//   const [selectedOption2, setSelectedOption2] = useState<string | undefined>();

//   const handleDropdownSelect = (selectedValue: string) => {
//     setSelectedOption(selectedValue);
//     console.log('Selected:', selectedValue);
//   };

//   const handleDropdownSelect2 = (selectedValue2: string) => {
//     setSelectedOption2(selectedValue2);
//     console.log('Selected:', selectedValue2);
//   };

//   const options = [
//     { value: '1', label: 'Option 1' },
//     { value: '2', label: 'Option 2' },
//     { value: '3', label: 'Option 3' },
//   ];

//   return (
//     <div>
//       <h1>My Page</h1>

//       <Dropdown label="Dropdown Label" options={options} selectedOption={selectedOption} onSelect={handleDropdownSelect} disabled={true} />



//       <Dropdown label="Dropdown Label" options={options} selectedOption={selectedOption2} placeholder="Select an option..." onSelect={handleDropdownSelect2} />

//       <MultiSelectDropdown
//   label="Select multiple options"
//   options={[
//     { value: "option1", label: "Option 1" },
//     { value: "option2", label: "Option 2" },
//     { value: "option3", label: "Option 3" },
//   ]}
//   selectedOptions={selectedOptions} // Use selectedOptions for multi-select
//   onSelect={handleSelect} // Use onSelect for multi-select
//   placeholder="Select options..."
//   disabled={false}
// />
//     </div>
//   );
// };

// export default MyPage;


'use client'
import React, { useState } from 'react';
import Dropdown from '../components/formfileds/Dropdown';
import MultiSelectDropdown from '../components/formfileds/MultiSelectDropdown';

const MyPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [selectedOption2, setSelectedOption2] = useState<string | undefined>();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleDropdownSelect = (selectedValue: string) => {
    setSelectedOption(selectedValue);
    console.log('Selected:', selectedValue);
  };

  const handleDropdownSelect2 = (selectedValue2: string) => {
    setSelectedOption2(selectedValue2);
    console.log('Selected:', selectedValue2);
  };

  const handleSelect = (selectedValues: string[]) => {
    setSelectedOptions(selectedValues);
    console.log('Selected:', selectedValues);
  };

  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  return (
    <div>
      <h1>My Page</h1>

      <Dropdown label="Dropdown Label" options={options} selectedOption={selectedOption} onSelect={handleDropdownSelect} disabled={false} />

      <Dropdown label="Dropdown Label" options={options} selectedOption={selectedOption2} placeholder="Select an option..." onSelect={handleDropdownSelect2} />

      <MultiSelectDropdown
        label="Select multiple options"
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ]}
        selectedOptions={selectedOptions}
        onSelect={handleSelect}
        placeholder="Select options..."
        disabled={false}
        // mode='multiple'
      />
    </div>
  );
};

export default MyPage;
