import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../app/styles/App.css';

const Dog = ({ name, image }) => {
  return (
    <>
      <figure 
        className={styles.listItem}>
        <figcaption 
          className={styles.name}>{name}
        </figcaption>
        <Link to={`/breeds/${name}`}>
          <img 
            src={image} 
            alt={name} 
            className={styles.image} 
            height="200px" />
        </Link>
      </figure>
    </>
  );
};

Dog.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default Dog;
