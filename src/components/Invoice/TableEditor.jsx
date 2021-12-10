import React from 'react'

export default function TableEditor() {
    const data = [
        {
            id: "001",
            name: "apple",
            category: "fruit",
            color: "red"
        },
        {
            id: "002",
            name: "melon",
            category: "fruit",
            color: "green"
        },
        {
            id: "003",
            name: "banana",
            category: "fruit",
            color: "yellow"
        }
    ]
    let str = ""
    let tableData = data.map((value, index) => {
        console.log(index)
        str = str + ` `
        return (
            <tr key={index}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.category}</td>
                <td>{value.color}</td>
                <td>
                    <button onClick={e => { e.preventDefault(); console.log(e, index) }}>Edit</button>
                    <button onClick={e => { e.preventDefault(); console.log(e, index) }}>Delete</button>
                </td>
            </tr>)
    })
    let a = tableData;
    console.log(a)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
}
