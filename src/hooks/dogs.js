import { useState, useEffect } from 'react';
import { getDogsByBreed } from '../services/DogApi';

export const useDogs = () => {
  const [loading, setLoading] = useState(true);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    getDogsByBreed()
      .then(dogs => {
        setDogs(dogs);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    dogs
  };
};
