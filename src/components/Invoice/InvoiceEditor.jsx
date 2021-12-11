import React from 'react'
import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
import './InvoiceEditor.css'
import TableEditor from './TableEditor';

export default function InvoiceEditor() {
    return (
        <div className="invoce-editor-container">
            <div className="invoice-editor-general">Create / Edit Invoice</div>
            <div className="invoice-editor-general-info">
                <div className="right">
                    <TextField className="right  " id="standard-basic" label="Invoice No" variant="standard"  margin="dense"  />
                    <br></br>
                    <TextField className="right " id="standard-basic" label="Invoice Date" variant="standard"   margin="dense"  />
                    <br></br>
                    <TextField className="right " id="standard-basic" label="Invoice Status" variant="standard"  margin="dense"  />
                </div>


                {/* invo no inv date inv status */}
            </div>
            <div className="invoice-editor-company-info flex">
                <div className='invoice-editor-input-field'>
                    <TextField
                        id="bill-to"
                        label="Bill To"
                        multiline
                        rows={4}
                        variant="standard"
                    />
                </div>
                <div className='invoice-editor-input-field'>
                    <TextField
                        id="bill-from"
                        label="Bill From"
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
            <TableEditor/>

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
