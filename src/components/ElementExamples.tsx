import { createElement } from "react";

export function Table() {
    return (
        <>
            <table id="table" className="m-top-btm">
                <caption>an example caption for a table in HTML</caption>
                <colgroup>
                    <col />
                    <col span={4} className="colgroup" />
                </colgroup>

                <thead>
                    <tr>
                        <th>id</th>
                        <th scope="col">green</th>
                        <th scope="col">blue</th>
                        <th scope="col">red</th>
                        <th scope="col">orange</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>green-1.</td>
                        <td>blue-1.</td>
                        <td>red-1.</td>
                        <td>orange-1.</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>green-2.</td>
                        <td>blue-2.</td>
                        <td>red-2.</td>
                        <td>orange-2.</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row">Total</th>
                        <td>2 rows</td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}

export function OptGroup() {
    return (
        <>
            <label htmlFor="select-colors">Please select a color: </label>
            <select className="m-top-btm" name="colors" id="select-colors">
                <optgroup label="Warm Colors">
                    <option value="orange">orange</option>
                    <option value="yellow">yellow</option>
                    <option value="red">red</option>
                </optgroup>
                <optgroup label="Cool Colors">
                    <option value="green">green</option>
                </optgroup>
                <option value="white">white</option>
            </select>
        </>
    );
}

export function FieldSet() {
    return (
        <>
            <fieldset className="m-top-btm">
                <legend>Choose a fieldset option</legend>

                <input type="radio" id="option1" name="color" />
                <label htmlFor="option1">one</label>

                <input type="radio" id="option2" name="color" />
                <label htmlFor="option2">two</label>


                <input type="radio" id="option3" name="color" />
                <label htmlFor="option3">option three</label>
            </fieldset>
        </>
    );
}

export function List({ element }: { element: string }) {
    return createElement(
        `${element}`,
        { className: 'm-top-btm display-flex' },
        createElement('li', { className: "" }, 'This sample text is an <li> element for'), createElement('li', { className: "list-style-type-none" }, `${element}`)
    );
}