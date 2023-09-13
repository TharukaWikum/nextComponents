


// components/IconButton.tsx
"use client"

import React, { useContext } from "react";
import { Button } from "antd";
import { EyeOutlined, EyeFilled, HeartOutlined, HeartFilled, PlusOutlined, DeleteOutlined, DeleteFilled } from "@ant-design/icons";
import { useTheme } from 'next-themes'; // Import useTheme from next-themes

// Create a ThemeContext to manage the current theme
const ThemeContext = React.createContext<"light" | "dark">("light");

interface IconButtonProps {
  variant?: "eyeTwoTone" | "heart" | "plus" | "delete"; // Add the new variant
  bg?: "filled" | "transparent"; // Input to control background color
  iconColor?: "colored" | string; // Input to control icon color
  // Add any other props you need for the IconButton
}

const IconButton: React.FC<IconButtonProps> = ({
  variant = "eyeTwoTone",
  bg = "transparent",
  iconColor = "", // Set default icon color to an empty string
  ...rest
}) => {
  const isFilled = bg === "filled";

  // Use the useTheme hook to get the current theme
  const { theme } = useTheme();

  const buttonStyle: React.CSSProperties =
    variant === "eyeTwoTone" || variant === "heart" || variant === "plus" || variant === "delete"
      ? {
          backgroundColor: "transparent",
          border: `1px solid ${theme === "dark" ? "#3380FF" : "#0000001E"}`, // Border color based on theme
          color: isFilled ? "#fff" : (theme === "dark" ? "#fff" : "#0000001E"), // Text color based on theme
          letterSpacing: "1px",
          fontWeight: 500,
          fontSize: "12px", // Increase button font size
        //   padding: "16px 16px", // Increase button padding
        width:"34px",
        height:"34px"
        }
      : {};

  const defaultIconColor = iconColor === "" ? (theme === "dark" ? "#3380FF" : "#000000") : "#3380FF"; // Default to black or #3380FF
  const iconStyle: React.CSSProperties = {
    fontSize: "20px", // Increase icon font size
    paddingTop:'2px',
    color: defaultIconColor, // Use defaultIconColor
  };

  const icon = variant === "eyeTwoTone" ? (
    isFilled ? <EyeFilled style={iconStyle} /> : <EyeOutlined style={iconStyle} />
  ) : variant === "heart" ? (
    isFilled ? <HeartFilled style={iconStyle} /> : <HeartOutlined style={iconStyle} />
  ) : variant === "plus" ? (
    <PlusOutlined style={iconStyle} />
  ) : variant === "delete" ? (
    isFilled ? <DeleteFilled style={iconStyle} /> : <DeleteOutlined style={iconStyle} />
  ) : null;

  return (
    <Button
      style={{ ...buttonStyle }}
      icon={icon}
      {...rest}
    />
  );
};

export default IconButton;


