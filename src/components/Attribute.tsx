import * as React from 'react';
import { useRef, useEffect } from 'react';

interface Props {
    required?: React.ReactNode;
    optional?: React.ReactNode;
    deprecated?: React.ReactNode;
}

export default function Attr({ required, optional, deprecated }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    function addAttributes() {
        const r_string = required!.toString();
        let r_arr = r_string.split(",");
        if (r_string == "") {
            r_arr = []
        }

        for (let i = 0; i < r_arr.length; i++) {r_arr[i] = r_arr[i].trim()}


        let o_string = optional!.toString();
        let o_arr = o_string.split(",");
        if (o_string == "") {
            o_arr = []
        }

        for (let i = 0; i < o_arr.length; i++) {o_arr[i] = o_arr[i].trim()}


        let d_string = deprecated!.toString();
        let d_arr = d_string.split(", ");
        if (d_string == "") {
            d_arr = []
        }

        for (let i = 0; i < d_arr.length; i++) {d_arr[i] = d_arr[i].trim()}


        r_arr = r_arr.sort();
        console.log(r_arr);
        o_arr = o_arr.sort();
        console.log(o_arr);

        d_arr = d_arr.sort();
        console.log(d_arr);

        useEffect(() => {
            const element = ref.current;
            let node, attribute;

            return () => {

                if (r_arr.length >= 1) {
                    for (let i = 0; i < r_arr.length; i++) {
                        node = document.createElement("p");
                        node.className = "tag-attribute tag-required";
                        attribute = document.createTextNode(`${r_arr[i]}`.trim());
                        node.appendChild(attribute);
                        element.appendChild(node);
                    }
                }

                if (o_arr.length > 0) {
                    for (let i = 0; i < o_arr.length; i++) {
                        node = document.createElement("p");
                        node.className = "tag-attribute tag-optional";
                        attribute = document.createTextNode(`${o_arr[i]}`.trim());
                        node.appendChild(attribute);
                        element.appendChild(node);
                    }
                }

                if (d_arr.length > 0) {
                    for (let i = 0; i < d_arr.length; i++) {
                        node = document.createElement("p");
                        node.className = "tag-attribute tag-deprecated";
                        attribute = document.createTextNode(`${d_arr[i]}`.trim());
                        node.appendChild(attribute);
                        element.appendChild(node);
                    }
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