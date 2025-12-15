import { Drawer, Footer, Header } from '@components';

const MainLayout = () => {
    return (
        <div className='grid min-h-screen grid-rows-[4rem_1fr_10rem]'>
            <Header />

            <Drawer />
            <Footer />
        </div>
    );
};

export { MainLayout };
