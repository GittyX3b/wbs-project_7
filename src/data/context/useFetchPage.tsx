import { useContext } from 'react';

import { FetchPageCtx } from './FetchPageProvider';

import { type FetchPageContextValue } from '../types';

export const useFetchPage = (): FetchPageContextValue => {
    const ctx = useContext(FetchPageCtx);
    if (!ctx) {
        throw new Error('useFetchConfig must be used within FetchConfigProvider');
    }
    return ctx;
};
