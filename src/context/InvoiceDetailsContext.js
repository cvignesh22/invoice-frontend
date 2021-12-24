import React , {useState}from 'react'

export const InvoiceDetailsContext = React.createContext();


export const InvoiceDetailsContextProvider = (props) => {
    const [invoiceData , setInvoiceData] = useState({})
    return (
        <InvoiceDetailsContext.Provider value={[invoiceData , setInvoiceData ]}> 
            {props.children}
        </InvoiceDetailsContext.Provider>
    )
}