import * as z from 'zod';

export const ArtworkSchema = z.object({
    id: z.number(),
    title: z.string(),
    artist_title: z.string(),
    image_id: z.number(),
});

export type Artwork = z.infer<typeof ArtworkSchema>;
