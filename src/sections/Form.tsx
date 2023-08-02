import { Example } from "../components/Element";
import { DataList } from "../components/ElementExamples";
import Header from "../components/Header";
import Label from "../components/Label";
import Attr from "../components/Attribute";
import Inform from "../components/Inform";

import "../css/Sections.css";

export default function Media() {
    return (
        <>
            <Header header="Form" />

            <Example element="button"
                content="Button"
                optional="autofocus, disabled, form, formaction, formenctype, formmethod, formnovalidate, formtarget, name, popovertarget, popovertargetaction, type, value"
                description="The <button> HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"
            />

            <div className="tag-section">
                <Label tag="datalist" />
                <Attr />
                <Inform description="The <datalist> HTML element contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist" />
                <div className="tag-example">
                    <datalist className="m-top-btm datalist">
                        <option value="red" />
                        <option value="orange" />
                        <option value="yellow" />
                        <option value="green" />
                        <option value="blue" />
                    </datalist>
                </div>
            </div>

            <div className="tag-section">
                <Label tag="input" />
                <Attr optional="accept, autocomplete, capture, checked, dirname, disabled, form, formaction, formenctype,formmethod, formnovalidate, formtarget, height, list, max, maxlength, min, minlength, multiple, name, pattern, placeholder, popovertarget, popovertargetaction, readonly, required, size, src, step, type, value, width" />
                <Inform description="The <input> HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" />
                <div className="tag-example remove-flex">
                    <input className="m-top-btm" type="text" />
                </div>
            </div>

            <Example element="label"
                content="This sample text is marked as a label."
                optional="for"
                description="The <label> HTML element represents a caption for an item in a user interface."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label"
            />

            <Example element="progress"
                content="74%"
                value="74"
                required="max, value"
                description="The <progress> HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
                mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress"
            />

            <div className="tag-section">
                <Label tag="option" />
                <Attr optional="disabled, label, selected, value" />
                <Inform description="The <option> HTML element is used to define an item contained in a <select>, an <optgroup>, or a <datalist> element. As such, <option> can represent menu items in popups and other lists of items in an HTML document." href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option" />
                <div className="tag-example remove-flex">
                    <DataList />
                </div>
            </div>

        </>
    );
}