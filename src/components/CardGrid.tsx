import { Card } from './Card';

import { type ArtworkList } from '../data/types';

const CardGrid = ({ data }: ArtworkList) => {
    return (
        <div className='grid gap-14 p-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:pl-20 xl:grid-cols-4'>
            {data?.map((item) => (
                <Card key={item.id} data={item} />
            ))}
        </div>
    );
};

export { CardGrid };
