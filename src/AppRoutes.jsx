import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from './components/Dashboard/Dashboard';
import InvoiceList from './components/Invoice/InvoiceList';
import Login from './components/Login/Login';



export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/invoice" element={<InvoiceList />} />
        <Route path="/new" element={<InvoiceList />} />
      </Routes>
    </div>
  )
}
