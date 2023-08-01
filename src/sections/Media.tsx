import { Example } from "../components/Element";
import Header from "../components/Header";
// import example_map from "../media/map.png";
// import example_picture from "../media/picture.png";
import example_audio from "../media/music.mp3";
import example_video from "../media/video.mp4";
// import example_object from "../media/object.svg";
import "../css/Sections.css";

export default function Media() {
    return (
        <>
            <Header header="Media" />

            <Example element="audio"
                src={example_audio}
                optional="src, autoplay, controls, crossorigin, anonymous, use-credentials, loop, muted, preload"
                description="The <audio> HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio"
            />

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