
// InputField.tsx

import React, { useState } from 'react';
import { Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import './InputFields.css';
import { useTheme } from 'next-themes'; // Import useTheme from next-themes

interface InputFieldProps {
  label?: string |'';
  name: string;
  placeholder?: string;
  value: string;
  type?: string;
  onChange: (name: string, value: string) => void;
  variant?: 'default' | 'bottom-border'; // Add a variant prop
  icon?: 'user' | 'pwd' | 'email'; // Add an icon prop
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  placeholder,
  value,
  type,
  onChange,
  variant = 'default',
  icon,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const { theme } = useTheme(); // Get the current theme

  if(type == 'password'){}
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };


  const InputType = type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type

  let prefixIcon = null;

  if (icon === 'user') {
    prefixIcon = <UserOutlined />;
  } else if (icon === 'pwd') {
    prefixIcon = <LockOutlined />;
  } else if (icon === 'email') {
    prefixIcon = <MailOutlined />;
  }

  let suffixIcon = null;

  if (type === 'password') {
    suffixIcon = isPasswordVisible ? (
      <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
    ) : (
      <EyeOutlined onClick={togglePasswordVisibility} />
    );
  }

  // Define the icon color based on the theme
  const iconColor = theme === 'dark' ? '#FFFFFF' : '#000000';

  // Apply the icon color dynamically for both prefix and suffix icons
  if (prefixIcon) {
    prefixIcon = React.cloneElement(prefixIcon, {
      style: { color: iconColor },
    });
  }

  if (suffixIcon) {
    suffixIcon = React.cloneElement(suffixIcon, {
      style: { color: iconColor },
    });
  }

  return (
    <div className={`input-field-container ${variant === 'bottom-border' ? 'bottom-border' : ''}`}>
      <label className="input-label">{label}</label>
      <Input
        name={name}
        type={InputType}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        prefix={prefixIcon}
        suffix={suffixIcon}
        className={`input-field ${variant === 'bottom-border' ? 'input-field-bottom-border' : ''}`}
      />
    </div>
  );
};

export default InputField;
