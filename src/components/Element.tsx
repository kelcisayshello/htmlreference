import { createElement } from "react";
import Label from "./Label"
import Inform from "./Inform"
import Attr from "./Attribute"

interface PropsNE {
    element: string;
    required?: string;
    optional?: string;
    deprecated?: string;
    description: string;
    mdn: string;
}

export function NoExample({ element, required="", optional="", deprecated="", description, mdn }: PropsNE) {
    return (
        <>
            <div className="tag-section">
                <Label tag={element} />
                <Attr required={required} optional={optional} deprecated={deprecated} />
                <Inform description={description} href={mdn}/>
            </div>
        </>
    );
}

interface PropsE {
    // required attributes
    element: string;
    description: string;
    mdn: string;

    // optional attributes
    alt?: string;   // eventually all elements should have alt text
    date?: Date;
    type?: string;
    required?: string;
    optional?: string;
    deprecated?: string;
    href?: string;
    content?: string|null;
    src?: string;
    height?: string;
    width?: string;
    dir?: string;

    // global tag attributes (optional)
    id?: string;
    style?: string;
    title?: string;
    data?: string;
    value?: string;
}

export function Example({element, content=null, title="", description, href, required="", optional="", deprecated="", mdn, src, height="", width="", dir, value=""}: PropsE){

    function CustomElement() {
        return createElement(
            `${element}`,
            {
                max: 100,
                dir: `${dir}`,
                title: `${title}`,
                href: `${href}`,
                target: "_blank",
                src: `${src}`,
                className: "m-top-btm",
                cite: `${href}`,
                controls: true,
                width: `${width}`,
                height: `${height}`,
                value: `${value}`,
            },
            `${content}`);
    }

    return (
        <>
            <div className="tag-section">
                <Label tag={element} />
                <Attr required={required} optional={optional} deprecated={deprecated} />
                <Inform description={description} href={mdn}/>
                <div className="tag-example">
                    <CustomElement />
                </div>
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
