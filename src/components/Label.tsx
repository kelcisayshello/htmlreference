import * as React from 'react'

interface Props {
    tag: React.ReactNode;
}

export default function Label({ tag }: Props) {
    return (
        <>
            <h4 className="tag-label font-bowlby">&lt;{tag}&gt;</h4>
        </>
    );
}