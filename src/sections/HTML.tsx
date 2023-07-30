import "../css/HTML.css";

import Element from "../components/Element";

export default function HTML() {
    return (
        <>
            {/* <h2 className="site-header font-bowlby">Typography Tags</h2> */}
            <Element element="a" sample="https://www.englishclub.com/reading/cr-hare-tortoise.php" url="https://www.englishclub.com/reading/cr-hare-tortoise.php"/>
            <Element element="abbr" sample="HTML" text="HyperText Markup Language" />
            <Element element="address" sample="sample@email.com" />
            {/* <Element element="audio" source="./src/media/lujon.mp3" /> */}
            <Element element="b" sample="This sample text has been marked as bolded." />
            {/* <Element element="br" sample="br"/> */}
            <Element element="blockquote" sample="The <blockquote> HTML element indicates that the enclosed text is an extended quotation." citation="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote"/>
            <Element element="button" sample="button." />
            <Element element="code" classname="font-ubuntu" sample="This sample text is code." />
            <Element element="data" sample="This sample text shows data on hover." data="123456789" />
            <Element element="em" sample="This sample text is for emphasis!" mediatype="audio/mp4" />
            {/* <Element element="embed" source="https://open.spotify.com/embed/track/52Td1R2HmvP5gevSgUaifx?utm_source=generator&theme=0" mediatype="audio/mp4" /> */}
            <Element element="del" sample="This sample text has been marked as deleted." />
            <Element element="h1" sample="The Hare and the Tortoise" classname="font-bowlby" />
            <Element element="h2" sample="The Hare and the Tortoise" classname="font-bowlby" />
            <Element element="h3" sample="The Hare and the Tortoise" classname="font-bowlby" />
            <Element element="h4" sample="The Hare and the Tortoise" classname="font-bowlby" />
            <Element element="h5" sample="The Hare and the Tortoise" classname="font-bowlby" />
            <Element element="h6" sample="The Hare and the Tortoise" classname="font-bowlby" />
            <Element element="i" sample="This sample text has been marked as italicized." />
            {/* <Element element="input" sample="This sample text is inside an input" /> */}
            <Element element="ins" sample="This sample text has been inserted." />
            <Element element="kbd" classname="font-ubuntu" sample="ctrl" />
            <Element element="mark" sample="This sample text has been marked as highlighted." />
            <Element element="p" sample="This sample text is a paragraph." />
            <Element element="progress" data="67" />
            <Element element="q" sample="This sample text is an inline quote." />
            <Element element="s" sample="This sample text has a strikethrough." />
            <Element element="samp" sample="This is sample text displayed on a browser." />
            <Element element="small" sample="This sample text is small." />
            {/* <Element element="source" source="https://open.spotify.com/embed/track/52Td1R2HmvP5gevSgUaifx?utm_source=generator&theme=0" mediatype="audio/mp4"/> */}
            <Element element="strong" sample="This sample text has been marked as strong." />
            <Element element="u" sample="This sample text is an unarticulated annotation." />
        </>
    );
}
