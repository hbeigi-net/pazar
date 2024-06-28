import React from 'react'
import {BrowserRouter as RouterProvider, Route,Routes} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import NotFound from './Pages/404'
function App() {
  return (
    <RouterProvider>
        <Routes>
            <Route element={<Dashboard/>} path='/' index />
            <Route element={<NotFound/>} path='*'/>
        </Routes>
    </RouterProvider>
  )
}

export default App