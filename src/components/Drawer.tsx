import { House, Search, Star } from 'lucide-react';

type DrawerProps = {
    className?: string;
};

const Drawer = ({ className }: DrawerProps) => {
    return (
        <aside className={`drawer lg:drawer-open w-min ${className}`}>
            <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
            <div className='drawer-side is-drawer-close:overflow-visible'>
                <label
                    htmlFor='my-drawer-4'
                    aria-label='close sidebar'
                    className='drawer-overlay'
                ></label>
                <div className='bg-base-200 is-drawer-close:w-14 is-drawer-open:w-40 flex min-h-full flex-col items-start'>
                    {/* Sidebar content here */}
                    <ul className='menu w-full grow gap-4 pt-20'>
                        {/* List item */}
                        <li>
                            <button
                                className='is-drawer-close:tooltip is-drawer-close:tooltip-right flex h-10 items-center'
                                data-tip='Homepage'
                            >
                                <House size={'1.2rem'} />
                                <span className='is-drawer-close:hidden'>Home</span>
                            </button>
                        </li>

                        {/* List item */}
                        <li>
                            <button
                                className='is-drawer-close:tooltip is-drawer-close:tooltip-right flex h-10 items-center'
                                data-tip='Search'
                            >
                                <Search size={'1.2rem'} />
                                <span className='is-drawer-close:hidden'>Search</span>
                            </button>
                        </li>

                        {/* List item */}
                        <li>
                            <button
                                className='is-drawer-close:tooltip is-drawer-close:tooltip-right flex h-10 items-center'
                                data-tip='Favorites'
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
