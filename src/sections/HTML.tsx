import "../css/HTML.css";

import example_map from "../media/map.png";
import example_picture from "../media/picture.png";
import example_audio from "../media/lujon.mp3";

import Element from "../components/Element";
import Label from "../components/Label";

export default function HTML() {

    const date = new Date();
    let currentdate = date.toLocaleString('en', { day: 'numeric', month: 'long', year: 'numeric' });

    return (
        <>
            {/* <h2 className="site-header font-bowlby">Typography Tags</h2> */}
            <Element element="a" sample="https://www.englishclub.com/reading/cr-hare-tortoise.php" url="https://www.englishclub.com/reading/cr-hare-tortoise.php" />

            <div className="tag-section">
                <Label tag="area" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <map name="example_map">
                        <area shape="poly" coords="104,50,231,50,231,177,104,177"
                            href="https://www.color-name.com/hex/e16162"
                            target="_blank" alt="Light Carmine Pink" />
                        <area shape="poly" coords="267,213,394,213,394,340,267,340"
                            href="https://www.color-name.com/hex/f9bc60"
                            target="_blank" alt="Rajah" />
                    </map>
                    <img useMap="#example_map" className="m-top-btm" src={example_map} alt="map HTML example" />
                </div>
            </div>

            <Element element="abbr" sample="HTML" text="HyperText Markup Language" />
            <Element element="address" sample="sample@email.com" />
            <Element element="audio" classname="m-top-btm" source={example_audio} />

            <Element element="b" sample="This sample text has been marked as bolded." />
            {/* <Element element="br" sample="br"/> */}
            <Element element="blockquote" sample="The <blockquote> HTML element indicates that the enclosed text is an extended quotation." citation="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote" />
            <Element element="button" classname="m-top-btm" sample="button." />
            <Element element="code" classname="m-top-btm" sample="This sample text is code." />
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

            <div className="tag-section ">
                <Label tag="iframe" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <iframe className="m-top-btm" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/37N37WJQvXqplFdCwkNgX3?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>

            {/* <Element element="input" sample="This sample text is inside an input" /> */}
            <Element element="ins" sample="This sample text has been inserted." />
            <Element element="kbd" classname="m-top-btm" sample="ctrl" />

            <div className="tag-section ">
                <Label tag="map" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example ">
                    <map name="example_map ">
                        <area shape="poly" coords="104,50,231,50,231,177,104,177"
                            href="https://www.color-name.com/hex/e16162"
                            target="_blank" alt="Light Carmine Pink" />
                        <area shape="poly" coords="267,213,394,213,394,340,267,340"
                            href="https://www.color-name.com/hex/f9bc60"
                            target="_blank" alt="Rajah" />
                    </map>
                    <img useMap="#example_map" className="m-top-btm" src={example_map} alt="map HTML example" />
                </div>
            </div>

            <Element element="mark" classname="m-top-btm" sample="This sample text has been marked as highlighted." />
            <Element element="p" sample="This sample text is a paragraph." />
            {/* <Element element="source" source={example_picture} /> */}
            <Element element="progress" data="67" />
            <Element element="q" sample="This sample text is an inline quote." />

            <div className="tag-section ">
                <Label tag="ruby, rt, rp" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <ruby className="m-top-btm" style={{fontSize: "1.5rem"}}>
                        明日 <rp>(</rp><rt>ashita</rt><rp>)</rp>
                    </ruby>
                </div>
            </div>

            <Element element="s" sample="This sample text has a strikethrough." />
            <Element element="samp" sample="This is sample text displayed on a browser." />
            <Element element="small" sample="This sample text is small." />

            <div className="tag-section">
                <Label tag="select" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <select name="colors" id="select-colors">
                        <option value="">• please choose a color •</option>
                        <option value="green">green</option>
                        <option value="yellow">yellow</option>
                        <option value="red">red</option>
                        <option value="white">white</option>
                    </select>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="search" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <search>
                        <form action="./search/">
                            <label htmlFor="movie">Search Bar:</label>
                            <input type="search" id="search_bar" />
                        </form>
                    </search>
                </div>
            </div>

            <Element element="strong" sample="This sample text has been marked as strong." />

            <div className="tag-section">
                <Label tag="time" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <p>Today is <time dateTime={currentdate}>{currentdate}</time>.</p>
                </div>
            </div>

            <Element element="u" sample="This sample text is an unarticulated annotation." />
        </>
    );
}