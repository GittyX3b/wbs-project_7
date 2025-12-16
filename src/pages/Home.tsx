import { CardGrid, CardGridControls, Hero } from '../components';
import { useFetchPage } from '../data/context/useFetchPage';

const Home = () => {
    const { data, page, setPage, limit, setLimit } = useFetchPage();

    return (
        <div className='w-full'>
            <Hero />
            <h2 className='w-full pt-30 pb-15 text-center'>Artworks</h2>
            <CardGridControls page={page} setPage={setPage} limit={limit} setLimit={setLimit} />
            <CardGrid data={data ?? []} />
            <CardGridControls page={page} setPage={setPage} limit={limit} setLimit={setLimit} />
        </div>
    );
};

export { Home };
