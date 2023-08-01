import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

interface Props {
    description: React.ReactNode;
    href: React.ReactNode;
}

export default function Inform({ description, href }: Props) {
    const url = href!.toString();

    return (
        <>
            <table className="tag-information">
                <tr>
                    <th><FontAwesomeIcon icon={faInfo} /></th>
                    <td>
                        <p className="tag-description">{description}</p>
                        <p className="tag-link-container"><a target="_blank" href={url}>MDN Docs</a></p>
                        </td>
                </tr>
            </table>
        </>
    );
}