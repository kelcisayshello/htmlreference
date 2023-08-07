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

export function NoExample({ 
    element, 
    required="", 
    optional="", 
    deprecated="", 
    description, 
    mdn
 }: PropsNE) {
    return (
        <>
            <div className="tag-section" id={element}>
                <Label tag={element} />
                <Attr required={required} optional={optional} deprecated={deprecated} />
                <Inform description={description} mdn={mdn}/>
            </div>
        </>
    );
}

interface PropsE {
    element: string;
    description: string;
    mdn: string;

    // optional attributes
    required?: string;
    optional?: string;
    deprecated?: string;
    href?: string;
    date?: Date;
    type?: string;
    content?: string|null;
    src?: string;
    height?: string;
    width?: string;
    dir?: string;
    data?: string;
    value?: string;

    // global tag attributes
    id?: string;
    style?: string;
    title?: string;
    alt?: string;   // eventually all elements should have alt text
}

export function Example({
    element, 
    content=null, 
    title="", 
    description, 
    href, 
    required="", 
    optional="", 
    deprecated="", 
    mdn, 
    src, 
    height="", 
    width="", 
    dir, 
    value=""
}: PropsE){

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
                readOnly: true,
            },
            `${content}`);
    }

    return (
        <>
            <div className="tag-section" id={element}>
                <Label tag={element} />
                <Attr required={required} optional={optional} deprecated={deprecated} />
                <Inform description={description} mdn={mdn}/>
                <div className="tag-example">
                    <CustomElement />
                </div>
            </div>
        </>
    );
}