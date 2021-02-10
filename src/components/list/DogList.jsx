import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';
import Header from '../header/Header';

const DogList = ({ dogs }) => {
  const renderDogs = dogs.map(dog => (
    <li key={dog.name}>
      <Dog 
        name={dog.name}
        image={dog.image} />
    </li>
  ));

  return (
    <>
      <Header />
      <ul data-testid="dogs">
        {renderDogs}
      </ul>
    </>
  );
};

DogList.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string
  }))
};

export default DogList;
