import "../css/HTML.css";

import Element from "../components/Element";

export default function HTML() {
    return (
        <>
            {/* <h2 className="site-header font-bowlby">Typography Tags</h2> */}
            <Element element="a" sample="https://www.englishclub.com/reading/cr-hare-tortoise.php" link="https://www.englishclub.com/reading/cr-hare-tortoise.php"/>
            <Element element="b" sample="This sample text has been marked as bolded." />
            {/* <Element element="br" sample="br"/> */}
            <Element element="del" sample="This sample text has been marked as deleted." />
            <Element element="h1" classname="font-bowlby" sample="The Hare and the Tortoise" />
            <Element element="h2" classname="font-bowlby" sample="The Hare and the Tortoise" />
            <Element element="h3" classname="font-bowlby" sample="The Hare and the Tortoise" />
            <Element element="h4" classname="font-bowlby" sample="The Hare and the Tortoise" />
            <Element element="h5" classname="font-bowlby" sample="The Hare and the Tortoise" />
            <Element element="h6" classname="font-bowlby" sample="The Hare and the Tortoise" />
            <Element element="i" sample="This sample text has been marked as italicized." />
            <Element element="mark" sample="This sample text has been marked as highlighted." />
            <Element element="p" sample="One day the Hare laughed at the short feet and slow speed of the Tortoise." />
            <Element element="q" sample="This sample text is a quote." />
            <Element element="small" sample="This sample text is small." />
        </>
    );
}
