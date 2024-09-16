import React from 'react'
import Layout from './component/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home'
import AddUpdateEmp from './component/AddUpdateEmp/AddUpdateEmp'
import ViewEmp from './component/ViewEmp/ViewEmp'

const App = () => {
  return (
    <div>
      <Layout/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-update-emp' element={<AddUpdateEmp/>}/>
        <Route path='/add-update-emp/:id' element={<AddUpdateEmp/>}/>
        <Route path='/view-emp/:id' element={<ViewEmp/>}/>
      </Routes>
    </div>
  )
}

export default App