import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './main.css';

import { App } from './App';
import { FetchPageProvider } from './data/context/FetchPageProvider';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <FetchPageProvider>
                <App />
            </FetchPageProvider>
        </HashRouter>
    </StrictMode>,
);
