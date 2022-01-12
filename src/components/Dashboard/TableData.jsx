import React ,{useRef , useEffect , useState , useContext }from 'react';
import './TableData.css'

import {
    // BrowserRouter as Router,
    // Routes,
    // Route,
    // Navigate,
    // NavLink,
    useNavigate,
    // createSearchParams,
    
  } from 'react-router-dom';
import { InvoiceDetailsContext } from '../../context/InvoiceDetailsContext';
  

export default function TableData(props) {
    console.log('props.data')
    console.log(props.data)
    const [tableVal, settableVal] = useState([])
    const navigate = useNavigate();
    const data = props.data
    const dataVal = useRef(data)
    const [, setInvoiceData] = useContext(InvoiceDetailsContext);
    // let str = ""

    const onSelectHandler = (event  , index) => {
        event.preventDefault();
        setInvoiceData('');
        let searchId = dataVal.current[index].id
        navigate({
            pathname: '/invoice',
            search: `?id=${searchId}`,
          });
    };
    function setInvoiceStatus(data) {
        let display = data.toString().toUpperCase();
        switch (data) {
            case "accepted":
                return (<div className='tag-success'><b>{display}</b></div>)
            case "pending":
                return (<div className='tag-warning'><b>{display}</b></div>)
            case "rejected":
                return (<div className='tag-failure'><b>{display}</b></div>)
            default:
                return (<div ><b>{display}</b></div>)
        }
    }
    
    let tableData = dataVal.current.map((value, index) => {
        return (
            <tr key={index}>
                    <td>{value.invoiceNo}</td>
                    <td>{value.companyName}</td>
                    <td>{value.fileName}</td>
                    <td>{value.invoiceDate}</td>
                    <td>{value.totalAmount}</td>
                    <td>{setInvoiceStatus(value.invoiceStatus)}</td>
                <td>
                    <button className='table-data-view-btn' onClick={e => { onSelectHandler( e ,  index) }}>Edit/View</button>
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
                        <th>File Name</th>
                        <th>Invoice Date</th>
                        <th>Total</th>
                        <th style={{width:"6vw"}}>Status</th>
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