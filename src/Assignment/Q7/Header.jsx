import React from 'react';
import { useTheme } from './ContextApi';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{ background: theme === 'light' ? '#f0f0f0' : '#333', padding: '1rem' }}>
      <h1>Theme App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
