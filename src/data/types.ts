import * as z from 'zod';

const ArtworkSchema = z.object({
    id: z.number(),
    title: z.string(),
    artist_title: z.string(),
    image_id: z.number(),
});

type Artwork = z.infer<typeof ArtworkSchema>;
