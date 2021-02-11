import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../app/styles/App.css';
import logo from '../../../public/pawprint.png';
import { useTheme } from '../../state/themeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const changeTheme = ({ target }) => {
    if(target.checked) toggleTheme('light');
    else toggleTheme('dark');
  };

  return (
    <div className={styles.header}>
      <img 
        src={logo}
        alt="logo" 
        width="70px" 
        className={styles.logo} />
      <Link 
        to="/"
        className={styles.headerLink}>Home</Link> 
      <div className={styles.toggleContainer}>
        <span>Check to toggle light/dark mode:</span>
        <input 
          className={styles.headerLink}
          type="checkbox" 
          onChange={changeTheme} />
      </div>
    </div>
  );
};

export default Header;
