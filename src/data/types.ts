import { type ReactNode } from 'react';
import * as z from 'zod';

export type FetchPageContextValue = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    limit: FetchPageLimit;
    setLimit: React.Dispatch<React.SetStateAction<FetchPageLimit>>;
    data: ArtworkDetail[] | null;
};

export type FetchPageProviderProps = {
    children: ReactNode;
};

export type FetchPageLimit = 12 | 24 | 48 | 96;

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
    pagination: z.object({}),
    data: z.array(ArtworkDetailSchema),
});

export type ArtworkList = z.infer<typeof ArtworksListSchema>;
