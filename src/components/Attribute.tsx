import * as React from 'react';
import { useRef, useEffect } from 'react';

interface Props {
    required?: React.ReactNode;
    optional?: React.ReactNode;
    deprecated?: React.ReactNode;
}

export default function Attr({ required = "", optional = "", deprecated = "" }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    /**
     * Converts a given string of attributes separated by commas into an array then 
     * alphabetically sorts it.
     * 
     * @returns corresponding inline <p> items with the appropriate CSS attribute class.
     */
    function addAttributes() {
        let noAttributes: boolean = false;  // defaulted to false

        const requiredString = required!.toString();
        const optionalString = optional!.toString();
        const deprecatedString = deprecated!.toString();

        // (1) converts parameter strings to array
        let requiredArray = requiredString.split(",");
        let optionalArray = optionalString.split(",");
        let deprecatedArray = deprecatedString.split(", ");

        // (2) properly sets empty strings to empty array
        if (requiredString == "") { requiredArray = [] }
        if (optionalString == "") { optionalArray = []; }
        if (deprecatedString == "") { deprecatedArray = [] }

        // (3) set noAttributes variable to true if all three parameter strings are empty (HTML element has no attributes)
        if (deprecatedArray.length + optionalArray.length + requiredArray.length == 0) {
            noAttributes = true
        }

        // (4) convert attribute(s) to <p> if HTML element has at least one attribute 
        if (noAttributes == false) { 

            // (4.1) use trim() to remove whitespaces preserved from split()
            for (let i = 0; i < requiredArray.length; i++) { requiredArray[i] = requiredArray[i].trim() }
            for (let i = 0; i < optionalArray.length; i++) { optionalArray[i] = optionalArray[i].trim() }
            for (let i = 0; i < deprecatedArray.length; i++) { deprecatedArray[i] = deprecatedArray[i].trim() }

            // (4.2) alphabetically sort attribute arrays
            requiredArray = requiredArray.sort();
            optionalArray = optionalArray.sort();
            deprecatedArray = deprecatedArray.sort();

            // (4.3) place corresponding <p> element in attributes <div> with useEffect() hook
            useEffect(() => {
                const element = ref.current;
                let node, attribute;

                if (requiredArray.length >= 1) {
                    for (let i = 0; i < requiredArray.length; i++) {
                        node = document.createElement("p");
                        node.className = "tag-attribute tag-required";
                        attribute = document.createTextNode(`${requiredArray[i]}`.trim());
                        node.appendChild(attribute);
                        element!.appendChild(node);
                    }
                }

                if (optionalArray.length > 0) {
                    for (let i = 0; i < optionalArray.length; i++) {
                        node = document.createElement("p");
                        node.className = "tag-attribute tag-optional";
                        attribute = document.createTextNode(`${optionalArray[i]}`.trim());
                        node.appendChild(attribute);
                        element!.appendChild(node);
                    }
                }

                if (deprecatedArray.length > 0) {
                    for (let i = 0; i < deprecatedArray.length; i++) {
                        node = document.createElement("p");
                        node.className = "tag-attribute tag-deprecated";
                        attribute = document.createTextNode(`${deprecatedArray[i]}`.trim());
                        node.appendChild(attribute);
                        element!.appendChild(node);
                    }
                }
            }, []);
        } else {    // (5) if element has no attributes, place a <p> with word "none"
            useEffect(() => {
                const element = ref.current;
                let node, attribute;

                node = document.createElement("p");
                node.className = "tag-attribute tag-none";
                attribute = document.createTextNode("none");
                node.appendChild(attribute);
                element!.appendChild(node);
            }, []);
        }
    }
    // (6) calls addAttribute() function 
    addAttributes();

    return (
        <>
            <div className="tag-attribute-container" id="attributes" ref={ref}>
                Attribute(s):
            </div>
        </>
    );
}