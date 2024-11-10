import * as React from 'react';
import { Revenues } from '@app/Revenues/Revenues';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Revenues tests', () => {
    test('should render Revenues component', () => {
        const { asFragment } = render(<Revenues />);
  
        expect(asFragment()).toMatchSnapshot();
    });
});
