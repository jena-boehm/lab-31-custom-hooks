import { useState, useEffect } from 'react';
import { getDetailsByName, getDogsByBreed } from '../state/DogApi';

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

export const useDogDetails = name => {
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState({});

  useEffect(() => {
    getDetailsByName(name)
      .then(dog => {
        setDog(dog);
        setLoading(false);
      });
  }, [name]);

  return {
    loading,
    dog
  };
};
