import React , {useState}from 'react'

export const InvoiceDetailsContext = React.createContext();


export const InvoiceDetailsContextProvider = (props) => {
    const [invoiceData , setInvoiceData] = useState({})
    const emptyInv = {
        invoiceDate: "2021-12-16",
        invoiceNo: "INV003",
        companyName: "LPC",
        companyAddress: "Abcdefghjjjj",
        totalAmount: "1000",
        fileName: null,
        fileData: null,
        invoiceStatus: "pending",
        invoiceItems: [
            {
                id: 0,
                itemName: "",
                quantity: "",
                price: "",
                itemTotal: ""
            }
        ]
    }
    return (
        <InvoiceDetailsContext.Provider value={[invoiceData , setInvoiceData , emptyInv ]}> 
            {props.children}
        </InvoiceDetailsContext.Provider>
    )
}