import { FC } from "react";

interface NavLinkProps {
    href: string;
    text: string;
}
 
const NavLink: FC<NavLinkProps> = ({href,text}) => {
    return ( 
        <a href={href} className="">{text}</a>
     );
}
 
export default NavLink;