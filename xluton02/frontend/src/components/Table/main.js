import React from "react";
import './main.css'

const Table = ({ data }) =>{

const columns = data[0] && Object.keys(data[0]);

return(
    <div className="Table">
        <tabel cellPadding={0} cellSpacing={0}>
            <thead>
                <tr>
                    { data[0] && columns.map(heading => <th>{ heading }</th>) }
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (<tr>{ columns.map((column) => (<td>{ row[column]}</td>))}</tr>))}
            </tbody>
        </tabel>
    </div>
);
}


export default Table;
