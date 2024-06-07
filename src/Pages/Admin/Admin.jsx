import React from 'react'
import "./Admin.css"
import { Route, Routes  } from "react-router-dom";
import Sidebar from '../../Components/Sidebar/Sidebar';
import AddProduct from '../../Components/Addproduct/AddProduct';
import ListProduct from '../../Components/Listproduct/ListProduct';

function Admin() {
  return (
    <div className='admin'> 
       <Sidebar/>
       <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>

    </div>
  )
}

export default Admin