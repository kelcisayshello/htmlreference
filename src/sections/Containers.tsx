import "../css/Sections.css";
import { NoExample } from "../components/Element";

export default function Containers() {
    return (
        <>
            <h2 className="site-header font-bowlby">Container Element Tags</h2>

            <NoExample element="html"
                o_attr="xmlns"
                d_attr="manifest, version"
                description="The <html> HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element." />

            <NoExample element="source"
                r_attr="type, yrhh rt"
                o_attr="xmlns"
                d_attr="manifest, version"
                description="The <source> HTML element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element. It is a void element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats." />
        </>
    );
}