import React, { useContext, useState, useEffect, useCallback, useRef } from 'react'
import { InvoiceDetailsContext } from '../../context/InvoiceDetailsContext';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';


export default function ItemsList() {
    const [invoiceData, setInvoiceData] = useContext(InvoiceDetailsContext);
    const [tableVal, settableVal] = useState([])
    // const [newItem, setNewItem] = useState({
    //     id: 0,
    //     itemName: "",
    //     quantity: "",
    //     price: "",
    //     itemTotal: ""
    // })
    const emptyVal = {
        // id: 0,
        itemName: "",
        quantity: "",
        price: "",
        itemTotal: ""
    }
    const rowData = useRef(emptyVal)
    // function renderData() {


    // }
    const renderData = useCallback(() => {
        // setOpen(true)
        console.log(invoiceData)
        if (!!invoiceData && invoiceData.invoiceItems) {
            if (invoiceData.invoiceItems.length > 0) {
                let data = invoiceData.invoiceItems.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{value.itemName}</td>
                            <td>{value.quantity}</td>
                            <td>{value.price}</td>
                            <td>{value.itemTotal}</td>
                            <td>
                                {/* <button onClick={e => { onChangeHandler(e, settableVal, index) }}>Edit</button>
                                <button onClick={e => { onChangeHandler(e, settableVal, index) }}>Delete</button> */}
                            </td>
                        </tr>)
                })
                settableVal(data)

            }
        }
    }, [invoiceData])

    const onRowEdit = (event, field) => {
        rowData.current[field] = event.target.value
        console.log(rowData.current)
    };
    const onSaveHandler = (event) => {
        event.preventDefault();
        let tempInvData = JSON.parse(JSON.stringify(invoiceData))
        if (!!invoiceData.invoiceItems) {

            tempInvData.invoiceItems.push(rowData.current)
            rowData.current = emptyVal
            setInvoiceData(tempInvData)
        } else {
            let newRow = rowData.current;
            console.log(newRow)
            // delete newRow["id"]
            console.log(newRow)
            let a = [].push(newRow)
            console.log(a)
            const newInv = {}
            const items = [];
            items.push(newRow)
            newInv["invoiceItems"] = items
            tempInvData = JSON.parse(JSON.stringify(newInv))
            setInvoiceData(tempInvData)
        }
    };

    useCallback(() => {
        renderData()
    }, [renderData]);

    useEffect(() => {
        renderData()
    }, [renderData])
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
                    <tr>
                        <td><TextField className="right" size="small" variant="filled" onChange={e => onRowEdit(e, "itemName")} defaultValue="" /></td>
                        <td><TextField className="right" size="small" variant="filled" onChange={e => onRowEdit(e, "quantity")} defaultValue="" /></td>
                        <td><TextField className="right" size="small" variant="filled" onChange={e => onRowEdit(e, "price")} defaultValue=""
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} /></td>
                        <td><TextField className="right" size="small" variant="filled" onChange={e => onRowEdit(e, "itemTotal")} defaultValue=""
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} /></td>
                        <td>
                            <Button size="small" onClick={e=>onSaveHandler(e)} variant="contained" startIcon={<AddIcon />}>Add</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <button onClick={e => { onInsertRow(e, '') }}>Insert Row</button> */}

        </div>
    )
}
