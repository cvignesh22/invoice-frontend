import React, { useEffect } from 'react'
import { sampleBase64pdf } from './PdfSample'
import PdfViewer from './PdfViewer'
import './InvoiceDetails.css'
import InvoiceEditor from './InvoiceEditor'
// import { Routes, Route, Link, useSearchParams } from "react-router-dom";


export default function InvoiceDetails() {
    

    useEffect(() => {
        // settableVal(tableData)
        // eslint-disable-next-line
        // getInvoiceData()


       
        // eslint-disable-next-line 
    }, [])
    return (
        <div className="flex invoice-details-container ">
            <div className="inv-form-container">
                <InvoiceEditor />
            </div>
            <div className="invoice-details-pdf-container">
                <PdfViewer pdf={sampleBase64pdf} />
            </div>
        </div>
    )
}
