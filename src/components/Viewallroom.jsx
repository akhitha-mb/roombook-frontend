import { Navbar } from './Navbar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Viewallroom = () => {
 
        const [data,changeData] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8083/viewall").then(
            (response) => {
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">HOTEL NAME</th>
      <th scope="col">DATE</th>
      <th scope="col">CHECK-IN</th>
      <th scope="col">CHECK-OUT</th>

    </tr>
  </thead>
  <tbody>
   {data.map(
    (value,index)=>{
        return <tr>

      <td>{value.hotelname}</td>
      <td>{value.date}</td>
      <td>{value.checkin}</td>
      <td>{value.checkout}</td>
   
        </tr>
    }
   )
   }
    
  </tbody>
</table>
                </div>
            </div>
        </div>
        
        </div>
  )
}

       
        
        
      