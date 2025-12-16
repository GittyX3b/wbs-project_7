import { type ArtworkDetail } from '../data/types';

type CardProps = {
    data: ArtworkDetail;
};

const Card = ({ data }: CardProps) => {
    return (
        <div className='card bg-base-100 h-140 border border-neutral-200 grayscale-100 select-none hover:cursor-pointer hover:grayscale-0'>
            <figure className='h-2/3'>
                <img
                    src={`https://www.artic.edu/iiif/2/${data.image_id}/full/200,/0/default.jpg`}
                    alt='Shoes'
                    className='h-full w-full object-cover'
                />
            </figure>
            <div className='card-body'>
                <h3 className='card-title'>
                    {data.title.length > 30 ? data.title.slice(0, 30) + '…' : data.title}
                </h3>
                <p>{data.artist_title}</p>
                <div className='card-actions mt-14 justify-end'>
                    <button className='btn w-full'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export { Card };
