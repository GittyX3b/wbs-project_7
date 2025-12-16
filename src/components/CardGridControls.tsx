import { FETCH_PAGE_LIMITS, type FetchPageLimit } from '../data/types';

type CGCprops = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    limit: FetchPageLimit;
    setLimit: React.Dispatch<React.SetStateAction<FetchPageLimit>>;
};

const CardGridControls = ({ page, setPage, limit, setLimit }: CGCprops) => {
    return (
        <div className='bg-base-200 grid w-full grid-cols-[3fr_2fr] px-10 py-5 lg:pl-20'>
            <div className='w-full bg-orange-200'>ddd</div>
            <div className='start flex flex-col items-end gap-4 text-right lg:flex-row lg:justify-end'>
                <span>Cards per page:</span>
                {FETCH_PAGE_LIMITS.map((l) => (
                    <button
                        key={l}
                        className={`btn btn-ghost btn-xs w-10 bg-white italic shadow ${limit === l ? 'btn-outline' : ''}`}
                        onClick={() => setLimit(l)}
                    >
                        {l}
                    </button>
                ))}
            </div>
        </div>
    );
};

export { CardGridControls };
