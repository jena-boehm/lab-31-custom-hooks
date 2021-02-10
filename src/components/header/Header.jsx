import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../app/styles/App.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <img 
        src="../../../pawprint.png" 
        alt="logo" 
        width="70px" 
        className={styles.logo} />
      <Link 
        to="/"
        className={styles.headerLink}>Home</Link>  
    </div>
  );
};

export default Header;
