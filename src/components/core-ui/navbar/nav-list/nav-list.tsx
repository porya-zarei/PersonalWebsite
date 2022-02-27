import {FC, useEffect, useState} from "react";
import {ROUTES} from "../../../../data/routes";
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
            <ul
                className={`w-full flex justify-center items-center flex-wrap md:flex-nowrap`}>
                {ROUTES.map((route) => (
                    <li
                        key={route.title}
                        className="md:mx-4 w-full md:w-auto hover:text-indigo-700">
                        <NavLink
                            href={route.path}
                            className=""
                            text={route.title}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavList;
