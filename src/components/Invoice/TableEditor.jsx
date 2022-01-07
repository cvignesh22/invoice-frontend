import React, {
    useRef, useEffect, useState,
    // useContext 
} from 'react';
import TextField from '@mui/material/TextField';

// import { InvoiceDetailsContext } from '../../context/InvoiceDetailsContext';
export default function TableEditor(props) {
    // const [invoiceData, setInvoiceData] = useContext(InvoiceDetailsContext);

    const [tableVal, settableVal] = useState([])
    const data = [
        {
            // id  : 0,
            itemName: "",
            quantity: "",
            price: "",
            itemTotal: ""
        }
    ]

    const dataVal = useRef(data)
    const forceRender = useRef(false)
    const count = useRef(0)
    dataVal.current = data
    const rowData = useRef('')
    // let str = ""
    const onChangeHandler = (event, setFunction, index) => {
        event.preventDefault();
        editTableRow(index, setFunction)
    };
    const onSaveHandler = (event, index) => {
        event.preventDefault();
        dataVal.current[index] = rowData.current
        editTableRow(-1, settableVal)
    };
    const onRowEdit = (event, field) => {
        rowData.current[field] = event.target.value
    };
    const onInsertRow = (event) => {
        event.preventDefault();
        let currdata = dataVal.current;
        console.log(" bef push")
        console.log(currdata)
        currdata.push(data[0])
        console.log('currdata')
        console.log(currdata)
        dataVal.current = currdata;
        editTableRow(-1, settableVal)
    };



    function editTableRow(editindex, setFunction) {
        tableData = dataVal.current.map((value, index) => {
            if (editindex !== index) {
                return (
                    <tr key={index}>
                        <td>{value.itemName}</td>
                        <td>{value.quantity}</td>
                        <td>{value.price}</td>
                        <td>{value.itemTotal}</td>
                        <td>
                            <button onClick={e => { onChangeHandler(e, settableVal, index) }}>Edit</button>
                            <button onClick={e => { onChangeHandler(e, settableVal, index) }}>Delete</button>
                        </td>
                    </tr>)
            } else {
                rowData.current = value;
                return (
                    <tr key={index}>
                        <td><TextField className="right" size="small" variant="standard" onChange={e => onRowEdit(e, "itemName")} defaultValue={value.itemName} /></td>
                        <td><TextField className="right" size="small" variant="standard" onChange={e => onRowEdit(e, "quantity")} defaultValue={value.quantity} /></td>
                        <td><TextField className="right" size="small" variant="standard" onChange={e => onRowEdit(e, "price")} defaultValue={value.price} /></td>
                        <td><TextField className="right" size="small" variant="standard" onChange={e => onRowEdit(e, "itemTotal")} defaultValue={value.itemTotal} /></td>
                        <td>
                            <button onClick={e => { onSaveHandler(e, index) }}>Save</button>
                            <button onClick={e => { onSaveHandler(e, index) }}>Cancel</button>
                        </td>
                    </tr>)
            }
        })
        setFunction(tableData)

    }
    let renderRows = () => {
        return dataVal.current.map((value, index) => {
            return (
                <tr key={index}>
                    <td>{value.itemName}</td>
                    <td>{value.quantity}</td>
                    <td>{value.price}</td>
                    <td>{value.itemTotal}</td>
                    <td>
                        <button onClick={e => { onChangeHandler(e, settableVal, index) }}>Edit</button>
                        <button onClick={e => { onChangeHandler(e, settableVal, index) }}>Delete</button>
                    </td>
                </tr>)
        })

    }
    let tableData = renderRows()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function rerender() {
        if (!!props.value && props.value.length > 0) {
            dataVal.current = props.value
            if (count.current <= 2 && props.value.length > 0) {
                dataVal.current = props.value
                count.current = count.current + 1
                tableData = renderRows()

                settableVal(tableData)

            } else if (count <= 2) {
                count.current = count.current + 1
                tableData = renderRows()
                settableVal(tableData)
            } else if (forceRender.current) {
                forceRender.current = false
                settableVal(tableData)
            }

        }
    }
    
    
    useEffect(() => {
        // settableVal(tableData)
        rerender()
        // eslint-disable-next-line
    })




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
                    {tableVal}
                </tbody>
            </table>
            <button onClick={e => { onInsertRow(e, '') }}>Insert Row</button>
        </div>
    )
}
