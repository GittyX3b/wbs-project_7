import { Card } from './Card';

import { type ArtworkList } from '../data/types';

type CardGridProps = {
    loading: boolean;
    data: ArtworkList[];
};

const CardGrid = ({ loading, data }: CardGridProps) => {
    return (
        <>
            {!loading ? (
                <div className='grid gap-14 p-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:pl-20 xl:grid-cols-4'>
                    {data?.map((item) => (
                        <Card key={item.id} data={item} />
                    ))}
                </div>
            ) : (
                <div className='flex h-100 w-full flex-col items-center justify-start pt-20'>
                    <span className='loading loading-bars loading-xl'></span>
                    <span className='text-neutral-400'>loading</span>
                </div>
            )}
        </>
    );
};

export { CardGrid };
