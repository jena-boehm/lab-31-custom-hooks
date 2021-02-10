import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

const DogList = ({ dogs }) => {
  const renderDogs = dogs.map(dog => (
    <li key={dog.name}>
      <Dog 
        name={dog.name}
        image={dog.image} />
    </li>
  ));

  return (
    <ul>{renderDogs}</ul>
  );
};

DogList.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default DogList;
