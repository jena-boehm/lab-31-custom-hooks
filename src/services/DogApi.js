const myHeaders = new Headers();

myHeaders
  .append('Authorization', 
    'Bearer 1544caee-0010-41ae-92cb-28cbee4c0e70');

export const getDogsByBreed = async() => {
  return await fetch('https://api.thedogapi.com/v1/breeds', {
    method: 'GET',
    headers: myHeaders
  })
    .then(res => res.json())
    .then((dogs) => 
      dogs.map((result) => ({
        id: result.id,
        name: result.name,
        image: result.image.url,
        temperament: result.temperament,
        lifeSpan: result.life_span,
        origin: result.origin, 
      })));
};

export const getDetailsByName = (name) => {
  return fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`, {
    method: 'GET',
    headers: myHeaders
  })
    .then(res => res.json())
    .then(([result]) => ({
      name: result.name,
      temperament: result.temperament,
      lifeSpan: result.life_span,
      origin: result.origin,
      image: result.reference_image_id
    }));
};

