import * as React from 'react';
import { Roanoke } from '@app/Corridors/Roanoke';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Roanoke tests', () => {
    test('should render Roanoke component', () => {
        const { asFragment } = render(<Roanoke />);
  
        expect(asFragment()).toMatchSnapshot();
    });
});
