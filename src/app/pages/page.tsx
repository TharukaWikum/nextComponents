// // components/MyForm.tsx
// "use client";
// import React, { useState } from "react";
// import InputField from "../components/formfileds/InputFields";

// const MyForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     // Define your form fields here
//     username: "",
//     email: "",
//     username2: "",
//     email2: "",
//     password: "",
//     password2: "",
//     // ...
//   });

  

//   const handleChange = (name: string, value: string) => {
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log(formData);
//   };

//   const isUsernameInvalid = true

//   return (
//     <form onSubmit={handleSubmit}>
//       <InputField
//         label="Username"
//         name="username"
//         type="text" // Set the input type to "text"
//         placeholder="Enter your username"
//         icon="user"
//         value={formData.username}
//         onChange={handleChange}
//         warning={isUsernameInvalid}
//       />
//       <InputField
//         label="Email"
//         name="email"
//         type="text"
//         placeholder="Enter your email"
//         value={formData.email}
//         icon="email"
//         onChange={handleChange}
//         warning={isUsernameInvalid}
//       />
//       <InputField
//         label="Password"
//         name="password"
//         type="password" // Set the input type to "password"
//         placeholder="Enter your password"
//         icon="pwd"
//         value={formData.password}
//         onChange={handleChange}
//         warning={isUsernameInvalid}
//       />

//       <InputField
//         label="Username2"
//         name="username2"
//         type="text"
//         placeholder="Enter your username"
//         icon="user"
//         value={formData.username2}
//         onChange={handleChange}
//         variant="bottom-border"
//         warning={isUsernameInvalid}
//       />
//       <InputField
//         label="Email2"
//         name="email2"
//         placeholder="Enter your email"
//         icon="email"
//         value={formData.email2}
//         onChange={handleChange}
//         variant="bottom-border"
//         warning={isUsernameInvalid}
//       />
//       <InputField
//         label="Password2"
//         name="password2"
//         type="password" // Set the input type to "password"
//         placeholder="Enter your password"
//         icon="pwd"
//         value={formData.password2}
//         onChange={handleChange}
//         variant="bottom-border"
//         warning={isUsernameInvalid}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;


// components/MyForm.tsx
"use client"
import React, { useState } from "react";
import InputField from "../components/formfileds/InputFields";

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState({
    // Define your form fields here
    username: "",
    email: "",
    username2: "",
    email2: "",
    password: "",
    password2: "",
    // ...
  });

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace this with your actual form submission logic
    console.log("Form data submitted:", formData);
  };

  const isUsernameInvalid = true; // Set to true to demonstrate the warning border color

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Username"
        name="username"
        type="text"
        placeholder="Enter your username"
        icon="user"
        value={formData.username}
        onChange={handleChange}
        warning={isUsernameInvalid}
        warningMessage ="Warning"
        error={isUsernameInvalid}
        errorMessage="Error"
      />
      <InputField
        label="Email"
        name="email"
        type="text"
        placeholder="Enter your email"
        value={formData.email}
        icon="email"
        onChange={handleChange}
        error={isUsernameInvalid}
        warning={isUsernameInvalid}
        errorMessage="Error"
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        icon="pwd"
        value={formData.password}
        onChange={handleChange}
        warning={isUsernameInvalid}
        warningMessage ="Warning"
        error={isUsernameInvalid}
        errorMessage="Error"

      />

      <InputField
        label="Username2"
        name="username2"
        type="text"
        placeholder="Enter your username"
        icon="user"
        value={formData.username2}
        onChange={handleChange}
        variant="bottom-border"
        warning={isUsernameInvalid}
      />
      <InputField
        label="Email2"
        name="email2"
        placeholder="Enter your email"
        icon="email"
        value={formData.email2}
        onChange={handleChange}
        variant="bottom-border"
        warning={isUsernameInvalid}
      />
      <InputField
        label="Password2"
        name="password2"
        type="password"
        placeholder="Enter your password"
        icon="pwd"
        value={formData.password2}
        onChange={handleChange}
        variant="bottom-border"
        warning={isUsernameInvalid}
        warningMessage ="Warning"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
