import React from 'react';
import { render } from '@testing-library/react';

import Column from './index';

describe('Column Component', () => {
  it('Should render without errors', () => {
    const { queryByTestId } = render(<Column width={12} />);
    const column = queryByTestId('column');
    expect(column).toBeTruthy();
  });
});
