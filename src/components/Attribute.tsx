import * as React from 'react'

interface Props {
    attr: React.ReactNode;
}

export default function Attr({ attr }: Props) {
    return (
        <>
            <span className="tag-attribute">{attr}</span>
        </>
    );
}