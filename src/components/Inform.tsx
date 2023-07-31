import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

interface Props {
    description: React.ReactNode;
}

export default function Inform({ description }: Props) {
    return (
        <>
            <table className="tag-information">
                <tr>
                    <th><FontAwesomeIcon icon={faInfo} /></th>
                    <td><p>{description}</p></td>
                </tr>
            </table>
        </>
    );
}