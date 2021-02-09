import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Dog = ({ id, name, image }) => {
  return (
    <>
      <figure>
        <figcaption>{name}</figcaption>
        <Link to={`/breeds/${id}`}>
          <img src={image} alt={name} width="300px" />
        </Link>
      </figure>
      <div>Hello</div>
    </>
  );
};

Dog.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Dog;
