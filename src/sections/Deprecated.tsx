// import { NoExample, Example } from "../components/Element";
import { List } from "../components/ElementExamples";
import Header from "../components/Header";
import Label from "../components/Label";
import Attr from "../components/Attribute";
import Inform from "../components/Inform";
import "../css/Tags.css";

export default function Media() {
    return (
        <>
            <div id="deprecatedContainer">
                <Header header="Deprecated" />

                <div className="tag-section" id="menu">
                    <Label tag="menu" />
                    <Attr deprecated="align, bgcolor, border, cellpadding, cellspacing, frame, rules, summary, width" />
                    <Inform description="The <table> HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" />
                    <div className="tag-example remove-flex">
                        <List element="menu" />
                    </div>
                </div>
 
            </div>
        </>
    );
}