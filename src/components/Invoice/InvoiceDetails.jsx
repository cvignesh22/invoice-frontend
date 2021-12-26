import React, { useEffect, useContext } from 'react'
import { sampleBase64pdf } from './PdfSample'
import PdfViewer from './PdfViewer'
import './InvoiceDetails.css'
import InvoiceEditor from './InvoiceEditor'
import { useSearchParams } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'
// import { AuthContext } from './context/AuthContext'
import { InvoiceDetailsContext } from '../../context/InvoiceDetailsContext';





export default function InvoiceDetails() {
    // eslint-disable-next-line 
    let [searchParams, setSearchParams] = useSearchParams();
    // eslint-disable-next-line 
    const [auth, setAuth] = useContext(AuthContext)
    console.log(auth)
        // eslint-disable-next-line 
    const [invoiceData, setInvoiceData] = useContext(InvoiceDetailsContext);
    
    let invoiceId = searchParams.get("id");
    function getSeachParams() {
        
        let url = process.env.REACT_APP_BASE_URI + "api/v1/invoice/" + invoiceId
        if (!!invoiceId) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setInvoiceData(data)
                    // prevInvoice.current = data;
                    // setValue();


                });
        }
    }
    useEffect(() => {
        if(!!invoiceId) {
            getSeachParams();
        } else {
            setInvoiceData('');
        }
        // eslint-disable-next-line 
    }, [])
    return (
        <div className="flex invoice-details-container ">
            <div className="inv-form-container">
                <InvoiceEditor   invoiceId={invoiceId} />
            </div>
            <div className="invoice-details-pdf-container">
                <PdfViewer pdf={sampleBase64pdf}  />
            </div>
        </div>
    )
}
