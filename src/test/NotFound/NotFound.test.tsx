/**
  * @jest-environment jsdom
  */
import { TextDecoder, TextEncoder } from 'util';
Object.assign(global, { TextDecoder, TextEncoder });

import * as React from 'react';
import { NotFound } from '@app/NotFound/NotFound';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('NotFound tests', () => {
    test('should render NotFound component', () => {
        const { asFragment } = render(
            <BrowserRouter>
                <Routes>
                    <Route path="*" element= {<NotFound />} />
                </Routes>
            </BrowserRouter>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
