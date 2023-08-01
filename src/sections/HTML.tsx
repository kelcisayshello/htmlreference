import example_map from "../media/map.png";
import example_picture from "../media/picture.png";
import example_audio from "../media/music.mp3";
import example_video from "../media/video.mp4";
import example_object from "../media/object.svg";
import { Element} from "../components/Element";
import Label from "../components/Label";
import Header from "../components/Header";

import "../css/Sections.css";


export default function HTML() {
    const date = new Date();
    let currentDate = date.toLocaleString('en', { day: 'numeric', month: 'long', year: 'numeric' });

    return (
        <>
            <Header header="HTML" />

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

            <Element element="b" sample="This sample text has been marked as bolded." />
            {/* <Element element="br" sample="br"/> */}
            <Element element="blockquote" sample="The <blockquote> HTML element indicates that the enclosed text is an extended quotation." citation="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote" />

            <div className="tag-section">
                <Label tag="br" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <p>One day the Hare laughed at the short feet and slow speed of the Tortoise. The Tortoise replied:
                        <br />
                        <br />
                        "You may be as fast as the wind, but I will beat you in a race!"
                    </p>
                </div>
            </div>

            <Element element="button" classname="m-top-btm" sample="button." />
            <Element element="code" classname="m-top-btm" sample="This sample text is code." />

            <div className="tag-section">
                <Label tag="col, colgroup, caption" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <table id="table" className="m-top-btm">
                        <caption>an example caption for a table in HTML</caption>
                        <colgroup>
                            <col />
                            <col span={4} className="colgroup" />
                        </colgroup>

                        <thead>
                            <tr>
                                <th>id</th>
                                <th scope="col">green</th>
                                <th scope="col">blue</th>
                                <th scope="col">red</th>
                                <th scope="col">orange</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>green-1.</td>
                                <td>blue-1.</td>
                                <td>red-1.</td>
                                <td>orange-1.</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>green-2.</td>
                                <td>blue-2.</td>
                                <td>red-2.</td>
                                <td>orange-2.</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope="row">Total</th>
                                <td>2 rows</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <Element element="data" sample="This sample text shows data on hover." data="123456789" />

            <div className="tag-section">
                <Label tag="datalist, option" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <label htmlFor="colors">Choose a color from the datalist:</label>
                    <input list="colors" id="label-colors" name="colors" />

                    <datalist className="m-top-btm" id="colors">
                        <option value="red" />
                        <option value="orange" />
                        <option value="yellow" />
                        <option value="green" />
                        <option value="blue" />
                    </datalist>
                </div>
            </div>

            <Element element="del" sample="This sample text has been marked as deleted." />

            <div className="tag-section">
                <Label tag="details, summary" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <details className="m-top-btm">
                        <summary>click to expand details</summary>This sample text is within a details and summary set of tags.
                    </details>

                </div>
            </div>

            <div className="tag-section">
                <Label tag="dfn" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <p>A <dfn id="dfn">hare</dfn> is a mammal belonging to the genus Lepus. They are herbivores and live solitarily or in pairs</p>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="dl, dt, dd" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <dl>
                        <dt>Description Term 1</dt>
                        <dd>The <code>&lt;dd&gt;</code> element provides the description, definition, or value for a term in a description list.</dd>

                        <dt>Description Term 2</dt>
                        <dd>This <code>&lt;dd&gt;</code> element is different than the previous one.</dd>
                    </dl>
                </div>
            </div>

            <Element element="em" sample="This sample text is for emphasis!" mediatype="audio/mp4" />

            <div className="tag-section">
                <Label tag="embed" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <embed className="m-top-btm" type="video/webm"
                        src="https://www.youtube-nocookie.com/embed/NWeyUpqnKuk?controls=1" width="560"
                        height="315" />
                </div>
            </div>

            <div className="tag-section">
                <Label tag="fieldset, legend" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <fieldset className="m-top-btm">
                        <legend>Choose your favorite color</legend>

                        <input type="radio" id="green" name="color" />
                        <label htmlFor="green">green</label>

                        <br />

                        <input type="radio" id="yellow" name="color" />
                        <label htmlFor="yellow">yellow</label>

                        <br />

                        <input type="radio" id="red" name="color" />
                        <label htmlFor="red">red</label>
                    </fieldset>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="figure, figcaption, cite" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <figure className="m-top-btm">
                        <img src={example_picture}
                            alt="HTML in void element tag brackets" />
                        <figcaption>HTML in void element tag brackets image made using <cite><a href="https://help.figma.com/hc/en-us/articles/14563969806359-What-is-Figma-">Figma</a></cite></figcaption>
                    </figure>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="form" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <form className="m-top-btm" action="" method="get">
                        <div>
                            <label htmlFor="something">Type something:</label>
                            <input type="text" name="something" id="something" required />
                            <br></br>
                            <label htmlFor="questions">Check something:</label>
                            <input type="checkbox" name="questions" id="questions" required />

                        </div>
                        <div>
                            <input type="submit" value="Submit Form" />
                        </div>
                    </form>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="footer" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <footer>
                        <p>Made by kelcisayshello © {date.getFullYear()}</p>
                    </footer>
                </div>
            </div>

            <Element element="h1" sample="The Hare and the Tortoise" classname="font-bowlby" />
            <Element element="h2" sample="The Hare and the Tortoise" classname="font-bowlby" />
            <Element element="h3" sample="The Hare and the Tortoise" classname="font-bowlby" />
            <Element element="h4" sample="The Hare and the Tortoise" classname="font-bowlby" />
            <Element element="h5" sample="The Hare and the Tortoise" classname="font-bowlby" />
            <Element element="h6" sample="The Hare and the Tortoise" classname="font-bowlby" />

            <div className="tag-section">
                <Label tag="hgroup" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <hgroup>
                        <h3>The Hare and the Tortoise</h3>
                        <p>An Aesop fable</p>
                    </hgroup>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="hr" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <hr />
                </div>
            </div>

            <Element element="i" sample="This sample text has been marked as italicized." />

            <div className="tag-section ">
                <Label tag="iframe" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <iframe className="m-top-btm" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/37N37WJQvXqplFdCwkNgX3?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>

            <div className="tag-section ">
                <Label tag="input" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <label htmlFor="input">Enter a username between <code>3</code> to <code>8</code> characters:</label>
                    <input type="text" id="input" name="input" required />
                </div>
            </div>

            <div className="tag-section">
                <Label tag="img" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <img className="m-top-btm" src={example_picture} alt="HTML inside void tag brackets" />
                </div>
            </div>

            {/* <Element element="input" sample="This sample text is inside an input" /> */}
            <Element element="ins" sample="This sample text has been inserted." />

            <Element element="kbd" classname="m-top-btm" sample="ctrl" />

            <div className="tag-section">
                <Label tag="label" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <label htmlFor="box-yes">Is this site helpful?</label>
                    <input type="checkbox" name="box-yes" id="box-yes" />
                </div>
            </div>

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

            <div className="tag-section">
                <Label tag="menu" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <menu>
                        <li><a className="menu-item">menu item 1</a></li>
                        <li><a className="menu-item">menu item 2</a></li>
                    </menu>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="meter" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <meter id="meter" value="3" min="0" max="10">3 out of 10</meter>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="object" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <object className="m-top-btm" data="object.svg" type="image/svg+xml">
                        <img src={example_object} />
                    </object>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="ol" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <ol>
                        <li><a className="menu-item">menu item 1</a></li>
                        <li><a className="menu-item">menu item 2</a></li>
                    </ol>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="optgroup" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <label htmlFor="select-colors">Please select a color: </label>
                    <select name="colors" id="select-colors">
                        <optgroup label="Warm Colors">
                            <option value="orange">orange</option>
                            <option value="yellow">yellow</option>
                            <option value="red">red</option>
                        </optgroup>
                        <optgroup label="Cool Colors">
                            <option value="green">green</option>
                        </optgroup>
                        <option value="white">white</option>
                    </select>
                </div>
            </div>

            <Element element="p" sample="This sample text is a paragraph." />

            <div className="tag-section">
                <Label tag="picture" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <picture className="m-top-btm">
                        <source srcSet={example_picture}
                            media="(orientation: portrait)" />
                        <img src={example_picture} alt="" />
                    </picture>
                </div>
            </div>

            <Element element="progress" data="67" />

            <Element element="q" sample="This sample text is an inline quote." />

            <div className="tag-section ">
                <Label tag="ruby, rt, rp" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <ruby className="m-top-btm" style={{ fontSize: "1.5rem" }}>
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
                    <label htmlFor="select-colors">Please select a color: </label>
                    <select name="colors" id="select-colors">
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

            <div className="tag-section">
                <Label tag="span" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <p>This sample text uses a <span style={{ color: "var(--yellow)", fontWeight: "700" }}>span</span> element.</p>
                </div>
            </div>

            <Element element="strong" sample="This sample text has been marked as strong." />

            <div className="tag-section">
                <Label tag="sub" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <p>One cup of H<sub>2</sub>0, please.</p>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="sup" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <p><code>2 * 2</code> is actually the same as <code>2<sup>2</sup></code>.</p>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="table, thead, tbody, tr, th, td, tfoot" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <table className="m-top-btm">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th scope="col">column</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Here is some data for row 1.</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Here is different data for row 2.</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope="row">Total</th>
                                <td>2 rows</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="textarea" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <textarea className="m-top-btm" id="story" name="story" rows={5} cols={34}>One day the Hare laughed at the short feet and slow speed of the Tortoise. The Tortoise replied . . .</textarea>

                </div>
            </div>

            <div className="tag-section">
                <Label tag="time" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <p>Today is <time dateTime={currentDate}>{currentDate}</time>.</p>
                </div>
            </div>

            <Element element="u" sample="This sample text is an unarticulated annotation." />

            <div className="tag-section">
                <Label tag="ul" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <ul>
                        <li><a className="menu-item">menu item 1</a></li>
                        <li><a className="menu-item">menu item 2</a></li>
                    </ul>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="var" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <p>The variable <var>k</var> in the equation <code>2 * k = 4</code> is equal to <code>2</code>.</p>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="video" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <video className="m-top-btm" controls width="560">
                        <source src={example_video} type="video/mp4" />Download the video in <a href={example_video}>mp4</a> format.
                    </video>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="wbr" />
                {/* <p className="tag-attribute-label">Attribute(s):</p> */}
                <div className="tag-example">
                    <p id="wbr" className="wbr">The Tortoise never stopped for a moment, walking slowly but steadily, right to the end of the course. The Hare ran fast and stopped to lie down for a rest. But he fell fast asleep. Eventually, he woke up and ran as fast as he could. But when he reached the end, he saw the Tortoise there already, sleeping comfortably after her effort.</p>
                </div>
            </div>
        </>
    );
}