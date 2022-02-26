import {FC} from "react";

interface NavLinkProps {
    href: string;
    text: string;
    className?: string;
}

const NavLink: FC<NavLinkProps> = ({href, text, className}) => {
    return (
        <a href={href} className={className}>
            {text}
        </a>
    );
};

export default NavLink;
