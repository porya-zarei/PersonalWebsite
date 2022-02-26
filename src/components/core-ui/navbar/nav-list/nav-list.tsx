import {FC, useEffect, useState} from "react";
import NavLink from "../nav-link/nav-link";

interface NavListProps {
    showNavList: boolean;
}

const NavList: FC<NavListProps> = ({showNavList}) => {
    return (
        <div
            className={`w-full md:w-auto h-auto md:flex order-3 md:order-2 ${
                showNavList ? "flex" : "hidden"
            }`}>
            <ul className={`w-full flex justify-center items-center flex-wrap md:flex-nowrap`}>
                <li className="md:mx-4 w-full md:w-auto hover:text-indigo-700">
                    <NavLink href="/" className="" text="Home" />
                </li>
                <li className="md:mx-4 w-full md:w-auto hover:text-indigo-700">
                    <NavLink href="/about" text="About" />
                </li>
                <li className="md:mx-4 w-full md:w-auto hover:text-indigo-700">
                    <NavLink href="/projects" text="Projects" />
                </li>
                <li className="md:mx-4 w-full md:w-auto hover:text-indigo-700">
                    <NavLink href="/contact" text="Contact" />
                </li>
            </ul>
        </div>
    );
};

export default NavList;
