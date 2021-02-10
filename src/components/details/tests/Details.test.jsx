import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Details from '../Details';
import dogByName from '../../../fixtures/dogByName.json';

describe('Details component', () => {
  afterEach(() => cleanup());
  it('renders Details', () => {
    const { asFragment } = render(<Details component={[dogByName]}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
