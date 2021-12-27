import React ,{useRef , useEffect , useState , useContext }from 'react';
import './Dashboard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import GppBadIcon from '@mui/icons-material/GppBad';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import TableData from './TableData';
export default function Dashboard() {


    let iconClass = { color: "#fff", fontSize: "3em" }
    let accptBg = { backgroundColor: "#4caf50", color: "#fff", minWidth: "250px", borderRadius: '20px' }
    let rejBg = { backgroundColor: "#f44336", color: "#fff", minWidth: "250px", borderRadius: '20px' }
    let newItm = { backgroundColor: "#2196f3", color: "#fff", minWidth: "250px", borderRadius: '20px' }
    let allItm = { backgroundColor: "#3f51b5", color: "#fff", minWidth: "250px", borderRadius: '20px' }
    let pendingItm = { backgroundColor: "#fb8c00", color: "#fff", minWidth: "250px", borderRadius: '20px' }
    const navigate = useNavigate()
    const [,,authcheck] = useContext(AuthContext)
    const dashData = useRef([])
    const dashCount = useRef({})
    const count = {
        allCount : 0,
        pendingCount : 0,
        acceptCount : 0,
        rejCount : 0
    }
    dashCount.current = count;
    const [tableData , setTableData] = useState()
    function getInvoiceData() {
        // http://localhost:8080/api/v1/invoice/all?page=0&size=2
        let url = process.env.REACT_APP_BASE_URI + "api/v1/invoice/all?page=0&size=10&sort=id,desc"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // setdata(data);
                dashData.current = data.content
                console.log(data)
                let tabdata =  <TableData data={dashData.current} />
                setTableData(tabdata)
            });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function checkAuth() {
        if (authcheck()) {
            getInvoiceData()
        } else {
            navigate({
                pathname: '/'
            });
        }
    }
    useEffect(() => {
        // settableVal(tableData)
        // eslint-disable-next-line
        // getInvoiceData()
        checkAuth()
// eslint-disable-next-line 
    } , [])
    return (
        <div className="dashboard-contianer">
            <div className="dashboard-header">
                Invoice Details
            </div>
            <div className="dashboard-menu">
                <div className='dashboard-item'>
                    <Card sx={newItm}>
                        <CardContent>
                            <div className="flex dashboard-card-item-data" >
                                <div><AddCircleIcon sx={iconClass} /></div>
                                <div className='dashboard-card-item-val'>New Invoice</div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className='dashboard-item'>
                    <Card sx={allItm}>
                        <CardContent>
                            <div className="flex dashboard-card-item-data" >
                                <div><FormatListBulletedIcon sx={iconClass} /></div>
                                <div className='dashboard-card-item-val'>
                                <div className="dash-all">All Invoices</div>
                                <div>{dashCount.current.allCount}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className='dashboard-item'>
                    <Card sx={accptBg}>
                        <CardContent>
                            <div className="flex dashboard-card-item-data" >
                                <div><FactCheckIcon sx={iconClass} /></div>
                                <div className='dashboard-card-item-val'>
                                    <div sx={{ padding: "15px" }}>Accepted</div>
                                    <div>{dashCount.current.acceptCount}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className='dashboard-item'>
                    <Card sx={rejBg}>
                        <CardContent>
                            <div className="flex dashboard-card-item-data" >
                                <div><GppBadIcon sx={iconClass} /></div>
                                <div className='dashboard-card-item-val'>
                                    <div>Rejected</div>
                                    <div>{dashCount.current.rejCount}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className='dashboard-item'>
                    <Card sx={pendingItm}>
                        <CardContent>
                            <div className="flex dashboard-card-item-data" >
                                <div><HourglassTopIcon sx={iconClass} /></div>
                                <div className='dashboard-card-item-val'>
                                    <div>Pending</div>
                                    <div>{dashCount.current.pendingCount}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Card sx={{width:"100%"}}>
               {tableData}
            </Card>
        </div>
    )
}
