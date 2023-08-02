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

export function DataList() {
    return (
        <>
            <datalist className="m-top-btm" id="colors">
                <option value="red">red</option>
                <option value="r">r</option>

                <option value="w">w</option>
            </datalist>
        </>
    );
}