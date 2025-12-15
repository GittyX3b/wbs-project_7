import { Menu } from 'lucide-react';

const Header = () => {
    return (
        <header className='navbar bg-base-100 shadow-sm'>
            <div className='navbar-start'>
                <nav className='flex w-full items-center'>
                    <label
                        htmlFor='my-drawer-4'
                        aria-label='open sidebar'
                        className='btn btn-square btn-ghost'
                    >
                        <Menu size={'1.2rem'} />
                    </label>
                    <div className='px-4'>Navbar Title</div>
                </nav>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <span>navbar center</span>
            </div>
            <div className='navbar-end'>
                <div className='flex gap-2'>
                    <input
                        type='text'
                        placeholder='Search'
                        className='input input-bordered w-24 md:w-auto'
                    />
                </div>
            </div>
        </header>
    );
};

export { Header };
