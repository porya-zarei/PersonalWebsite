import {FC} from "react";
import {SocialData} from "../../../data/socials-data";

interface SocialCardProps {
    social: SocialData;
}

const SocialCard: FC<SocialCardProps> = ({social}) => {
    return (
        <div className="w-full flex justify-start md:justify-center items-center m-1 p-2 rounded-md text-white">
            <span className="p-2 mr-2 text-lg">{social.icon}</span>
            <div className="p-2 flex justify-center content-center flex-wrap">
                <a href={social.href} className="w-full font-bold">
                    <span>{social.title}</span>
                </a>
                <p className="w-full text-xs text-slate-300">{social.text}</p>
            </div>
        </div>
    );
};

export default SocialCard;
