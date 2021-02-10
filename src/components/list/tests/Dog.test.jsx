import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Dog from '../Dog';
import { MemoryRouter } from 'react-router-dom';

describe('Dog component', () => {
  afterEach(() => cleanup());
  it('renders Dog', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Dog />
      </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
