import React from 'react';
import Header from './index';
import { render } from '@testing-library/react';

describe('Header Component', () => {
  it('Should render without errors', () => {
    const { queryByTestId } = render(<Header />);
    const component = queryByTestId('header');
    expect(component).toBeTruthy();
  });
});
