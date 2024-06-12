import axios from 'axios'
import React, { useState } from 'react'

export const Searchroom = () => {
        const [data, setData] = useState({
        "hotelname": "",
        

    })
    const [result, setResult] = useState(
        []
    )
    // input value fetching
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })

    }


    // search button event
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8083/search", data).then(
            (response) => {

                setResult(response.data)
            }

        ).catch(
            (error) => {
                console.log(error)
            }
        )

    }
// delete event handling
const deleteroom= (id)=>{
let input={"_id":id}
axios.post("http://localhost:8083/delete",input).then(
    (response)=>
        {
            console.log(response.data)
            if (response.data.status=="success") {
                alert("successfully deleted")
            } else {
                alert("error in deleting")
            }
        }
).catch().finally()
}

    return (
        <div>
           
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">HOTEL NAME</label>
                                <input type="text" className="form-control" name='hotelname' value={data.hotelname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                                <label htmlFor="" className="form-label"></label>
                                <br />
                                <button onClick={readValue} className="btn btn-warning">SEARCH</button>
                            </div>
                            <div className="row">
                                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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
                                            {result.map(
                                                (value, index) => {
                                                    return <tr>

                                                        <td>{value.hotelname}</td>
                                                        <td>{value.date}</td>
                                                        <td>{value.checkin}</td>
                                                        <td>{value.checkout}</td>
                                                        <td> <button className="btn btn-danger" onClick={()=>{deleteroom (value._id)}}>DELETE</button></td>
                                                    </tr>
                                                }
                                            )}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

        
   
