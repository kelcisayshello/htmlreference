import "../css/Sections.css";
import { NoExample } from "../components/Element";
import Header from "../components/Header";

export default function Containers() {
    return (
        <>
            <Header header="Container" />

            <NoExample element="article"
                description="The <article> HTML element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article"
            />

            <NoExample element="aside"
                description="The <aside> HTML element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside"
            />

            <NoExample element="body"
                required=""
                optional="onafterprint, onbeforeprint, onbeforeunload, onblur, onerror, onfocus, onhashchange,  onlanguagechange, onload, onmessage, onoffline, ononline, onpopstate, onredo, onresize, onstorage, onundo, onunload"
                deprecated="alink, background, bgcolor, bottommargin, leftmargin, link, rightmargin, text, topmargin, vlink"
                description="The <body> HTML element represents the content of an HTML document. There can be only one <body> element in a document."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body"
            />

            <NoExample element="div"
                deprecated="align"
                description="The <div> HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element)."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"
            />

            <NoExample element="main"
                description="The <main> HTML element represents the dominant content of the <body> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main"
            />

            <NoExample element="nav"
                description="The <nav> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav"
            />

            <NoExample element="output"
                required="name"
                optional="for, form"
                deprecated=""
                description="The <output> HTML element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output"
            />

            <NoExample element="section"
                description="The <section> HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section"
            />

            <NoExample element="footer"
                description="The <footer> HTML element represents a footer for its nearest ancestor sectioning content or sectioning root element. A <footer> typically contains information about the author of the section, copyright data or links to related documents."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer"
            />

        </>
    );
}