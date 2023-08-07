export default function Footer() {
    const date = new Date();

    return (
        <>
            <footer className="site-footer">
                <p>Copyright © {date.getFullYear()} • Made by <a target="_blank" href="https://www.github.com/kelcisayshello">kelcisayshello</a></p>
            </footer>
        </>
    );
}