import { Example, NoExample } from "../components/Element";
import Header from "../components/Header";
import Label from "../components/Label";
import Attr from "../components/Attribute";
import Inform from "../components/Inform";
// import example_map from "../media/map.png";
import example_picture from "../media/picture.png";
import example_audio from "../media/music.mp3";
import example_video from "../media/video.mp4";
import example_object from "../media/object.svg";
import "../css/Sections.css";

export default function Media() {
    return (
        <>
            <Header header="Media" />

            <NoExample element="area"
                optional="alt, coords, download, href, ping, referrerpolicy, rel, shape, target"
                deprecated="name, nohref, type, hreflang"
                description="The <area> HTML element defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with hypertext links. This element is used only within a <map> element."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area"
            />

            <Example element="audio"
                src={example_audio}
                optional="src, autoplay, controls, crossorigin, anonymous, use-credentials, loop, muted, preload"
                description="The <audio> HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio"
            />

            <div className="tag-section">
                <Label tag="embed" />
                <Attr required="src, type" optional="height, width" />
                <Inform description="The <embed> HTML element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed" />
                <div className="tag-example">
                    <embed className="m-top-btm" type="video/webm"
                        src="https://www.youtube-nocookie.com/embed/NWeyUpqnKuk?controls=1" width="560"
                        height="315" />
                </div>
            </div>

            <NoExample element="figcaption"
                description="The <figcaption> HTML element represents a caption or legend describing the rest of the contents of its parent <figure> element."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption"
            />

            <NoExample element="figure"
                description="The <figure> HTML element represents self-contained content, potentially with an optional caption, which is specified using the <figcaption> element. The figure, its caption, and its contents are referenced as a single unit."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure"
            />

            <Example element="iframe"
                src="https://open.spotify.com/embed/track/6ZDPPl5r7f89l1k5M7ozZe?utm_source=generator"
                required="src"
                optional="allow, allowfullscreen, height, loading, name, referrerpolicy, sandbox, srcdoc, width"
                deprecated="algin, frameborder, longdesc, marginheight, marginwidth, scrolling"
                description="The <iframe> HTML element represents a nested browsing context, embedding another HTML page into the current one."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"
            />

            <div className="tag-section">
                <Label tag="img" />
                <Attr required="src" optional="alt, crossorigin, anonymous, use-credentials, decoding, elementtiming, height, ismap, loading, referrerpolicy, sizes, srcset, width, usemap" deprecated="align, border, hspace, longdesc, name, vspace" />
                <Inform description="The <img> HTML element embeds an image into the document." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#styling_with_css" />
                <div className="tag-example">
                    <img className="m-top-btm" src={example_picture} />
                </div>
            </div>

            <div className="tag-section">
                <Label tag="object" />
                <Attr required="data, type" optional="form, height, name, usemap, width" deprecated="archive, border, classid, codebase, codetype, declare, standby" />
                <Inform description="The <object> HTML element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object" />
                <div className="tag-example">
                    <object className="m-top-btm" type="application/pdf"
                        data={example_object}>
                    </object>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="picture" />
                <Attr />
                <Inform description="The <picture> HTML element contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture" />
                <div className="tag-example">
                    <picture className="m-top-btm">
                        <source srcSet={example_picture}
                            media="(orientation: portrait)" />
                        <img src={example_picture} alt="" />
                    </picture>
                </div>
            </div>

            <Example element="video"
                src={example_video}
                type="video/mp4"
                optional="autoplay, controls, crossorigin, anonymous, use-credentials, height, loop, muted, playsinline, poster, preload, src, width"
                content="Download video"
                width="60%"
                description="The <video> HTML element embeds a media player which supports video playback into the document. You can use <video> for audio content as well, but the <audio> element may provide a more appropriate user experience."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video"
            />
        </>
    );
}