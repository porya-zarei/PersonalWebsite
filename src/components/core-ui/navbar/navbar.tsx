import {FC} from 'react';
import NavLink from './nav-link/nav-link';

interface NavbarProps {
    
}
 
const Navbar: FC<NavbarProps> = () => {
    return (
        <nav className="w-full flex justify-between items-center">
            <div className="p-2">Porya Zarei</div>
            <div className="p-2">
                <ul className="w-auto  flex justify-evenly items-center">
                    <li className="p-2">
                        <NavLink href="/" text="Home" />
                    </li>
                    <li className="p-2">
                        <NavLink href="/about" text="About" />
                    </li>
                    <li className="p-2">
                        <NavLink href="/projects" text="Projects" />
                    </li>
                    <li className="p-2">
                        <NavLink href="/contact" text="Contact" />
                    </li>
                </ul>
            </div>
            <div className="p-2">
                <button
                    type="button"
                    className="bg-indigo-700 rounded-full border-none py-2 px-3">
                    Let's Talk
                </button>
            </div>
        </nav>
    );
}
 
export default Navbar;