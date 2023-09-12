// import React from "react";
// import { Button } from "antd";
// import { PlusOutlined } from "@ant-design/icons";

// interface CustomButtonProps {
//   variant?:
//     | "clear"
//     | "primary"
//     | "secondary"
//     | "withPlus"
//     | "borderWithPlus"
//     | "withBorder";
//   children: React.ReactNode;
//   // Add prop for length
//   length?: "sm" | "m" | "lg";
// }

// const CustomButton: React.FC<CustomButtonProps> = ({
//   variant = "primary",
//   children,
//   length = "m", // Default length is "m"
//   ...rest
// }) => {
//   const buttonStyle: React.CSSProperties =
//     variant === "clear"
//       ? {
//           backgroundColor: "transparent",
//           border: "none",
//           color: "#3380FF",
//           letterSpacing: "1px",
//           fontWeight: 500,
//         }
//       : {};

//   const prefixIcon =
//     variant === "withPlus" || variant === "borderWithPlus" ? (
//       <PlusOutlined style={{ marginRight: "4px" }} />
//     ) : null;

//   const withPlusStyle: React.CSSProperties =
//     variant === "withPlus"
//       ? {
//           backgroundColor: "transparent",
//           border: "none",
//           color: "#3380FF",
//           letterSpacing: "1px",
//           fontWeight: 500,
//         }
//       : {};

//   const borderWithPlusStyle: React.CSSProperties =
//     variant === "borderWithPlus"
//       ? {
//           backgroundColor: "transparent",
//           border: `1px solid #3380FF`,
//           color: "#3380FF",
//           letterSpacing: "1px",
//           fontWeight: 500,
//           // Apply different padding based on length prop
//           padding: length === "sm" ? "4px 8px" : length === "lg" ? "4px 40px" : "4px 24px",
//         }
//       : {};

//   const withBorderStyle: React.CSSProperties =
//     variant === "withBorder"
//       ? {
//           backgroundColor: "transparent",
//           border: `1px solid #3380FF`,
//           color: "#3380FF",
//           letterSpacing: "1px",
//           fontWeight: 500,
//           // Apply different padding based on length prop
//           padding: length === "sm" ? "4px 8px" : length === "lg" ? "4px 40px" : "4px 24px",
//         }
//       : {};

//   return (
//     <Button
//       style={{ ...buttonStyle, ...withPlusStyle, ...borderWithPlusStyle, ...withBorderStyle }}
//       icon={prefixIcon}
//       {...rest}
//     >
//       {children}
//     </Button>
//   );
// };

// export default CustomButton;


// components/CustomButton.tsx
import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface CustomButtonProps {
  variant?:
    | "clear"
    | "primary"
    | "secondary"
    | "withPlus"
    | "borderWithPlus"
    | "withBorder";
  children: React.ReactNode;
  length?: "sm" | "m" | "lg";
  bg?: "filled" | "transparent"; // Input to control background color
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = "primary",
  children,
  length = "m",
  bg = "transparent", // Default to transparent background
  ...rest
}) => {
  const buttonStyle: React.CSSProperties =
    variant === "clear"
      ? {
          backgroundColor: "transparent",
          border: "none",
          color: "#3380FF",
          letterSpacing: "1px",
          fontWeight: 500,
        }
      : {};

 

    const prefixIcon =
    variant === "withPlus" || variant === "borderWithPlus" ? (
      <PlusOutlined style={{ marginRight: "4px" }} />
    ) : null;

  const withPlusStyle: React.CSSProperties =
    variant === "withPlus"
      ? {
          backgroundColor: "transparent",
          border: "none",
          color: "#3380FF",
          letterSpacing: "1px",
          fontWeight: 500,
        }
      : {};

  const filledBackground = bg === "filled"; // Check if background should be filled

  const borderWithPlusStyle: React.CSSProperties =
    variant === "borderWithPlus"
      ? {
          backgroundColor: filledBackground ? "#3380FF" : "transparent",
          border: `1px solid #3380FF`,
          color: filledBackground ? "#fff" : "#3380FF",
          letterSpacing: "1px",
          fontWeight: 500,
          padding: length === "sm" ? "4px 8px" : length === "lg" ? "4px 40px" : "4px 24px",
        }
      : {};

  const withBorderStyle: React.CSSProperties =
    variant === "withBorder"
      ? {
          backgroundColor: filledBackground ? "#3380FF" : "transparent",
          border: `1px solid #3380FF`,
          color: filledBackground ? "#fff" : "#3380FF",
          letterSpacing: "1px",
          fontWeight: 500,
          padding: length === "sm" ? "4px 8px" : length === "lg" ? "4px 40px" : "4px 24px",
        }
      : {};

  return (
    <Button
      style={{ ...buttonStyle, ...borderWithPlusStyle, ...withBorderStyle, ...withPlusStyle }}
      icon={prefixIcon}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
