import * as React from 'react';
import { Short } from '@app/Trip/Short';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Short trip tests', () => {
    test('should render Short trip component', () => {
        const { asFragment } = render(<Short />);
  
        expect(asFragment()).toMatchSnapshot();
    });
});
