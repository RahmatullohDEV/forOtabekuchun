import React, { useState } from 'react'

import ShopNav from './components/shop/ShopNav'
import Shop from './components/shop/shop'
import { Route, Routes } from 'react-router-dom'
import Quti from './components/shop/quti'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Smartphones from './components/shop/smartphones'
import Laptops from './components/shop/laptops'

export default function App() {

  const [searchData, setSearchData] = useState('')

  const [data, setData] = useState([])

  const notify = () => toast.success("Qo'shildi");
  const error = () => toast.error("O'chirildi");

  function getData(item) {
    const dataClone = [...data];
    dataClone.push(item)
    setData(dataClone)
    notify()
  }

  function removeData(item) {
    const updatedData = data.filter(el => el.id !== item.id);
    setData(updatedData);
    error()
  }



  return (
    <div>
   
    
      <ShopNav quti={data.length} setSearchData={setSearchData} />
      <Routes>
        <Route path='/' element={<Shop getData={getData} searchData={searchData} />} />
        <Route path='/Korzinka' element={<Quti data={data} removeData={removeData} />} />
        <Route path='/smartphones' element={<Smartphones data={data} getData={getData} searchData={searchData}/>} />
        <Route path='/laptops' element={<Laptops data={data} getData={getData} searchData={searchData}/>} />
      </Routes>
      <ToastContainer
      position="top-center"
      autoClose={1000}
      />
      
    </div>
  )
}


