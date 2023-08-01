interface Props {
    header: string
}

export default function Header({header}: Props) {
    return (
        <>
            <h2 className="site-header font-bowlby">{header} Element Tags</h2>
        </>
    );
}