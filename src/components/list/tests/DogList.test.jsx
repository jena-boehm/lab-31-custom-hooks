import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DogList from '../DogList';
import { MemoryRouter } from 'react-router-dom';

describe('DogList component', () => {
  afterEach(() => cleanup());
  it('renders DogList', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <DogList dogs={[]} />
      </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
