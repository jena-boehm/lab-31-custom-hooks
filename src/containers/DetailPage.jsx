import React from 'react';
import PropTypes from 'prop-types';
import { useDogs } from '../hooks/dogs';
import Loading from '../components/loading/Loading';
import Details from '../components/details/Details';

const DetailPage = ({ match }) => {
  // const { loading, dog } = useCharacterDetails(match.params.name);

  const { loading, dogs } = useDogs();
  const dog = dogs.find(dog => dog.name === match.params.name);

  console.log(dog);

  if(loading) return <Loading />;
  return <Details {...dog} />;
};

DetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default DetailPage;
