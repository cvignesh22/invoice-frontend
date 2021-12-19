import React ,{useRef , useEffect , useState }from 'react';
import TextField from '@mui/material/TextField';
export default function TableData(props) {
    console.log('props.data')
    console.log(props.data)
    const [tableVal, settableVal] = useState([])
    const data = props.data
    const dataVal = useRef(data)
    const rowData = useRef('')
    // let str = ""
    const onChangeHandler = (event, setFunction  , index) => {
        event.preventDefault(); 
        editTableRow(index , setFunction)
    };
    const onSaveHandler = (event  , index) => {
        event.preventDefault();
        dataVal.current[index] =rowData.current
        editTableRow(-1  , settableVal)


    };
    const onRowEdit = (event,field) => {
        rowData.current[field] = event.target.value 
        console.log(rowData.current)
    };


    function editTableRow(editindex , setFunction ) {
        let tableData = dataVal.current.map((value, index) => {
            if (editindex !== index) {
            return (    
                <tr key={index}>
                    <td>{value.invoiceNo}</td>
                    <td>{value.companyName}</td>
                    <td>{value.invoiceDate}</td>
                    <td>{value.totalAmount}</td>
                    <td>{value.invoiceStatus}</td>
                    <td>
                        <button onClick={e => { onChangeHandler( e , settableVal , index) }}>Edit</button>
                        <button onClick={e => { onChangeHandler( e , settableVal , index) }}>Delete</button>
                    </td>
                </tr>)
            } else {
                rowData.current = value;
                return (    
                    <tr key={index}>
                        <td><TextField className="right"  size="small"  variant="standard" onChange={e => onRowEdit(e, "id")} defaultValue={value.id} /></td>
                        <td><TextField className="right"  size="small"  variant="standard" onChange={e => onRowEdit(e, "name")} defaultValue={value.name} /></td>
                        <td><TextField className="right"  size="small"  variant="standard" onChange={e => onRowEdit(e, "category")} defaultValue={value.category} /></td>
                        <td><TextField className="right"  size="small"  variant="standard" onChange={e => onRowEdit(e, "color")} defaultValue={value.color} /></td>
                        <td>
                            <button onClick={e => { onSaveHandler( e ,  index) }}>Save</button>
                            <button onClick={e => { onSaveHandler( e ,  index) }}>Cancel</button>
                        </td>
                    </tr>)
            }
        })
        setFunction(tableData)

    }
    console.log('here1')
    let tableData = dataVal.current.map((value, index) => {
        return (
            <tr key={index}>
                    <td>{value.invoiceNo}</td>
                    <td>{value.companyName}</td>
                    <td>{value.invoiceDate}</td>
                    <td>{value.totalAmount}</td>
                    <td>{value.invoiceStatus}</td>
                <td>
                    {/* <button onClick={e => { onChangeHandler( e , settableVal , index) }}>Edit</button>
                    <button onClick={e => { onChangeHandler( e , settableVal , index) }}>Delete</button> */}
                    <button>Hi</button>
                </td>
            </tr>)
    })
    useEffect(() => {
        settableVal(tableData)
        console.log("props")
        console.log(props.data)
        // eslint-disable-next-line
    } , [])




    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Invoice No</th>
                        <th>Company Name</th>
                        <th>Invoice Date</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableVal}
                </tbody>
            </table>
        </div>
    )
}
// test data
// const data = [
    //     {
    //         "id": 3,
    //         "invoiceNo": "INV003",
    //         "companyName": "LPC",
    //         "invoiceDate": "2021-12-16",
    //         "totalAmount": "1000",
    //         "fileName": null,
    //         "fileData": null,
    //         "invoiceStatus": "pending"
    //     },
    //     {
    //         "id": 3,
    //         "invoiceDate": "2021-12-16",
    //         "invoiceNo": "INV004",
    //         "companyName": "LPC",
    //         "totalAmount": "1000",
    //         "fileName": null,
    //         "fileData": null,
    //         "invoiceStatus": "pending"
    //     },
    //     {
    //         "id": 3,
    //         "invoiceDate": "2021-12-16",
    //         "invoiceNo": "INV005",
    //         "companyName": "LPC",
    //         "totalAmount": "1000",
    //         "fileName": null,
    //         "fileData": null,
    //         "invoiceStatus": "pending"
    //     }
    // ]