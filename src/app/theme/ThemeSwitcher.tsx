// "use client"
// import { useState, useEffect } from "react";
// import {useTheme} from "next-themes";

// const ThemeSwitcher = () => {
//     const [mounted, setMounted] = useState(false);
//     const { theme, setTheme } = useTheme()

//     useEffect(() => {
//         setMounted(true)
//       }, [])

    //   if(!mounted){
    //     return null;
    //   }

//   return (
//     <div>
//       The current theme is: {theme}
//       <button onClick={() => setTheme('light')}>Light Mode</button>
//       <button onClick={() => setTheme('dark')}>Dark Mode</button>
//     </div>
//   )
// };

// export default ThemeSwitcher


"use client"
import React from 'react';
import { Switch } from 'antd';
import { useTheme } from 'next-themes';
import './themeSwitch.css'




const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <div className="theme-switch-container">
        <Switch
          checked={theme === 'dark'}
          onChange={toggleTheme}
          checkedChildren={<span style={{ color: 'white' }}>Dark</span>}
          unCheckedChildren={<span style={{ color: 'black' }}>Light</span>}
          defaultChecked={theme === 'dark'}
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;


