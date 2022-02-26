import {FC, useState} from "react";
import NavList from "./nav-list/nav-list";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    const [showNavList, setShowNavList] = useState(false);
    return (
        <nav className="z-50 bg-white w-full flex justify-between items-center flex-wrap md:flex-nowrap py-2 px-12 shadow-md">
            <div className="order-1 font-mono">Porya</div>
            <NavList showNavList={showNavList} />
            <div className="order-2 md:order-3 flex justify-center items-center">
                <button
                    onClick={() => setShowNavList((p) => !p)}
                    type="button"
                    className="p-2 md:hidden rounded-md font-bold h-10 w-10 flex justify-center items-center">
                    {showNavList ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 8h16M4 16h16"
                            />
                        </svg>
                    )}
                </button>
                <button
                    type="button"
                    className="hidden md:flex py-2 px-3 rounded-full bg-indigo-700 text-white">
                    Let's Talk
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
