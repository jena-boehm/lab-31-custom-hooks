global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import dogsJSON from '../../fixtures/dogs.json';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../HomePage';

const server = setupServer(
  rest.get('https://api.thedogapi.com/v1/breeds', (req, res, ctx) => {
    return res(ctx.json(dogsJSON));
  })
);

describe('HomePage container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays a list of dog breeds', async() => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    screen.getByAltText('loading');

    const listOfDogs = await screen.findByTestId('dogs');

    return waitFor(() => {
      expect(listOfDogs).not.toBeEmptyDOMElement();
    });
  });
});
