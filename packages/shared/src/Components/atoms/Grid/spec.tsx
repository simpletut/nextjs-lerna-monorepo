import React from 'react';
import { render } from '@testing-library/react';

import Grid from './index';

describe('Column Component', () => {
  it('Should render without errors', () => {
    const { queryByTestId } = render(<Grid />);
    const grid = queryByTestId('grid');
    expect(grid).toBeTruthy();
  });
});
