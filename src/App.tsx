import { Route, Routes } from 'react-router-dom';

import { MainLayout } from '@layouts';
import { Home } from '@pages';

const App = () => {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    {/* <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='destination'>
                        <Route path=':slug' element={<Location />} />
                    </Route> */}
                </Route>
            </Routes>
        </>
    );
};

export { App };
