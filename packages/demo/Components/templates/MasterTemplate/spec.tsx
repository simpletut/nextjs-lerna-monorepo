import React from 'react';
import MasterTemplate from './index';
import { render } from '@testing-library/react';

describe('MasterTemplate Component', () => {
  it('Should render without errors', () => {
    const { queryByTestId } = render(<MasterTemplate />);
    const masterTemplate = queryByTestId('masterTemplate');
    expect(masterTemplate).toBeTruthy();
  });
});
