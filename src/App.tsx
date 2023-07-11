import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from 'pages/MainLayout'

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/market" />} />
      <Route path="/*" element={<MainLayout />} />
    </Routes>
  )
}

export default App
