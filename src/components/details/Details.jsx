import React from 'react';
import PropTypes from 'prop-types';
import styles from '../app/styles/App.css';

const Details = ({ name, temperament, lifeSpan, origin, bredFor, image }) => {
  if(origin) return (
    <>
      <figure>
        <figcaption className={styles.nameHeader}>{name}</figcaption>
        <img src={image} alt={name} width="600px" />
      </figure>
      <div className={styles.details}>
        <span className={styles.detailLabel}>Temperament: </span>
        <span>{temperament}</span><br/>
        <span className={styles.detailLabel}>Life Span: </span>
        <span>{lifeSpan}</span><br/>
        <span className={styles.detailLabel}>Origin: </span>
        <span>{origin}</span><br/>
        <span className={styles.detailLabel}>Bred For: </span>
        <span>{bredFor}</span>
      </div>
    </>
  );

  else return (
    <>
      <figure>
        <figcaption className={styles.nameHeader}>{name}</figcaption>
        <img src={image} alt={name} width="600px" />
      </figure>
      <div className={styles.details}>
        <span className={styles.detailLabel}>Temperament: </span>
        <span>{temperament}</span><br/>
        <span className={styles.detailLabel}>Life Span: </span>
        <span>{lifeSpan}</span><br/>
        <span className={styles.detailLabel}>Bred For: </span>
        <span>{bredFor}</span>
      </div>
    </>
  );
};

Details.propTypes = {
  name: PropTypes.string,
  temperament: PropTypes.string,
  lifeSpan: PropTypes.string,
  origin: PropTypes.string,
  bredFor: PropTypes.string,
  image: PropTypes.string,
};

export default Details;
