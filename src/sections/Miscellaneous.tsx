import "../css/Sections.css";
import { NoExample } from "../components/Element";
import Header from "../components/Header";

export default function Miscellaneous() {
    return (
        <>
            <Header header="Miscellaneous" />

            <NoExample element="base"
                required="href"
                optional="target"
                description="The <base> HTML element specifies the base URL to use for all relative URLs in a document. There can be only one <base> element in a document."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base"
            />

            <NoExample element="canvas"
                optional="width, height"
                deprecated="moz-opaque"
                description="Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas"
            />

            <NoExample element="dialog"
                optional="open"
                description="The <dialog> HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or sub-window."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog"
            />


            <NoExample element="head"
                deprecated="profile"
                description="The <head> HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head"
            />

            <NoExample element="header"
                description="The <header> HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header"
            />

            <NoExample element="html"
                optional="xmlns"
                deprecated="manifest, version"
                description="The <html> HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html"
            />

            <NoExample element="link"
                required="href, rel"
                optional="as, crossorigin, anonymous, use-credentials, hreflang, imagesizes, imagesrcset, integrity, media, referrerpolicy, title, type"
                deprecated="target, charset, rev"
                description='The <link> HTML element specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.'
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link"
            />

            <NoExample element="meta"
                optional="charset, content, http-equiv, name"
                deprecated=""
                description="The <meta> HTML element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta"
            />

            <NoExample element="noscript"
                description="The <noscript> HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript"
            />

            <NoExample element="script"
                optional="async, crossorigin, defer, integrity, nomodule, nonce, referrerpolicy, src, type"
                deprecated="language, charset"
                description="The <script> HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code. The <script> element can also be used with other languages, such as WebGL's GLSL shader programming language and JSON."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script"
            />

            <NoExample element="slot"
                required="name"
                description="The <slot> HTML element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot"
            />

            <NoExample element="source"
                required="type, src"
                optional="srcset, sizes, media, height, width"
                description="The <source> HTML element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element. It is a void element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source"
            />

            <NoExample element="style"
                optional="media, nonce, title"
                deprecated="type"
                description="The <style> HTML element contains style information for a document, or part of a document. It contains CSS, which is applied to the contents of the document containing the <style> element."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style"
            />

            <NoExample element="template"
                description="The <template> HTML element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template"
            />

            <NoExample element="title"
                description="The <title> HTML element defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; tags within the element are ignored."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title"
            />

            <NoExample element="track"
                required="src"
                optional="default, kind, label, srclang"
                description="The <track> HTML element is used as a child of the media elements, <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track"
            />
        </>
    );
}