import {FC} from "react";

interface FieldsProps {}

const items = [
    {
        title: "Reactjs",
        img: "/assets/images/react-logo.svg",
        text: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. React can also be used in the development of React Native, a framework for building mobile apps using React. React is open-source software, released under the MIT license.",
        color: "indigo-900",
    },
    {
        title: "Nextjs",
        img: "/assets/images/next-js-logo.svg",
        text: "Next.js is a JavaScript framework for building efficient and accessible websites and applications. It is a framework for server-rendered applications and is optimized for the web. It is based on React.",
        color: "indigo-900",
    },
    {
        title: "Scss",
        img: "/assets/images/sass-logo.svg",
        text: "Scss is a stylesheet language that is interpreted by a compiler. It is a superset of CSS, with some syntax extensions to support variables, mixins, and more. It is a preprocessor, meaning that it is run before the CSS is compiled into a single file. It is a static language, meaning that it does not have a runtime.",
        color: "indigo-900",
    },
    {
        title: "Typescript",
        img: "/assets/images/typescript-logo.png",
        text: "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.",
        color: "indigo-900",
    },
    {
        title: "Asp.net",
        img: "/assets/images/net-core-logo.svg",
        text: "ASP.NET is a web application framework created by Microsoft for building web applications. It is a cross-platform framework that can be used to develop web applications for Windows, Mac, and Linux. It is a free and open-source software development framework.",
        color: "indigo-900",
    },
    {
        title: "C#",
        img: "/assets/images/c-sharp-logo.svg",
        text: "C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. It was developed by Microsoft within its .NET initiative and later approved as a standard by Ecma (ECMA-334).",
        color: "indigo-900",
    },
];

const Fields: FC<FieldsProps> = () => {
    return (
        <ul className="w-full py-32 h-full flex justify-center items-center scroll-smooth content-start flex-wrap overflow-y-scroll overflow-x-hidden scroll-bar-hidden">
            {items.map((item, i) => (
                <li
                    key={item.title}
                    className={`w-full h-auto p-1 flex justify-center items-center`}>
                    <div className="w-full h-auto flex justify-center items-center">
                        <div className="w-full h-full flex justify-between items-start flex-wrap overflow-hidden">
                            <div className="w-3/12 h-full flex p-2 justify-center items-center">
                                <img
                                    className="w-full h-full rounded-sm"
                                    src={item.img}
                                    alt="test"
                                />
                            </div>
                            <div className="w-8/12 h-full flex justify-start items-start content-start flex-wrap p-2">
                                <h3 className="w-full font-bold">
                                    {item.title}
                                </h3>
                                <p className="w-full text-xs">{item.text}</p>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Fields;
