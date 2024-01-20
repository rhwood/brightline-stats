import * as React from 'react';
import { NotFound } from '@app/NotFound/NotFound';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('NotFound tests', () => {
    test('should render NotFound component', () => {
        const { asFragment } = render(<NotFound />);
  
        expect(asFragment()).toMatchSnapshot();
    });
});
