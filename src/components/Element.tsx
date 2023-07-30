import { createElement } from "react";
import Label from "./Label"

export default function Element({ element, sample, classname, link }: {
    element: string;
    sample?: string;
    classname?: string;
    link?: string;
}) {
    function Elem() {
        return createElement(`${element}`, { className: `${classname}`, href: `${link}`, target: "_blank" }, `${sample}`);
    }
    return (
        <>
            <div className="tag-section">
                <Label tag={element} />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <Elem />
                </div>
            </div>
        </>
    );
}
