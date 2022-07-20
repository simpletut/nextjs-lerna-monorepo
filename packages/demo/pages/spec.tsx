import React from 'react';
import Home from './index';
import { render } from '@testing-library/react';

describe('Home Component', () => {
  it('Should render without errors', () => {
    const { queryByTestId } = render(<Home />);
    const component = queryByTestId('homeContent');
    expect(component).toBeTruthy();
  });
});
