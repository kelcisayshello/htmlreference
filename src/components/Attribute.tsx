import * as React from 'react';
import { useRef, useEffect } from 'react';

interface Props {
    optional: React.ReactNode;
    deprecated: React.ReactNode;
}

export default function Attr({ optional, deprecated }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    function addAttributes() {
        let o_string = optional!.toString();
        let o_arr = o_string.split(",");

        let d_string = deprecated!.toString();
        let d_arr = d_string.split(",");

        console.log(o_string);

        useEffect(() => {
            const element = ref.current;
            let node, attribute;

            return () => {
                for (let i = 0; i < o_arr.length; i++) {
                    node = document.createElement("p");
                    node.className = "tag-attribute tag-optional";
                    attribute = document.createTextNode(`${o_arr[i]}`);
                    node.appendChild(attribute);
                    element.appendChild(node);
                }

                for (let i = 0; i < d_arr.length; i++) {
                    node = document.createElement("p");
                    node.className = "tag-attribute tag-deprecated";
                    attribute = document.createTextNode(`${d_arr[i]}`);
                    node.appendChild(attribute);
                    element.appendChild(node);
                }
            };
        }, []);
    }

    addAttributes();

    return (
        <>
            <div className="tag-attribute-container" id="attributes" ref={ref}>
                Attribute(s):
            </div>
        </>
    );
}