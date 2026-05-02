import { useState } from 'react'
import Sidebar from './components/Sidebar'
import List from './components/List'
import Add from './components/Add'
import Orders from './components/Orders'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Sidebar />
    <Routes>
      <Route path="/list" element={<List />} />
      <Route path="/add" element={<Add />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
    </>
  )
}

export default App
