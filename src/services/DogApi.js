/* eslint-disable max-len */
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
    .then((breeds) => 
      breeds.map((result) => ({
        id: result.id,
        name: result.name,
        temperament: result.temperament,
        lifeSpan: result.life_span,
        origin: result.origin,
        image: result.image.url 
      })));
};
