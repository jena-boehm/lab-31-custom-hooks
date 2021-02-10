import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Dog = ({ name, image }) => {
  return (
    <>
      <figure>
        <figcaption>{name}</figcaption>
        <Link to={`/breeds/${name}`}>
          <img src={image} alt={name} width="300px" />
        </Link>
      </figure>
    </>
  );
};

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Dog;
