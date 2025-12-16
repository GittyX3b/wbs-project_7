import { type ReactNode } from 'react';
import * as z from 'zod';

export type FetchPageContextValue = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    limit: FetchPageLimit;
    setLimit: React.Dispatch<React.SetStateAction<FetchPageLimit>>;
    totalPages: number;
    totalArtworks: number;
    loading: boolean;
    data: ArtworkDetail[] | null;
};

export type FetchPageProviderProps = {
    children: ReactNode;
};

export const FETCH_PAGE_LIMITS = [12, 24, 48, 96] as const;
export type FetchPageLimit = (typeof FETCH_PAGE_LIMITS)[number];

export const ArtworkDetailSchema = z.object({
    id: z.number(),
    title: z
        .string()
        .nullable()
        .transform((val) => val ?? 'title not found'),
    artist_title: z
        .string()
        .nullable()
        .transform((val) => val ?? 'artist not found'),
    image_id: z.string().nullable(),
});

export type ArtworkDetail = z.infer<typeof ArtworkDetailSchema>;

export const ArtworksListSchema = z.object({
    data: z.array(ArtworkDetailSchema),
});

export type ArtworkList = z.infer<typeof ArtworksListSchema>;
