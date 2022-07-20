import React from 'react';
import Footer from './index';
import { render } from '@testing-library/react';

describe('Footer Component', () => {
  it('Should render without errors', () => {
    const { queryByTestId } = render(<Footer />);
    const component = queryByTestId('footer');
    expect(component).toBeTruthy();
  });
});
