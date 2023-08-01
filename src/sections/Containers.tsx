import "../css/Sections.css";
import { NoExample } from "../components/Element";

export default function Containers() {
    return (
        <>
            <h2 className="site-header font-bowlby">Container Element Tags</h2>

            <NoExample element="article"
                description="The <article> HTML element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article"
            />

            <NoExample element="aside"
                description="The <aside> HTML element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside"
            />

            <NoExample element="base"
                required="href"
                optional="target"
                description="The <base> HTML element specifies the base URL to use for all relative URLs in a document. There can be only one <base> element in a document."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base"
            />

            <NoExample element="body"
                required=""
                optional="onafterprint, onbeforeprint, onbeforeunload, onblur, onerror, onfocus, onhashchange,  onlanguagechange, onload, onmessage, onoffline, ononline, onpopstate, onredo, onresize, onstorage, onundo, onunload"
                deprecated="alink, background, bgcolor, bottommargin, leftmargin, link, rightmargin, text, topmargin, vlink"
                description="The <body> HTML element represents the content of an HTML document. There can be only one <body> element in a document."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body"
            />

            <NoExample element="canvas"
                optional="width, height"
                deprecated="moz-opaque"
                description="Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas"
            />

            <NoExample element="dialog"
                optional="open"
                description="The <dialog> HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or sub-window."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog"
            />

            <NoExample element="div"
                deprecated="align"
                description="The <div> HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element)."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"
            />

            <NoExample element="head"
                deprecated="profile"
                description="The <head> HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head"
            />

            <NoExample element="header"
                description="The <header> HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header"
            />

            <NoExample element="html"
                optional="xmlns"
                deprecated="manifest, version"
                description="The <html> HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html"
            />

            <NoExample element="link"
                required="href, rel"
                optional="as, crossorigin, anonymous, use-credentials, hreflang, imagesizes, imagesrcset, integrity, media, referrerpolicy, title, type"
                deprecated="target, charset, rev"
                description='The <link> HTML element specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.'
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link"
            />

            <NoExample element="main"
                description="The <main> HTML element represents the dominant content of the <body> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main"
            />

            <NoExample element="nav"
                description="The <nav> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav"
            />

            <NoExample element="output"
                required="name"
                optional="for, form"
                deprecated=""
                description="The <output> HTML element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output"
            />

            <NoExample element="meta"
                optional="charset, content, http-equiv, name"
                deprecated=""
                description="The <meta> HTML element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta"
            />

            <NoExample element="noscript"
                description="The <noscript> HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript"
            />

            <NoExample element="section"
                description="The <section> HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section"
            />

            <NoExample element="script"
                optional="async, crossorigin, defer, integrity, nomodule, nonce, referrerpolicy, src, type"
                deprecated="language, charset"
                description="The <script> HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code. The <script> element can also be used with other languages, such as WebGL's GLSL shader programming language and JSON."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script"
            />

            <NoExample element="slot"
                required="name"
                description="The <slot> HTML element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot"
            />

            <NoExample element="source"
                required="type, src"
                optional="srcset, sizes, media, height, width"
                description="The <source> HTML element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element. It is a void element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source"
            />

            <NoExample element="style"
                optional="media, nonce, title"
                deprecated="type"
                description="The <style> HTML element contains style information for a document, or part of a document. It contains CSS, which is applied to the contents of the document containing the <style> element."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style"
            />

            <NoExample element="template"
                description="The <template> HTML element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template"
            />

            <NoExample element="title"
                description="The <title> HTML element defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; tags within the element are ignored."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title"
            />

            <NoExample element="track"
                required="src"
                optional="default, kind, label, srclang"
                description="The <track> HTML element is used as a child of the media elements, <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks."
                url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track"
            />
        </>
    );
}