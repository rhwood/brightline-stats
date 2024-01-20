import * as React from 'react';
import { NotFound } from '@app/NotFound/NotFound';
import { act, render, screen,  } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('NotFound tests', () => {
    test('should render NotFound component', () => {
        const { asFragment } = render(<NotFound />);
  
        expect(asFragment()).toMatchSnapshot();
    });
});
  