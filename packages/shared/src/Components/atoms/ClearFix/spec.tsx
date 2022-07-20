import React from 'react';
import { render } from '@testing-library/react';

import ClearFix from './index';

describe('ClearFix Component', () => {
  it('Should render without errors', () => {
    const { queryByTitle } = render(<ClearFix />);
    const clearfix = queryByTitle('clearfix');
    expect(clearfix).toBeTruthy();
  });
});
