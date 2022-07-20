import React from 'react';
import { render } from '@testing-library/react';

import CommonProvider from './common.provider';

describe('CommonProvider Component', () => {
  it('Should render without errors', () => {
    const { queryAllByTestId } = render(
      <CommonProvider>
        <div data-testid="testDiv" />
      </CommonProvider>
    );
    const component = queryAllByTestId('testDiv');
    expect(component).toBeTruthy();
  });
});
