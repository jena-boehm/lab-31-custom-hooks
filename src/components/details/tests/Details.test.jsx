import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Details from '../Details';

describe('Details component', () => {
  afterEach(() => cleanup());
  it('renders Details', () => {
    const { asFragment } = render(<Details />);
    expect(asFragment()).toMatchSnapshot();
  });
});
