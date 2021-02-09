import React from 'react';
import PropTypes from 'prop-types';
import DogList from '../components/list/DogList';
import { useDogs } from '../hooks/dogs';
import Loading from '../components/loading/Loading';

const HomePage = () => {
  const { loading, dogs } = useDogs();

  if(loading) return <Loading />;
  return <DogList dogs={dogs} />;
};

export default HomePage;
