


// // components/IconButton.tsx
"use client"

// import React, { useContext } from "react";
// import { Button } from "antd";
// import { EyeOutlined, EyeFilled, HeartOutlined, HeartFilled, PlusOutlined, DeleteOutlined, DeleteFilled } from "@ant-design/icons";
// import { useTheme } from 'next-themes'; // Import useTheme from next-themes

// // Create a ThemeContext to manage the current theme
// const ThemeContext = React.createContext<"light" | "dark">("light");

// interface IconButtonProps {
//   variant?: "eye" | "heart" | "plus" | "delete"; // Add the new variant
//   bg?: "filled" | "transparent"; // Input to control background color
//   iconColor?: "colored" | string; // Input to control icon color
//   // Add any other props you need for the IconButton
// }

// const IconButton: React.FC<IconButtonProps> = ({
//   variant = "eye",
//   bg = "transparent",
//   iconColor = "", // Set default icon color to an empty string
//   ...rest
// }) => {
//   const isFilled = bg === "filled";

//   // Use the useTheme hook to get the current theme
//   const { theme } = useTheme();

//   const buttonStyle: React.CSSProperties =
//     variant === "eye" || variant === "heart" || variant === "plus" || variant === "delete"
//       ? {
//           backgroundColor: "transparent",
//           border: `1px solid ${theme === "dark" ? "#3380FF" : "#0000001E"}`, // Border color based on theme
//           color: isFilled ? "#fff" : (theme === "dark" ? "#fff" : "#0000001E"), // Text color based on theme
//           letterSpacing: "1px",
//           fontWeight: 500,
//           fontSize: "12px", // Increase button font size
//         //   padding: "16px 16px", // Increase button padding
//         width:"38px",
//         height:"38px"
//         }
//       : {};

//   const defaultIconColor = iconColor === "" ? (theme === "dark" ? "#3380FF" : "#5A5A5A") : "#3380FF"; // Default to black or #3380FF
//   const iconStyle: React.CSSProperties = {
//     fontSize: "18px", // Increase icon font size
//     // paddingTop:'2px',
//     padding:'4px',
//     color: defaultIconColor, // Use defaultIconColor
//   };

//   const icon = variant === "eye" ? (
//     isFilled ? <EyeFilled style={iconStyle} /> : <EyeOutlined style={iconStyle} />
//   ) : variant === "heart" ? (
//     isFilled ? <HeartFilled style={iconStyle} /> : <HeartOutlined style={iconStyle} />
//   ) : variant === "plus" ? (
//     <PlusOutlined style={iconStyle} />
//   ) : variant === "delete" ? (
//     isFilled ? <DeleteFilled style={iconStyle} /> : <DeleteOutlined style={iconStyle} />
//   ) : null;

//   return (
//     <Button
//       style={{ ...buttonStyle }}
//       icon={icon}
//       {...rest}
//     />
//   );
// };

// export default IconButton;


import React, { useContext, useState } from "react";
import { Button } from "antd";
import { EyeOutlined, EyeFilled, HeartOutlined, HeartFilled, PlusOutlined, DeleteOutlined, DeleteFilled } from "@ant-design/icons";
import { useTheme } from 'next-themes';

const ThemeContext = React.createContext<"light" | "dark">("light");

interface IconButtonProps {
  variant?: "eye" | "heart" | "plus" | "delete";
  iconColor?: "colored" | string;
}

const IconButton: React.FC<IconButtonProps> = ({
  variant = "eye",
  iconColor = "",
  ...rest
}) => {
  const [isFilled, setIsFilled] = useState(false); // State to track if the button is filled
  const { theme } = useTheme();

  const buttonStyle: React.CSSProperties = {
    backgroundColor:  "transparent",
    border: `1px solid ${theme === "dark" ? "#3380FF" : "#0000001E"}`,
    color: isFilled ? "#fff" : (theme === "dark" ? "#fff" : "#00000000"),
    letterSpacing: "1px",
    fontWeight: 500,
    fontSize: "12px",
    width: "38px",
    height: "38px"
  };

  const defaultIconColor = iconColor === "" ? (theme === "dark" ? "#3380FF" : "#5A5A5A") : "#3380FF";
  const iconStyle: React.CSSProperties = {
    fontSize: "18px",
    padding: '4px',
    color: defaultIconColor,
  };

  const toggleFilled = () => {
    setIsFilled(!isFilled); // Toggle the filled state when the button is clicked
  };

  const icon = variant === "eye" ? (
    isFilled ? <EyeFilled style={iconStyle} /> : <EyeOutlined style={iconStyle} />
  ) : variant === "heart" ? (
    isFilled ? <HeartFilled style={iconStyle} /> : <HeartOutlined style={iconStyle} />
  ) : variant === "plus" ? (
    <PlusOutlined style={iconStyle} />
  ) : variant === "delete" ? (
    <DeleteOutlined style={iconStyle} />
  ) : null;

  return (
    <Button
      style={{ ...buttonStyle }}
      icon={icon}
      onClick={toggleFilled}
      {...rest}
    />
  );
};

export default IconButton;
