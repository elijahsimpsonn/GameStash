import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from '../context/GamestashContext';
import ConsolePage from '../routes/ConsolePage/ConsolePage';

describe(`ConsolePage Component`, () => {
    describe(`Smoke test`, () => {
        it(`Renders without crashing`, async () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>
                    <ContextProvider>
                        <ConsolePage />
                    </ContextProvider>
                </BrowserRouter>,
                div);
            ReactDOM.unmountComponentAtNode(div);
        });
    })
});