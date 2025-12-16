import { CardGrid, CardGridControls, Hero } from '../components';
import { useFetchPage } from '../data/context/useFetchPage';

const Home = () => {
    const { data, page, setPage, limit, setLimit, totalArtworks, totalPages, loading } =
        useFetchPage();

    return (
        <div className='w-full'>
            <Hero />
            <div className='w-full pt-30 pb-15 text-center'>
                <h2>Artworks</h2>
                <span>({totalArtworks})</span>
            </div>
            <CardGridControls
                page={page}
                setPage={setPage}
                limit={limit}
                setLimit={setLimit}
                totalPages={totalPages}
                loading={loading}
            />
            <CardGrid data={data ?? []} loading={loading} />
            <CardGridControls
                page={page}
                setPage={setPage}
                limit={limit}
                setLimit={setLimit}
                totalPages={totalPages}
                loading={loading}
            />
        </div>
    );
};

export { Home };
