import { FETCH_PAGE_LIMITS, type FetchPageLimit } from '../data/types';

type CGCprops = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    limit: FetchPageLimit;
    setLimit: React.Dispatch<React.SetStateAction<FetchPageLimit>>;
    totalPages: number;
    loading: boolean;
};

const CardGridControls = ({ page, setPage, limit, setLimit, totalPages, loading }: CGCprops) => {
    return (
        <div className='bg-base-200 grid w-full grid-cols-[3fr_2fr] px-10 py-5 lg:pl-20'>
            <div className='flex w-full items-center gap-4'>
                <span className='pr-3'>Page:</span>
                {page - 100 > 0 && (
                    <button
                        className={`btn btn-ghost btn-xs w-12 bg-white italic shadow`}
                        onClick={() => setPage(page - 100 > 0 ? page - 100 : 1)}
                        disabled={loading ? true : false}
                    >
                        - 100
                    </button>
                )}
                {page - 10 > 0 && (
                    <button
                        className={`btn btn-ghost btn-xs w-10 bg-white italic shadow`}
                        onClick={() => setPage(page - 10 > 0 ? page - 10 : 1)}
                        disabled={loading ? true : false}
                    >
                        - 10
                    </button>
                )}
                {page - 1 > 0 && (
                    <button
                        className={`btn btn-ghost btn-xs w-10 bg-white italic shadow`}
                        onClick={() => setPage(page - 1 > 0 ? page - 1 : 1)}
                        disabled={loading ? true : false}
                    >
                        - 1
                    </button>
                )}

                <span className='border-base-200 rounded border bg-white px-5 py-2 font-bold'>
                    {page} / {totalPages}
                </span>
                {page + 1 <= totalPages && (
                    <button
                        className={`btn btn-ghost btn-xs w-10 bg-white italic shadow`}
                        onClick={() => setPage(page + 1)}
                        disabled={loading ? true : false}
                    >
                        1 +
                    </button>
                )}

                {page + 10 <= totalPages && (
                    <button
                        className={`btn btn-ghost btn-xs w-10 bg-white italic shadow`}
                        onClick={() => setPage(page + 10)}
                        disabled={loading ? true : false}
                    >
                        10 +
                    </button>
                )}

                {page + 100 <= totalPages && (
                    <button
                        className={`btn btn-ghost btn-xs w-12 bg-white italic shadow`}
                        onClick={() => setPage(page + 100)}
                        disabled={loading ? true : false}
                    >
                        100 +
                    </button>
                )}
            </div>
            <div className='start flex flex-col items-end gap-4 text-right lg:flex-row lg:items-center lg:justify-end'>
                <span>Cards per page:</span>
                {FETCH_PAGE_LIMITS.map((l) => (
                    <button
                        key={l}
                        className={`btn btn-ghost w-10 bg-white italic shadow ${limit === l ? 'btn-outline btn-sm' : 'btn-xs'}`}
                        onClick={() => setLimit(l)}
                        disabled={loading ? true : false}
                    >
                        {l}
                    </button>
                ))}
            </div>
        </div>
    );
};

export { CardGridControls };
