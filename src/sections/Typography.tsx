import { Example } from "../components/Element";
import Header from "../components/Header";
import "../css/Sections.css";

export default function Media() {
    return (
        <>
            <Header header="Typography" />

            <Example element="a"
                content="The Hare and the Tortoise"
                required="href"
                optional="download, hreflang, ping, referrerpolicy, rel, target, type"
                deprecated="charset, coords, name, rev, shape"
                href="https://www.englishclub.com/reading/cr-hare-tortoise.php"
                description="The <a> HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
            />
        </>
    );
}