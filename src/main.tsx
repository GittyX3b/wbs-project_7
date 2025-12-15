import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './main.css';

import { App } from './App';
import { FetchPageProvider } from './data/context/FetchPageProvider';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <FetchPageProvider>
                <App />
            </FetchPageProvider>
        </BrowserRouter>
    </StrictMode>,
);
