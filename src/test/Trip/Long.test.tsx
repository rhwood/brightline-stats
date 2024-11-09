import * as React from 'react';
import { Long } from '@app/Trip/Long';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Long trip tests', () => {
    test('should render long trip component', () => {
        const { asFragment } = render(<Long />);
  
        expect(asFragment()).toMatchSnapshot();
    });
});
