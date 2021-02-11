const myHeaders = new Headers();
const API_KEY = process.env.API_KEY;

myHeaders
  .append('Authorization', 
    `Bearer ${API_KEY}`);

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
        bredFor: result.bred_for
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
      bredFor: result.bred_for,
      image: result.reference_image_id
    }));
};

