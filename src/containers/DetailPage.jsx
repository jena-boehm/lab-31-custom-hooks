import React from 'react';
import PropTypes from 'prop-types';
import { useDogs } from '../hooks/dogs';
import Loading from '../components/loading/Loading';
import Details from '../components/details/Details';
import Header from '../components/header/Header';
import styles from '../components/app/styles/App.css';

const DetailPage = ({ match }) => {

  const { loading, dogs } = useDogs();
  const dog = dogs.find(dog => dog.name === match.params.name);

  if(loading) return <Loading />;
  return (
    <div className={styles.app}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <div className={styles.body}>
        <div className={styles.detailContainer}>
          <Details {...dog} />
        </div>
      </div>
    </div>
  );
};

DetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string
    })
  })
};

export default DetailPage;
