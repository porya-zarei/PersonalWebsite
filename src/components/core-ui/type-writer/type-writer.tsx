import {FC} from "react";
import { useElementIsInViewport } from "../../../hooks/use-element-is-in-viewport.tsx";

interface TypeWriterProps {
    type: "css" | "js";
    content: string;
    className?: string;
}

const TypeWriter: FC<TypeWriterProps> = ({
    content,
    className = "",
    type = "css",
}) => {
    const [ref, isInViewPort] = useElementIsInViewport();
    return (
        <div
            ref={ref}
            className={`w-fit ${className} ${isInViewPort && "type-writer"}`}>
            {content}
        </div>
    );
};

export default TypeWriter;
