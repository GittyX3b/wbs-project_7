import { House, Star } from 'lucide-react';
import { Outlet } from 'react-router';

const Drawer = () => {
    return (
        <aside className='drawer lg:drawer-open'>
            <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
            <main className='drawer-content'>
                <Outlet />
            </main>

            <div className='drawer-side is-drawer-close:overflow-visible'>
                <label
                    htmlFor='my-drawer-4'
                    aria-label='close sidebar'
                    className='drawer-overlay'
                ></label>
                <div className='bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64 flex min-h-full flex-col items-start'>
                    {/* Sidebar content here */}
                    <ul className='menu w-full grow'>
                        {/* List item */}
                        <li>
                            <button
                                className='is-drawer-close:tooltip is-drawer-close:tooltip-right'
                                data-tip='Homepage'
                            >
                                <House size={'1.2rem'} />
                                <span className='is-drawer-close:hidden'>Home</span>
                            </button>
                        </li>

                        {/* List item */}
                        <li>
                            <button
                                className='is-drawer-close:tooltip is-drawer-close:tooltip-right'
                                data-tip='Settings'
                            >
                                <Star size={'1.2rem'} />
                                <span className='is-drawer-close:hidden'>Favorites</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export { Drawer };
