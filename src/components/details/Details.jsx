import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ name, temperament, lifeSpan, origin, image }) => {
  return (
    <figure>
      <figcaption>{name}</figcaption>
      <img src={image} alt={name} width="400px" />
      <p>Temperament: {temperament}</p>
      <p>Life Span: {lifeSpan}</p>
      <p>Origin: {origin}</p>
    </figure>
  );
};

Details.propTypes = {
  name: PropTypes.string.isRequired,
  temperament: PropTypes.string.isRequired,
  lifeSpan: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Details;
