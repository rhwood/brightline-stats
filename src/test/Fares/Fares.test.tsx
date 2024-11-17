import * as React from 'react';
import { Fares } from '@app/Fares/Fares';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Fares tests', () => {
    test('should render Fares component', () => {
        const { asFragment } = render(<Fares />);
  
        expect(asFragment()).toMatchSnapshot();
    });
});
