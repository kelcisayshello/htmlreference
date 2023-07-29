import * as React from 'react'

interface Props {
    tag: React.ReactNode;
}

export default function Label({ tag }: Props) {
    return (
        <div className="tag-label">
            <h4 className="tag-label font-bowlby">&lt;{tag}&gt;</h4>
        </div>
    );
}