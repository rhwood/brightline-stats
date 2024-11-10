import * as React from 'react';
import { Ridership } from '@app/Ridership/Ridership';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Ridership tests', () => {
    test('should render Ridership component', () => {
        const { asFragment } = render(<Ridership />);
  
        expect(asFragment()).toMatchSnapshot();
    });
});
