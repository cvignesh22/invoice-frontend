import React from 'react'
import './Dashboard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import GppBadIcon from '@mui/icons-material/GppBad';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';


export default function Dashboard() {
    let iconClass = { color: "#fff",  fontSize: "3em" }
    let accptBg = { backgroundColor: "#4caf50", color: "#fff", minWidth: 275,  }
    let rejBg = { backgroundColor: "#f44336", color: "#fff", minWidth: 275 }
    let newItm = { backgroundColor: "#2196f3", color: "#fff", minWidth: 275}
    let pendingItm = { backgroundColor: "#fb8c00", color: "#fff", minWidth: 275}


    return (
        <div className="dashboard-contianer">
            <div className="dashboard-header">
                Dashboard
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
                    <Card sx={accptBg}>
                        <CardContent>
                            <div className="flex dashboard-card-item-data" >
                                <div><FactCheckIcon sx={iconClass} /></div>
                                <div className='dashboard-card-item-val'>
                                    <div sx={{padding : "15px"}}>Accepted</div>
                                    <div>25</div>
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
                                <div  className='dashboard-card-item-val'>
                                    <div>Rejected</div>
                                    <div>3</div>
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
                                <div  className='dashboard-card-item-val'>
                                    <div>Pending</div>
                                    <div>14</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className='dashboard-menu'>
                    <span> View all invoice details</span>
            </div>
        </div>
    )
}
