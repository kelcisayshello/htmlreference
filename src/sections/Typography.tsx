import { Example } from "../components/Element";
import Header from "../components/Header";
import Label from "../components/Label";
import Attr from "../components/Attribute";
import Inform from "../components/Inform";
import "../css/Sections.css";

export default function Media() {

    const date = new Date();
    let currentDate = date.toLocaleString('en', { day: 'numeric', month: 'long', year: 'numeric' });

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

            <Example element="abbr"
                content="HTML"
                title="HyperText Markup Language"
                required="title"
                description="The <abbr> HTML element represents an abbreviation or acronym."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr"
            />

            <Example element="address"
                content="emailaddress@domain.com"
                description="The <address> HTML element indicates that the enclosed HTML provides contact information for a person or people, or for an organization."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address"
            />

            <Example element="b"
                content="This sample text is bold."
                description="The <b> HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b"
            />

            <Example element="blockquote"
                content="This sample text is within a blockquote."
                optional="cite"
                description="The <blockquote> HTML element indicates that the enclosed text is an extended quotation. "
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote"
            />

            <Example element="bdo"
                content="هذا النص باللغة العربية."
                dir="rtl"
                required="dir"
                description="The <bdo> HTML element overrides the current directionality of text, so that the text within is rendered in a different direction."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo"
            />

            <Example element="bdi"
                content="This text is auto-bidirectionally isolated."
                dir="auto"
                required="dir"
                description="The <bdi> HTML element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi"
            />

            <div className="tag-section">
                <Label tag="br" />
                <Attr deprecated="clear" />
                <Inform description="The <br> HTML element produces a line break in text (carriage-return)." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br" />
                <div className="tag-example remove-flex">
                    <p>This is sample text before a <code>&lt;br&gt;</code> element.</p>
                    <br />
                    <p>This is sample text after a <code>&lt;br&gt;</code> element.</p>
                </div>
            </div>

            <Example element="cite"
                content="This sample text is marked as a citation."
                description="The <cite> HTML element is used to mark up the title of a cited creative work."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite"
            />

            <Example element="code"
                content="This sample text is within code tags."
                description="The <code> HTML element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent's default monospace font."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code"
            />

            <Example element="data"
                required="value"
                value="?"
                content="Hover Me."
                description="The <data> HTML element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the <time> element must be used."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data"
            />

            <Example element="del"
                content="This sample text has been marked as deleted."
                optional="cite, datetime"
                description="The <del> HTML element represents a range of text that has been deleted from a document."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del"
            />

            <Example element="dfn"
                content="This sample text has been marked as a term to be defined."
                optional="open"
                description="The <dfn> HTML element is used to indicate the term being defined within the context of a definition phrase or sentence. "
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn"
            />

            <Example element="details"
                content="This sample text has been placed within a disclosure widget."
                optional="open"
                description="The <details> HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an 'open' state."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details"
            />

            <Example element="em"
                content="This text has been stress emphasized."
                description="The <em> HTML element marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em"
            />

            <div className="tag-section">
                <Label tag="h1 - h6" />
                <Attr />
                <Inform description="The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements" />
                <div className="tag-example remove-flex">
                    <h1>The Hare and the Tortoise</h1>
                    <h2>The Hare and the Tortoise</h2>
                    <h3>The Hare and the Tortoise</h3>
                    <h4>The Hare and the Tortoise</h4>
                    <h5>The Hare and the Tortoise</h5>
                    <h6>The Hare and the Tortoise</h6>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="h2" />
                <Attr />
                <Inform description="The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements" />
                <div className="tag-example remove-flex">
                    <p>This is sample text before an <code>&lt;hr&gt;</code> element.</p>
                    <hr />
                    <p>This is sample text after an <code>&lt;hr&gt;</code> element.</p>
                </div>
            </div>

            <Example element="i"
                content="This sample text has been italicized."
                description="The <i> HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the <i> naming of this element."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i"
            />

            <Example element="ins"
                content="This sample text has been marked as inserted."
                optional="cite, datetime"
                description="The <ins> HTML element represents a range of text that has been added to a document."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins"
            />

            <Example element="kbd"
                content="CTRL"
                description="The <kbd> HTML element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. "
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd"
            />

            <Example element="mark"
                content="This sample text has been marked."
                description="The <mark> HTML element represents text which is marked or highlighted for reference or notation purposes due to the marked passage's relevance in the enclosing context."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark"
            />

            <Example element="meter"
                required="value, max"
                optional="min, low, high, optimum"
                value="67"
                content="Meter out of 100."
                description="The <meter> HTML element represents either a scalar value within a known range or a fractional value."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter"
            />

            <Example element="p"
                content="This sample text is a paragraph element."
                description="The <meter> HTML element represents either a scalar value within a known range or a fractional value."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p"
            />

            <Example element="pre"
                content="This sample text is preformatted text."
                deprecated="cols, width, wrap"
                description="The <pre> HTML element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or monospaced, font. Whitespace inside this element is displayed as written."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre"
            />

            <Example element="q"
                optional="cite"
                content="This sample text is marked as a quote."
                description="The <q> HTML element indicates that the enclosed text is a short inline quotation."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q"
            />

            <Example element="s"
                content="This sample text is in a strikethrough element."
                description="The <s> HTML element renders text with a strikethrough, or a line through it."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s"
            />

            <Example element="samp"
                content="This sample text is in a sample output element."
                description="The <samp> HTML element is used to enclose inline text which represents sample (or quoted) output from a computer program."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp"
            />

            <Example element="small"
                content="This sample text is in a small element."
                description="The <small> HTML element represents side-comments and small print, like copyright and legal text, independent of its styled presentation."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small"
            />

            <Example element="span"
                content="This sample text is in a span element."
                description="The <span> HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline-level element."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"
            />

            <Example element="strong"
                content="This sample text has been marked as strong."
                description="The <strong> HTML element indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong"
            />

            <div className="tag-section">
                <Label tag="sub" />
                <Attr />
                <Inform description="The <sub> HTML element specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub" />
                <div className="tag-example remove-flex">
                    <p>This sample text has a <sub>&lt;sub&gt;</sub> element.</p>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="sup" />
                <Attr />
                <Inform description="The <sup> HTML element specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup" />
                <div className="tag-example remove-flex">
                    <p>This sample text has a <sup>&lt;sup&gt;</sup> element.</p>
                </div>
            </div>

            <Example element="textarea"
                optional="autocomplete, autofocus, cols, dirname, disabled, form, maxlength, minlength, name, placeholder, readonly, required, rows, spellcheck, wrap"
                content="This sample text is within a text area."
                description="The <textarea> HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"
            />

            <div className="tag-section">
                <Label tag="time" />
                <Attr optional="datetime"/>
                <Inform description="The <time> HTML element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time" />
                <div className="tag-example remove-flex">
                    <p>This sample text contains today's date which is <b><time dateTime={currentDate}>{currentDate}</time></b>.</p>
                </div>
            </div>

            <Example element="u"
                content="This sample text is an unarticulated annotation."
                description="The <u> HTML element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default as a simple solid underline, but may be altered using CSS."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u"
            />

<div className="tag-section">
                <Label tag="var" />
                <Attr />
                <Inform description="The <var> HTML element represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var" />
                <div className="tag-example remove-flex">
                    <p>This sample text contains a variable <var>k</var>.</p>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="var" />
                <Attr />
                <Inform description="The <wbr> HTML element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr" />
                <div className="tag-example remove-flex">
                    <p>This sample text contains a word break opportunity after word<wbr />, however it might not be apparent because there is not enough text filling the example space to demonstrate this concept.</p>
                </div>
            </div>

        </>
    );
}