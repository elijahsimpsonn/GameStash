import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from '../context/GamestashContext';
import AddConsoleForm from '../components/AddConsoleForm/AddConsoleForm';
import { act, Act } from '@testing-library/react'

describe.only(`ConsolePage Component`, () => {

    describe(`Smoke test`, () => {
        it(`Renders without crashing`, () => {
            
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>
                    <ContextProvider>
                        <AddConsoleForm />
                    </ContextProvider>
                </BrowserRouter>,
                div);
            ReactDOM.unmountComponentAtNode(div);
            
        });
    })
});