import React from 'react'
import { sampleBase64pdf  } from './PdfSample'
import PdfViewer from './PdfViewer'
import './InvoiceDetails.css'
import InvoiceEditor from './InvoiceEditor'


export default function InvoiceDetails() {
    return (
        <div className="flex invoice-details-container ">
            <div className="inv-form-container">
               <InvoiceEditor/>
            </div>
            <div className="invoice-details-pdf-container">
                <PdfViewer pdf={sampleBase64pdf} />
            </div>
        </div>
    )
}
