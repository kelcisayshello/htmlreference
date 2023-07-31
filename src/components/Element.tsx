import { createElement } from "react";
import Label from "./Label"
import Inform from "./Inform"

export function Description({ element, description }: { element: string, description?: string }) {
    return (
        <>
            <div className="tag-section">
                <Label tag={element} />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <Inform description={description} />
            </div>
        </>
    );
}

export function Element({ element,
    sample = "",
    classname = "",
    url = "",
    text = "",
    source = "",
    citation = "",
    data = "",
    mediatype = "",
    date,
}: {
    element: string;
    sample?: string;
    classname?: string;
    url?: string;
    text?: string;
    source?: string;
    citation?: string;
    data?: string;
    mediatype?: string;
    date?: Date;
}) {
    function Elem() {
        return createElement(
            `${element}`,
            {
                className: `${classname}`,
                max: 100,
                href: `${url}`,
                target: "_blank",
                title: `${text}`,
                src: `${source}`,
                cite: `${citation}`,
                value: `${data}`,
                type: `${mediatype}`,
                datetime: `${date}`,
                controls: true,
            },
            `${sample}`);
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
