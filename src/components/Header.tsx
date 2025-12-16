import { Menu } from 'lucide-react';

type HeaderProps = {
    className?: string;
};

const Header = ({ className }: HeaderProps) => {
    return (
        <header className={`navbar bg-base-100 shadow-sm ${className} `}>
            <div className='navbar-start'>
                <nav className='flex w-full items-center'>
                    <label
                        htmlFor='my-drawer-4'
                        aria-label='open sidebar'
                        className='btn btn-square btn-ghost pl-1'
                    >
                        <Menu size={'1.2rem'} />
                    </label>
                </nav>
            </div>
        </header>
    );
};

export { Header };
