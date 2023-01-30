

import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Hello() {
  return (
    <div>

            <h1>Hello friends , from contact team</h1>
            <Navigate to="/login">Login</Navigate>
    </div>
  )
}
