import { Hero } from '../components';
import { useFetchPage } from '../data/context/useFetchPage';

const Home = () => {
    const { data } = useFetchPage();

    return (
        <div className='w-full'>
            <Hero />
            {data?.map((item) => (
                <div key={item.id}>
                    <span>{item.title}</span> | <span>{item.id}</span> |{' '}
                    <span>{item.artist_title}</span> | <span>{item.image_id ?? 'no image'}</span>
                </div>
            ))}
        </div>
    );
};

export { Home };
