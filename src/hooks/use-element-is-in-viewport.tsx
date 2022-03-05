import {RefObject, useEffect, useRef, useState} from "react";

export const useElementIsInViewport = (): [
    RefObject<HTMLDivElement>,
    boolean,
] => {
    const [isInViewport, setIsInViewport] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsInViewport(entry.isIntersecting);
        });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);

    return [ref, isInViewport];
};
