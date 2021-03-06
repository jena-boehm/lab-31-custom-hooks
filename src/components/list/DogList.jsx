import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';
import Header from '../header/Header';
import styles from '../app/styles/App.css';
import { useTheme } from '../../state/themeContext';

const DogList = ({ dogs }) => {
  const { theme, toggleTheme } = useTheme();

  const renderDogs = dogs.map(dog => (
    <li key={dog.name}>
      <Dog 
        name={dog.name}
        image={dog.image} />
    </li>
  ));

  return (
    <div className={styles[theme]}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <div className={styles.body}>
        <div className={styles.list}>
          <ul data-testid="dogs"
            className={styles.ul}>
            {renderDogs}
          </ul>
        </div>
      </div>
    </div>
  );
};

DogList.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string
  }))
};

export default DogList;
