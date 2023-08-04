import { Example, NoExample } from "../components/Element";
import { Table, List } from "../components/ElementExamples";
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
                <Inform description="The <br> HTML element produces a line break in text (carriage-return)." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br" />
                <div className="tag-example remove-flex">
                    <p>This is sample text before a <code>&lt;br&gt;</code> element.</p>
                    <br />
                    <p>This is sample text after a <code>&lt;br&gt;</code> element.</p>
                </div>
            </div>

            <NoExample element="caption"
                deprecated="align"
                description="The <caption> HTML element specifies the caption (or title) of a table."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption"
            />

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

            <NoExample element="col"
                deprecated="align, bgcolor, char, charoff, valign, width"
                description="The <col> HTML element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col"
            />

            <NoExample element="colgroup"
                deprecated="align, bgcolor, char, charoff, valign"
                description="The <colgroup> HTML element defines a group of columns within a table."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup"
            />

            <Example element="data"
                required="value"
                value="?"
                content="Hover Me."
                description="The <data> HTML element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the <time> element must be used."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data"
            />

            <NoExample element="dd"
                deprecated="nowrap"
                description="The <dd> HTML element provides the description, definition, or value for the preceding term (<dt>) in a description list (<dl>)."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd"
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

            <div className="tag-section">
                <Label tag="dl" />
                <Attr />
                <Inform description="The <dl> HTML element represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements)." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl" />
                <div className="tag-example">
                    <dl>
                        <dt>Description Term 1</dt>
                        <dd>The <code>&lt;dd&gt;</code> element provides the description, definition, or value for a term in a description list.</dd>

                        <dt>Description Term 2</dt>
                        <dd>This <code>&lt;dd&gt;</code> element is different than the previous one.</dd>
                    </dl>
                </div>
            </div>

            <NoExample element="dt"
                description="The <dt> HTML element specifies a term in a description or definition list, and as such must be used inside a <dl> element. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt"
            />

            <Example element="em"
                content="This text has been stress emphasized."
                description="The <em> HTML element marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em"
            />

            <div className="tag-section">
                <Label tag="h1 - h6" />
                <Attr />
                <Inform description="The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements" />
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
                <Inform description="The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements" />
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

            <NoExample element="li"
                optional="value"
                deprecated="type"
                description="The <li> HTML element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li"
            />

            <NoExample element="map"
                required="name"
                description="The <map> HTML element is used with <area> elements to define an image map (a clickable link area)."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map"
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

            <div className="tag-section">
                <Label tag="menu" />
                <Attr deprecated="align, bgcolor, border, cellpadding, cellspacing, frame, rules, summary, width" />
                <Inform description="The <table> HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" />
                <div className="tag-example remove-flex">
                    <List element="menu" />
                </div>
            </div>

            <div className="tag-section">
                <Label tag="ol" />
                <Attr optional="reversed, start, type" />
                <Inform description="The <ol> HTML element represents an ordered list of items — typically rendered as a numbered list." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol" />
                <div className="tag-example remove-flex">
                    <List element="ol" />
                </div>
            </div>

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

            <NoExample element="rp"
                description="The <rp> HTML element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the <ruby> element. One <rp> element should enclose each of the opening and closing parentheses that wrap the <rt> element that contains the annotation's text."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp"
            />

            <NoExample element="rt"
                description="The <rt> HTML element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <rt> element must always be contained within a <ruby> element."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt"
            />

            <div className="tag-section">
                <Label tag="ruby" />
                <Attr />
                <Inform description="The <ruby> HTML element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby" />
                <div className="tag-example">
                    <ruby className="m-top-btm" style={{ fontSize: "1.5rem" }}>
                        明日 <rp>(</rp><rt>ashita</rt><rp>)</rp>
                    </ruby>
                </div>
            </div>

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
                <Label tag="table" />
                <Attr deprecated="align, bgcolor, border, cellpadding, cellspacing, frame, rules, summary, width" />
                <Inform description="The <table> HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" />
                <div className="tag-example remove-flex">
                    <Table />
                </div>
            </div>

            <NoExample element="tbody"
                deprecated="align, bgcolor, char, charoff, valign"
                description="The <tbody> HTML element encapsulates a set of table rows (<tr> elements), indicating that they comprise the body of the table (<table>)."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody"
            />

            <NoExample element="td"
                optional="colspan, headers, rowspan"
                deprecated="abbr, align, axis, bgcolor, char, charoff, height, scope, valign, width"
                description="The <td> HTML element defines a cell of a table that contains data. It participates in the table model."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td"
            />

            <NoExample element="tfoot"
                deprecated="align, bgcolor, char, charoff, valign"
                description="The <tfoot> HTML element defines a set of rows summarizing the columns of the table."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot"
            />

            <NoExample element="th"
                deprecated="align, bgcolor, char, charoff, valign"
                description="The <th> HTML element defines a cell as the header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th"
            />

            <NoExample element="thead"
                deprecated="align, bgcolor, char, charoff, valign"
                description="The <thead> HTML element defines a set of rows defining the head of the columns of the table."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead"
            />

            <NoExample element="tr"
                deprecated="align, bgcolor, char, charoff, valign"
                description="The <tr> HTML element defines a row of cells in a table. The row's cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr"
            />

            <div className="tag-section">
                <Label tag="sub" />
                <Attr />
                <Inform description="The <sub> HTML element specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub" />
                <div className="tag-example remove-flex">
                    <p>This sample text has a <sub>&lt;sub&gt;</sub> element.</p>
                </div>
            </div>

            <NoExample element="summary"
                description="The <summary> HTML element specifies a summary, caption, or legend for a <details> element's disclosure box. Clicking the <summary> element toggles the state of the parent <details> element open and closed."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary"
            />

            <div className="tag-section">
                <Label tag="sup" />
                <Attr />
                <Inform description="The <sup> HTML element specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup" />
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
                <Attr optional="datetime" />
                <Inform description="The <time> HTML element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time" />
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
                <Label tag="ul" />
                <Attr deprecated="compact, type" />
                <Inform description="The <ul> HTML element represents an unordered list of items, typically rendered as a bulleted list." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul" />
                <div className="tag-example remove-flex">
                    <List element="ul" />
                </div>
            </div>

            <div className="tag-section">
                <Label tag="var" />
                <Attr />
                <Inform description="The <var> HTML element represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var" />
                <div className="tag-example remove-flex">
                    <p>This sample text contains a variable <var>k</var>.</p>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="var" />
                <Attr />
                <Inform description="The <wbr> HTML element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr" />
                <div className="tag-example remove-flex">
                    <p>This sample text contains a word break opportunity after <i>this</i><wbr />, however it might not be apparent to the user because there is not enough text filling the example space to demonstrate this concept.</p>
                </div>
            </div>

        </>
    );
}