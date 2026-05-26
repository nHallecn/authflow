import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const {user, logout} = useAuth;
  const navigate = useNavigate;

  function handleLogout(){
    logout();
    navigate('/login')
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard