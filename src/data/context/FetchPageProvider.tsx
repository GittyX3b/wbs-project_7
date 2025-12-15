import { createContext, useEffect, useState } from 'react';

import { baseFetchURL, fetchPage } from '../fetching';
import {
    type ArtworkDetail,
    ArtworkDetailSchema,
    type FetchPageContextValue,
    type FetchPageLimit,
    type FetchPageProviderProps,
} from '../types';

const FetchPageCtx = createContext<FetchPageContextValue | undefined>(undefined);

const FetchPageProvider = ({ children }: FetchPageProviderProps) => {
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<FetchPageLimit>(12);
    const [data, setData] = useState<ArtworkDetail[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchURL = [
                    baseFetchURL,
                    '?page=',
                    page,
                    '&limit=',
                    limit,
                    '&fields=',
                    Object.keys(ArtworkDetailSchema.shape).join(','),
                ].join('');

                const pageData = await fetchPage(fetchURL);
                setData(pageData);
            } catch (err) {
                console.error('Failed to fetch page:', err);
                setData([]);
            }
        };

        fetchData();
    }, [page, limit]);

    return <FetchPageCtx value={{ page, setPage, limit, setLimit, data }}>{children}</FetchPageCtx>;
};

export { FetchPageCtx, FetchPageProvider };
