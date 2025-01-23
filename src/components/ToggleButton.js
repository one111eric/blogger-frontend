import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Adjust the path based on your structure

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme} 
      style={{
        margin: '10px',
        padding: '8px 16px',
        backgroundColor: theme === 'light' ? '#007bff' : '#009688',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggleButton;