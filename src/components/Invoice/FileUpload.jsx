import React, { useContext  } from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import './FileUpload.css'
import { InvoiceDetailsContext } from '../../context/InvoiceDetailsContext';
export default function FileUpload() {

    const [invoiceData, setInvoiceData] = useContext(InvoiceDetailsContext);
    let fileName = '';
    const onChangeHandler = async (event, s) => {
        event.preventDefault();
        fileName = event.target.files[0].name;
        const fileSize = event.target.files[0].size/ 1024 / 1024;
        if (fileSize < 2) {
            let fileData = await toBase64(event.target.files[0])
            let invoiceValue = {...invoiceData};
            invoiceValue.fileName = fileName;
            invoiceValue.fileData = fileData;
            setInvoiceData(invoiceValue);
        } else {
            alert('Fize size greater than 2MB')
        }

    };
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    
     
    return (
        <div className='file-upload-container flex'>
            <FileUploadIcon sx={{ color : "white"  , fontSize : "20px"}}/>
            <div>
                <input className="input-file" id="my-file" type="file" onChange={e => onChangeHandler(e)} />
                <label tabIndex="0" htmlFor="my-file" className="input-file-label">Upload Invoice</label>
            </div>
        </div>
    )
}
