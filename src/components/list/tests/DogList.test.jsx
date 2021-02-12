import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DogList from '../DogList';
import { MemoryRouter } from 'react-router-dom';
import dogs from '../../../fixtures/dogs.json';
import { ThemeProvider } from '../../../state/themeContext';

describe('DogList component', () => {
  afterEach(() => cleanup());
  it('renders DogList', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <MemoryRouter>
          <DogList dogs={[dogs]} />
        </MemoryRouter>
      </ThemeProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
