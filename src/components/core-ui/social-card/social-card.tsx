import {FC} from "react";
import {SocialData} from "../../../data/socials-data";

interface SocialCardProps {
    social: SocialData;
}

const SocialCard: FC<SocialCardProps> = ({social}) => {
    return (
        <div className="w-full flex justify-center items-center group">
            <a
                href={social.href}
                className="w-full transition-all bg-indigo-900 group-hover:-translate-y-5 group border-2 border-transparent group-hover:border-white flex justify-start md:justify-center items-center m-1 p-2 rounded-md text-white">
                <span
                    className={`p-2 mr-2 transition-all text-lg group-hover:text-[${social.color}]`}>
                    {social.icon}
                </span>
                <div className="p-2 flex justify-center content-center flex-wrap">
                    <div className="w-full font-bold">
                        <span>{social.title}</span>
                    </div>
                    <p className="w-full text-xs text-slate-300">
                        {social.text}
                    </p>
                </div>
            </a>
        </div>
    );
};

export default SocialCard;
