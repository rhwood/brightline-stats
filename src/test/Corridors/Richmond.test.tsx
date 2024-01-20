import * as React from 'react';
import { Richmond } from '@app/Corridors/Richmond';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Richmond tests', () => {
    test('should render Richmond component', () => {
        const { asFragment } = render(<Richmond />);
  
        expect(asFragment()).toMatchSnapshot();
    });
});
