import { createElement } from "react";
import Label from "./Label"
import Inform from "./Inform"
import Attr from "./Attribute"

interface Props {
    element: string;
    required?: string;
    optional?: string;
    deprecated?: string;
    description: string;
    url: string;
}

export function NoExample({ element, required="", optional="", deprecated="", description, url }: Props) {
    return (
        <>
            <div className="tag-section">
                <Label tag={element} />
                <Attr required={required} optional={optional} deprecated={deprecated} />
                <Inform description={description} href={url}/>
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
