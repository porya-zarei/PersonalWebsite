export interface IRoute {
    path: string;
    title: string;
}

export const ROUTES: IRoute[] = [
    {
        path: "/",
        title: "Home",
    },
    {
        path: "/about-me",
        title: "About Me",
    },
    {
        path: "/contact-me",
        title: "Contact Me",
    },
    {
        path: "/projects",
        title: "Projects",
    },
    {
        path: "/blog",
        title: "Blog",
    },
];
