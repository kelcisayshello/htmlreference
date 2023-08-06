interface Props {
    header: string
}

export default function Header({header}: Props) {
    return (
        <>
            <h2 className="section-header font-bowlby">{header} Element Tags</h2>
        </>
    );
}