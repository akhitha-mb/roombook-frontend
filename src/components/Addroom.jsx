import axios from 'axios'
import React, { useState } from 'react'
import { Navbar } from './Navbar'

export const Addroom = () => {
  
        
        
        const [data,setData] = useState(
        {
        "hotelname":"",
        "date":"",
        "checkin":"",
        "checkout":"",



    }
)
const inputHandler=(event) => {
setData({...data,[event.target.name]: event.target.value })

}
    const readValue = () =>{
        console.log(data)
        axios.post("http://localhost:8083/add",data).then(
         (response) => {
            console.log(response.data)
            if (response.data.status=="success" ) {
                alert("successfull")
            } else {
                alert("error")
            }
         }

        ).catch().finally()
    }

  return (
    <div>
        <Navbar/>
       <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">HOTEL NAME</label>
                        <input type="text" className="form-control" name='hotelname' value={data.hotelname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">DATE</label>
                         <input type="date" name="date" id="" className="form-control" value={data.date} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">CHECK-IN</label>
                        <input type="date" name="checkin" id="" className="form-control" value={data.checkin} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">CHECK-OUT</label>
                        <input type="date" name="checkout" id="" className="form-control" value={data.checkout} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label"></label>
                       <button onClick={readValue} className="btn btn-success">ADD ROOM</button>
                        
                    </div>
                </div>
            </div>
        </div>
       </div>
        
       
        
        
        </div>
  )
}

        
        
       
  

