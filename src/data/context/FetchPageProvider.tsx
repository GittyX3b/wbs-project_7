import { createContext, useEffect, useState } from 'react';

import { baseFetchURL } from '../fetching';
import {
    type ArtworkDetail,
    ArtworkDetailSchema,
    ArtworksListSchema,
    type FetchPageContextValue,
    type FetchPageLimit,
    type FetchPageProviderProps,
} from '../types';

const FetchPageCtx = createContext<FetchPageContextValue | undefined>(undefined);

const FetchPageProvider = ({ children }: FetchPageProviderProps) => {
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<FetchPageLimit>(12);
    const [totalArtworks, setTotalArtworks] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<ArtworkDetail[]>([]);

    const fetchPage = async (url: string) => {
        const apiResponse = await fetch(url).then((res) => res.json());
        setTotalArtworks(apiResponse.pagination.total);
        setTotalPages(apiResponse.pagination.total_pages);
        console.log(apiResponse);

        return ArtworksListSchema.parse(apiResponse).data;
    };

    const fetchURL = `${baseFetchURL}?page=${page}&limit=${limit}&fields=${Object.keys(ArtworkDetailSchema.shape).join(',')}`;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const pageData = await fetchPage(fetchURL);
                setData(pageData);
            } catch (err) {
                console.error('Failed to fetch page:', err);
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [fetchURL]);

    return (
        <FetchPageCtx.Provider
            value={{ page, setPage, limit, setLimit, totalPages, totalArtworks, loading, data }}
        >
            {children}
        </FetchPageCtx.Provider>
    );
};

export { FetchPageCtx, FetchPageProvider };
