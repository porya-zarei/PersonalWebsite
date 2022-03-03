import {FC, useEffect, useState} from "react";
import {ROUTES} from "../../../../data/routes";
import NavLink from "../nav-link/nav-link";

interface NavListProps {
    showNavList: boolean;
}

const NavList: FC<NavListProps> = ({showNavList}) => {
    return (
        <div
            className={`w-full mt-2 md:mt-0 md:w-auto h-auto md:flex order-3 md:order-2 ${
                showNavList ? "flex" : "hidden"
            }`}>
            <ul
                className={`w-full flex justify-center items-center flex-wrap md:flex-nowrap`}>
                {ROUTES.map((route) => (
                    <li
                        key={route.title}
                        className="md:mx-4 py-2 px-2 m-1 md:my-0 rounded-md active:bg-slate-400 active:bg-opacity-10 md:p-0 w-full md:w-auto hover:text-indigo-700">
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
