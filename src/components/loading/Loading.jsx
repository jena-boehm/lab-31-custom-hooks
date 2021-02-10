/* eslint-disable max-len */
import React from 'react';
import styles from '../../components/app/styles/App.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src="https://media.giphy.com/media/Y0g7w7UZwrmpQ9GW3m/giphy.gif" alt="loading" width="700px"/> 
      <div className={styles.loadingText}>Loading...</div>
    </div>
  );
};

export default Loading;
