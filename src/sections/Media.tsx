import { Example, NoExample } from "../components/Element";
import Header from "../components/Header";
import Label from "../components/Label";
import Attr from "../components/Attribute";
import Inform from "../components/Inform";
import example_audio from "../media/music.mp3";
import example_video from "../media/video.mp4";
import "../css/Tags.css";

export default function Media() {
    return (
        <>
            <div id="mediaContainer">
                <Header header="Media" />

                <NoExample element="area"
                    optional="alt, coords, download, mdn, ping, referrerpolicy, rel, shape, target"
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

                <NoExample element="figcaption"
                    description="The <figcaption> HTML element represents a caption or legend describing the rest of the contents of its parent <figure> element."
                    mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption"
                />

                <NoExample element="figure"
                    description="The <figure> HTML element represents self-contained content, potentially with an optional caption, which is specified using the <figcaption> element. The figure, its caption, and its contents are referenced as a single unit."
                    mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure"
                />

                <Example element="iframe"
                    optional="allow, allowfullscreen, height, loading, name, referrerpolicy, sandbox, src, srcdoc, width"
                    deprecated="align, frameborder, longdesc, marginheight, marginwidth, scrolling"
                    description="The <iframe> HTML element represents a nested browsing context, embedding another HTML page into the current one."
                    mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"
                    src="https://open.spotify.com/embed/track/3OPwVR3dVHEuWkNYk6LsQl?utm_source=generator"
                />

                <div className="tag-section" id="img">
                    <Label tag="img" />
                    <Attr required="src" optional="alt, crossorigin, anonymous, use-credentials, decoding, elementtiming, height, ismap, loading, referrerpolicy, sizes, srcset, width, usemap" deprecated="align, border, hspace, longdesc, name, vspace" />
                    <Inform description="The <img> HTML element embeds an image into the document." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#styling_with_css" />
                    <div className="tag-example">
                        <img className="m-top-btm" src="https://images.unsplash.com/photo-1581918046903-97f59ebfc395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                    </div>
                </div>

                <NoExample element="map"
                    required="name"
                    description="The <map> HTML element is used with <area> elements to define an image map (a clickable link area)."
                    mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map"
                />

                <Example element="object"
                    required="data, type"
                    optional="form, height, name, usemap, width"
                    description="The <object> HTML element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin."
                    mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object"
                    data="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
                    type="image/avif"
                />

                <div className="tag-section" id="picture">
                    <Label tag="picture" />
                    <Attr />
                    <Inform description="The <picture> HTML element contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture" />
                    <div className="tag-example">
                        <picture className="m-top-btm">
                            <img src="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
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
            </div>
        </>
    );
}