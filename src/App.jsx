import React from 'react'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import {ProtectedRoute, PublicOnlyRoute} from './components/ProtectedRoute'

import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/login' replace />} />

          <Route path='/login' element={<PublicOnlyRoute><LoginPage /></PublicOnlyRoute>} />

          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App