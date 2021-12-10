import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function PdfViewer(props) {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    const { pdf } = props;
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
  // {width={width}}