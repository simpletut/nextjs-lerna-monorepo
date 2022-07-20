import React from 'react';
import { render } from '@testing-library/react';

import Container from './index';

describe('Container Component', () => {
  it('Should render without errors', () => {
    const { queryByTestId } = render(<Container />);
    const container = queryByTestId('container');
    expect(container).toBeTruthy();
  });
});
