import * as React from 'react';
import { NewportNews } from '@app/Corridors/NewportNews';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('NewportNews tests', () => {
    test('should render NewportNews component', () => {
        const { asFragment } = render(<NewportNews />);
  
        expect(asFragment()).toMatchSnapshot();
    });
});
