import React ,{useRef , useEffect , useState }from 'react';
import TextField from '@mui/material/TextField';

export default function TableEditor(props) {
    console.log(props)
    const [tableVal, settableVal] = useState([])
    let data = [
        {
            itemName: "001",
            quatity: "apple",
            price: "fruit",
            total: "red"
        }
    ]
    const dataVal = useRef('')
    if(props.value) {
        dataVal.current = JSON.parse(JSON.stringify( props.value))
    } else {
        dataVal.current = data
    }    
    console.log(dataVal.current)
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
    // if(props.value) {
    //     dataVal.current = props.value
    //     settableVal(tableData)
    // }
    useEffect(() => {
        if(props.value) {
            dataVal.current = JSON.parse(JSON.stringify( props.value))
        } else {
            dataVal.current = data
        }
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
