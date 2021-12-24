import React, { useContext, useEffect } from 'react'
import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
import './InvoiceEditor.css'
import TableEditor from './TableEditor';
import { InvoiceDetailsContext } from '../../context/InvoiceDetailsContext';
import FileUpload from './FileUpload';

export default function InvoiceEditor(props) {
    // eslint-disable-next-line
    const [invoiceData, setInvoiceData] = useContext(InvoiceDetailsContext);
    let { invoiceId } = props;
    function getSeachParams() {
        let url = process.env.REACT_APP_BASE_URI + "api/v1/invoice/" + invoiceId
        if (!!invoiceId) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setInvoiceData(data)
                });
        }
    }
    useEffect(() => {
        getSeachParams()
        // eslint-disable-next-line
    }, [])
    return (
        <div className="invoce-editor-container">
            <div className="invoice-editor-general">Create / Edit Invoice</div>
            <div className="invoice-editor-general-info">
                <div className="right">
                    <TextField className="right  " id="invoice-no" label="Invoice No" variant="standard" margin="dense" />
                    <br></br>
                    <TextField className="right " id="invoice-date" label="Invoice Date" variant="standard" margin="dense" />
                    <br></br>
                    <TextField className="right " id="invoice-status" label="Invoice Status" variant="standard" margin="dense" />
                    <div className="flex">
                     <FileUpload />
                    </div>
                   
                </div>


                {/* invo no inv date inv status */}
            </div>
            <div className="invoice-editor-company-info flex">
                {/* <div className='invoice-editor-input-field'>
                    <TextField
                        id="bill-to"
                        label="Bill To"
                        multiline
                        rows={4}
                        variant="standard"
                    />
                </div> */}
                <div className='invoice-editor-input-field width-25'>
                    <TextField id="company-name" label="Company Name" variant="standard" margin="dense" />
                    <TextField
                        id="bill-from"
                        label="Company Address"
                        multiline
                        rows={4}
                        variant="standard"
                    />
                    
                </div>

                <div className='invoice-editor-input-field'>
                    <div>Total Amount </div>
                    <div>2345</div>
                    
                </div>

            </div>
            <div className="invoice-editor-item-info">
                <TableEditor />
            </div>
        </div >
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