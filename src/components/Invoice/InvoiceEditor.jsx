import React, { useContext, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import './InvoiceEditor.css'
import TableEditor from './TableEditor';
import { InvoiceDetailsContext } from '../../context/InvoiceDetailsContext';
import FileUpload from './FileUpload';
import MenuItem from '@mui/material/MenuItem';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import {  format } from 'date-fns'

export default function InvoiceEditor(props) {
    const [invoiceData, setInvoiceData] = useContext(InvoiceDetailsContext);

    const onChangeHandler = (event, obj) => {
        let val = {...invoiceData};
        val[obj] = event.target.value
        setInvoiceData(val)

    };
    const onStausChangeHandler = (event, obj) => {
        let val = {...invoiceData};
        val[obj] = event.target.value
        setInvoiceData(val)
        // console.log(event.target.value)

    };
    const onDateChangeHandler = (event, obj) => {
        let val = {...invoiceData};
        val[obj] = format(event , 'yyyy-MM-dd') 
        setInvoiceData(val)
        // console.log(typeof event)

    };

    // function getSeachParams() {
        
    //     let url = process.env.REACT_APP_BASE_URI + "api/v1/invoice/" + invoiceId
    //     if (!!invoiceId) {
    //         fetch(url)
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log(data)
    //                 setInvoiceData(data)
    //                 prevInvoice.current = data;
    //                 // setValue();


    //             });
    //     }
    // }
    const inVoiceStatuses = [
        {
          value: 'accepted',
          label: 'Accepted',
        },
        {
          value: 'pending',
          label: 'Pending',
        },
        {
          value: 'rejected',
          label: 'Rejected',
        },
      ];
    useEffect(() => {
        // setInvoiceNo(invoiceData.invoiceNo)
    }, [])
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="invoce-editor-container">
            <div className="invoice-editor-general">Create / Edit Invoice</div>
            <div className="invoice-editor-company-info flex">
                <div className='invoice-editor-input-field width-25'>
                    <TextField id="company-name" label="Company Name" variant="standard" margin="dense"  value={invoiceData.companyName || ''} />
                    <TextField
                        id="bill-from"
                        label="Company Address"
                        multiline
                        rows={4}
                        variant="standard"
                        value={invoiceData.companyAddress || ''}
                    />

                </div>

                {/* <div className='invoice-editor-input-field'>
                    <div>Total Amount </div>
                    <div>2345</div>

                </div> */}

                <div className="right">

                    <TextField className="right1" id="invoice-no" label="Invoice No" 
                    value={invoiceData.invoiceNo || '' } variant="standard" margin="dense" 
                    onChange={e => onChangeHandler(e, "invoiceNo" )} />
                    <br></br>
                    {/* <TextField className="right" id="invoice-date" label="Invoice Date" variant="standard" margin="dense" 
                    value={invoiceData.invoiceDate || ''}  /> */}
                    <DesktopDatePicker label="Date desktop" inputFormat="dd/MM/yyyy"  value={invoiceData.invoiceDate} onChange={e => onDateChangeHandler(e, "invoiceDate" )}
                        renderInput={(params) => <TextField margin="dense"  variant="standard" {...params} />} />
                    <br></br>
                    <div style={{width: "100%"}}>
                    <TextField className="right1" id="invoice-status" label="Invoice Status" variant="standard" margin="dense" onChange={e => onStausChangeHandler(e, "invoiceStatus" )}
                        select value={invoiceData.invoiceStatus || 'pending'} >
                        {inVoiceStatuses.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                    </div>
                    <div className="flex">
                        <FileUpload />
                    </div>

                </div>


            </div>
            <div className="invoice-editor-item-info">
                <TableEditor />
            </div>
        </div >
        </LocalizationProvider>
    )
}



/*

<div className="invoice-editor-general-info">
invo no inv date inv status
</div>
<div className="invoice-editor-company-info">
bill from bill to
</div>
<div className="invoice-editor-item-info">
desc price qty total
</div>

*/
// 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