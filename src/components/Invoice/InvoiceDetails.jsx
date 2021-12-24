import React, { useEffect, useState, useContext } from 'react'
import { sampleBase64pdf } from './PdfSample'
import PdfViewer from './PdfViewer'
import './InvoiceDetails.css'
import InvoiceEditor from './InvoiceEditor'
import { useSearchParams } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'
// import { AuthContext } from './context/AuthContext'



export default function InvoiceDetails() {
    // eslint-disable-next-line 
    let [searchParams, setSearchParams] = useSearchParams();
    // eslint-disable-next-line 
    const [auth, setAuth] = useContext(AuthContext)
    console.log(auth)
        // eslint-disable-next-line 
    const [invoiceDetail, setinvoiceDetail] = useState([])
    let invoiceId = searchParams.get("id");
    useEffect(() => {
        // getSeachParams()
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
