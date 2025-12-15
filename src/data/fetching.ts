import { ArtworksListSchema } from './types';

const baseFetchURL = 'https://api.artic.edu/api/v1/artworks/';

const fetchPage = async (url: string) => {
    const apiResponse = await fetch(url).then((res) => res.json());

    const parsed = ArtworksListSchema.parse(apiResponse);

    return parsed.data;
};

export { baseFetchURL, fetchPage };
