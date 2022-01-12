import React, { useContext, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import './InvoiceEditor.css'
import { InvoiceDetailsContext } from '../../context/InvoiceDetailsContext';
import FileUpload from './FileUpload';
import MenuItem from '@mui/material/MenuItem';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { format } from 'date-fns'
import ItemsList from './ItemsList'
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { Alert, Snackbar } from '@mui/material';

export default function InvoiceEditor(props) {
    const [invoiceData, setInvoiceData] = useContext(InvoiceDetailsContext);
    const { invoiceId } = props;
    const [open, setOpen] = useState(false);
    const [openCreateAlert, setCreateAlert] = useState(false);
    const [openUpdateAlert, setUpdateAlert] = useState(false);
    let vertical = "top";
    let horizontal = "right"


    const onChangeHandler = (event, obj) => {
        let val = { ...invoiceData };
        val[obj] = event.target.value
        setInvoiceData(val)

    };
    const onStausChangeHandler = (event, obj) => {
        let val = { ...invoiceData };
        val[obj] = event.target.value
        setInvoiceData(val)

    };
    const onDateChangeHandler = (event, obj) => {
        let val = { ...invoiceData };
        val[obj] = format(event, 'yyyy-MM-dd')
        setInvoiceData(val)

    };
    const onSubmitHandler = (event) => {
        setOpen(true)
        const url = process.env.REACT_APP_BASE_URI + "api/v1/invoice/" + invoiceData.id;
        fetch(url, {
            method: 'put',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(invoiceData)
        })
            .then(res => res.json())
            .then(res => {
                setUpdateAlert(true)
                setOpen(false)
                console.log(res);
                // window.location.reload()
            });


    };
    const onCreateHandler = (event) => {
        setOpen(true)
        const url = process.env.REACT_APP_BASE_URI + "api/v1/invoice/";
        fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(invoiceData)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setCreateAlert(true)
                setOpen(false)
            });


    };


    const onCancelHandler = (event, obj) => {
        window.location.reload()
    };
    const handleCreateClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setCreateAlert(false)
    };
    const handleUpdateClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setUpdateAlert(false)
    };

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
                        <TextField id="company-name" label="Company Name"
                            variant="standard" margin="dense" onChange={e => onChangeHandler(e, "companyName")}
                            value={invoiceData.companyName || ''} />
                        <TextField id="bill-from" label="Company Address" multiline rows={4}
                            variant="standard" value={invoiceData.companyAddress || ''}
                            onChange={e => onChangeHandler(e, "companyAddress")} />
                    </div>


                    <div className="right">

                        <TextField className="right1" id="invoice-no" label="Invoice No"
                            value={invoiceData.invoiceNo || ''} variant="standard" margin="dense"
                            onChange={e => onChangeHandler(e, "invoiceNo")} />
                        <br></br>
                        <DesktopDatePicker label="Date desktop" inputFormat="dd/MM/yyyy" value={invoiceData.invoiceDate} onChange={e => onDateChangeHandler(e, "invoiceDate")}
                            renderInput={(params) => <TextField margin="dense" variant="standard" {...params} />} />
                        <br></br>
                        <div style={{ width: "100%" }}>
                            <TextField className="right1" id="invoice-status" label="Invoice Status" variant="standard" margin="dense" onChange={e => onStausChangeHandler(e, "invoiceStatus")}
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
                    {/* <TableEditor value = {invoiceData.invoiceItems || []}  /> */}
                    <ItemsList />
                </div>
                <div className="invoice-editor-item-info flex" >
                    <TextField className="margin-left-auto" id="total-amt" label="Total Amount" variant="standard" margin="dense" onChange={e => onChangeHandler(e, "totalAmount")} value={invoiceData.totalAmount || ''} />
                </div>
                <div className="invoice-editor-btn-container">
                    {!!invoiceId && <button id="invoice-edit-update" onClick={e => { onSubmitHandler(e) }}> Update</button>}
                    {!invoiceId && <button id="invoice-edit-update" onClick={e => { onCreateHandler(e) }}> Create</button>}
                    <button id="invoice-edit-cancel" onClick={e => { onCancelHandler(e) }}> Cancel</button>
                </div>
            </div >
            <Modal open={open} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="modal-loader">
                    <CircularProgress />
                </div>
            </Modal>
            <Snackbar open={openCreateAlert} autoHideDuration={3000} onClose={handleCreateClose} anchorOrigin={{ vertical, horizontal }}>
                <Alert onClose={handleCreateClose} severity="success" sx={{ width: '100%' }}>
                    Invoice Created Successfully
                </Alert>
            </Snackbar>
            <Snackbar open={openUpdateAlert} autoHideDuration={3000} onClose={handleUpdateClose} anchorOrigin={{ vertical, horizontal }}>
                <Alert onClose={handleUpdateClose} severity="success" sx={{ width: '100%' }}>
                    Invoice Updated Successfully
                </Alert>
            </Snackbar>
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