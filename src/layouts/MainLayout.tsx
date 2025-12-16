import { Outlet } from 'react-router';

import { Drawer, Footer, Header } from '../components';

const MainLayout = () => {
    return (
        <div className='flex flex-col select-none'>
            <Header className='fixed z-50' />
            <Drawer className='fixed z-49' />
            <main>
                <Outlet />
            </main>

            <Footer className='pt-30 pb-20' />
        </div>
    );
};

export { MainLayout };
