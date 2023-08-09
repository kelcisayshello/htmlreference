import { createElement } from "react";

export function Table() {
    return (
        <>
            <table className="m-top-btm" style={{width: "100%"}}>
                <caption>This is an example caption for a table element</caption>
                <thead>
                    <tr>
                        <th>unique id</th>
                        <th scope="col">green</th>
                        <th scope="col">blue</th>
                        <th scope="col">red</th>
                        <th scope="col">orange</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>g1</td>
                        <td>b1</td>
                        <td>r1</td>
                        <td>o1</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>g2</td>
                        <td>b2</td>
                        <td>r2</td>
                        <td>o2</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row">Total</th>
                        <td>4 columns</td>
                        <td>2 rows</td>
                        <td>8 cells</td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}

export function OptGroup() {
    return (
        <>
            <label htmlFor="select-colors">Select an option: </label>
            <select className="m-top-btm" name="colors" id="select-colors">
                <optgroup label="Group One">
                    <option value="orange">orange</option>
                    <option value="yellow">yellow</option>
                    <option value="red">red</option>
                </optgroup>
                <optgroup label="Group Two">
                    <option value="green">green</option>
                </optgroup>
            </select>
        </>
    );
}

export function FieldSet() {
    return (
        <>
            <fieldset className="m-top-btm">
                <legend>Choose an option</legend>

                <input type="radio" id="option1" name="color" />
                <label htmlFor="option1">option one</label>

                <input type="radio" id="option2" name="color" />
                <label htmlFor="option2">option two</label>


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

export function Input() {
    return (
        <>
            <input className="m-top-btm" type="text" placeholder="Enter input text here . . ." defaultValue="" />
        </>
    )
}