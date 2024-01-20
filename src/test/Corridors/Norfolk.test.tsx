import * as React from 'react';
import { Norfolk } from '@app/Corridors/Norfolk';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Norfolk tests', () => {
    test('should render Norfolk component', () => {
        const { asFragment } = render(<Norfolk />);
  
        expect(asFragment()).toMatchSnapshot();
    });
});
