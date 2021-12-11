import React ,{useRef , useEffect , useState }from 'react';
import TextField from '@mui/material/TextField';

export default function TableEditor() {
    const [tableVal, settableVal] = useState([])
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
    const dataVal = useRef(data)
    const rowData = useRef('')
    // let str = ""
    const onChangeHandler = (event, setFunction  , index) => {
        event.preventDefault(); 
        editThefuckingRow(index , setFunction)
    };
    const onSaveHandler = (event  , index) => {
        event.preventDefault();
        dataVal.current[index] =rowData.current
        editThefuckingRow(-1  , settableVal)


    };
    const onRowEdit = (event,field) => {
        rowData.current[field] = event.target.value 
        console.log(rowData.current)
    };


    function editThefuckingRow(editindex , setFunction ) {
        let tableData = dataVal.current.map((value, index) => {
            if (editindex !== index) {
            return (    
                <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.category}</td>
                    <td>{value.color}</td>
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
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.category}</td>
                <td>{value.color}</td>
                <td>
                    <button onClick={e => { onChangeHandler( e , settableVal , index) }}>Edit</button>
                    <button onClick={e => { onChangeHandler( e , settableVal , index) }}>Delete</button>
                </td>
            </tr>)
    })
    useEffect(() => {
        settableVal(tableData)
        // eslint-disable-next-line
    } , [])




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
        </div>
    )
}
