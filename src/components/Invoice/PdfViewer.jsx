import React, { useState  , useContext } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
import { InvoiceDetailsContext } from '../../context/InvoiceDetailsContext';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function PdfViewer(props) {
  // eslint-disable-next-line
  const [ invoiceData , setInvoiceData ] = useContext(InvoiceDetailsContext);
    const [numPages, setNumPages] = useState(null);
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    let { pdf } = props;
    if (!!invoiceData.fileData) {
      pdf = invoiceData.fileData;
    }
    const scale = 1.4
    // const width = 1000
    return (
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} 
          scale={scale}
      
          />
        ))}
      </Document>
    );
  }