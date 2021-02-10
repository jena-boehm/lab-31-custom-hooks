import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DogList from '../DogList';

describe('DogList component', () => {
  afterEach(() => cleanup());
  it('renders DogList', () => {
    const { asFragment } = render(<DogList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
