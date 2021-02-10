/* eslint-disable max-len */
global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import dogByName from '../../fixtures/dogByName.json';
import DetailPage from '../DetailPage';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('https://api.thedogapi.com/v1/breeds/search?q=Golden%20Retriever', 
    (req, res, ctx) => {
      return res(ctx.json(dogByName));
    })
);

describe('DetailPage container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays dog details', async() => {
    render(
      <MemoryRouter>
        <DetailPage match={{ params: { name: 'Golden Retriever' } }} />
      </MemoryRouter>);

    screen.getByAltText('loading');

    return waitFor(() => {
      screen.getByText('Golden Retriever');
    });
  });
});
