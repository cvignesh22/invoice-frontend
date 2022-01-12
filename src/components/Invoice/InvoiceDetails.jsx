import React, { useEffect, useContext , useState} from 'react'
// import { sampleBase64pdf } from './PdfSample'
import { nopdf } from './NoPdf'
import PdfViewer from './PdfViewer'
import './InvoiceDetails.css'
import InvoiceEditor from './InvoiceEditor'
import { useSearchParams } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'
// import { AuthContext } from './context/AuthContext'
import { InvoiceDetailsContext } from '../../context/InvoiceDetailsContext';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';





export default function InvoiceDetails() {
    // check for token  and proceed
    const navigate = useNavigate();
    const [,,authcheck] = useContext(AuthContext)
    let [searchParams] = useSearchParams();
    const [, setInvoiceData] = useContext(InvoiceDetailsContext);
    const [open, setOpen] = useState(false);

    let invoiceId = searchParams.get("id");
    let invoiceEdit =  <InvoiceEditor invoiceId={invoiceId} />
    const [editState , seteditState] = useState(invoiceEdit)
    function getSeachParams() {

        let url = process.env.REACT_APP_BASE_URI + "api/v1/invoice/" + invoiceId
        if (!!invoiceId) {
            setOpen(true)
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setOpen(false)
                    setInvoiceData(data)
                    seteditState(invoiceEdit)
                });
        } else {
            setInvoiceData({})
        }
    }
    function checkAuth() {
      
        if (authcheck()) {
            if (!!invoiceId) {
                getSeachParams();
                setInvoiceData('');
            } else {
                setInvoiceData('');
            }
        } else {
            navigate({
                pathname: '/'
            });
        }
    }
    useEffect(() => {
        checkAuth()
        // eslint-disable-next-line 
    }, [])
    return (
        <div className="flex invoice-details-container ">
            <div className="inv-form-container">
                {editState}
            </div>
            <div className="invoice-details-pdf-container">
                <PdfViewer pdf={nopdf} />
            </div>
            <Modal open={open} sx={{display:"flex" , alignItems: "center" , justifyContent : "center"}}>
                <div className="modal-loader">
                   <CircularProgress />
                </div>
            </Modal>
        </div>
    )
}
