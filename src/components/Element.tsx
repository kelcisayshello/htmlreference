// import React from 'react';

export default function Element({element, exmpl}: { element: string; exmpl: string;}) {
    const DynamicTag: string = `${ element }` as keyof JSX.IntrinsicElements;
    return (
        <div id={element} className={element}>
            <h3 style={{ color: "#fffffe" }}>&lt;{element}&gt;</h3>
            <DynamicTag style={{ color: "#abd1c6" }}>{ exmpl }</DynamicTag>
        </div>
    );
}