import {FC} from "react";
import {SOCIALS} from "../../../data/socials-data";

interface SocialIconsProps {}

const SocialIcons: FC<SocialIconsProps> = () => {
    return (
        <ul className="flex items-center space-x-4">
            {SOCIALS.map((social) => (
                <li key={social.title} className="w-10 h-10 rounded-full flex items-center justify-center">
                    <a className={`${social.color}`} href={social.href}>
                        {social.icon}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialIcons;
