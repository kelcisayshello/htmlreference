import { NoExample, Example } from "../components/Element";
import { FieldSet, Input, OptGroup } from "../components/ElementExamples";
import Header from "../components/Header";
import Label from "../components/Label";
import Attr from "../components/Attribute";
import Inform from "../components/Inform";
import "../css/Tags.css";

export default function Media() {
    return (
        <>
            <div id="formContainer">
                <Header header="Form" />

                <Example element="button"
                    content="Click me!"
                    optional="autofocus, disabled, form, formaction, formenctype, formmethod, formnovalidate, formtarget, name, popovertarget, popovertargetaction, type, value"
                    description="The <button> HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology."
                    mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"
                />

                <NoExample element="datalist"
                    description="The <datalist> HTML element contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls."
                    mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist"
                />

                <div className="tag-section" id="fieldset">
                    <Label tag="fieldset" />
                    <Attr optional="disabled, form, name" />
                    <Inform description="The <fieldset> HTML element is used to group several controls as well as labels (<label>) within a web form." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset" />
                    <div className="tag-example">
                        <FieldSet />
                    </div>
                </div>

                <div className="tag-section" id="input">
                    <Label tag="input" />
                    <Attr optional="accept, autocomplete, capture, checked, dirname, disabled, form, formaction, formenctype,formmethod, formnovalidate, formtarget, height, list, max, maxlength, min, minlength, multiple, name, pattern, placeholder, popovertarget, popovertargetaction, readonly, required, size, src, step, type, value, width" />
                    <Inform description="The <input> HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" />
                    <div className="tag-example remove-flex">
                        <Input />
                    </div>
                </div>

                <Example element="label"
                    content="This sample text is marked as a label."
                    optional="for"
                    description="The <label> HTML element represents a caption for an item in a user interface."
                    mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label"
                />

                <NoExample element="legend"
                    description="The <legend> HTML element represents a caption for the content of its parent <fieldset>."
                    mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend"
                />

                <div className="tag-section" id="optgroup">
                    <Label tag="optgroup" />
                    <Attr optional="disabled, label" />
                    <Inform description="The <optgroup> HTML element creates a grouping of options within a <select> element." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup" />
                    <div className="tag-example">
                        <OptGroup />
                    </div>
                </div>

                <NoExample element="option"
                    optional="disabled, label, selected, value"
                    description="The <option> HTML element is used to define an item contained in a <select>, an <optgroup>, or a <datalist> element. As such, <option> can represent menu items in popups and other lists of items in an HTML document."
                    mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option"
                />

                <NoExample element="search"
                    description="The <search> HTML element is a container representing the parts of the document or application with form controls or other content related to performing a search or filtering operation. The <search> element semantically identifies the purpose of the element's contents as having search or filtering capabilities."
                    mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search"
                />

                <div className="tag-section" id="select">
                    <Label tag="select" />
                    <Attr optional="autocomplete, autofocus, disabled, form, multiple, name, required, size" />
                    <Inform description="The <select> HTML element represents a control that provides a menu of options." mdn="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select" />
                    <div className="tag-example">
                        <OptGroup />
                    </div>
                </div>
            </div>
        </>
    );
}