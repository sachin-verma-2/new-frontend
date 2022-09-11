import React, { useState } from "react";
import AdminNav from "./AdminNav";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../../../CSS/AdminDashboard.css"
function AdminDashboard(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    useEffect(()=>{
        const userid = localStorage.getItem('userId');
        console.log("userid",userid);
        axios.post('http://localhost:9000/profile',{userid})
        .then((res)=>{
            console.log("res from profile = ",res.data);
            setName(res.data.name);
            setEmail(res.data.email)
        })
        .catch((err)=>{
            console.log("err from profile",err);
        })
    },[])
    return(
        <div>
            <AdminNav></AdminNav>

<h3> Welcome {name}</h3>
<h3>Email: {email}</h3>
  

<img src="https://t3.ftcdn.net/jpg/02/33/12/44/240_F_233124436_78mVMPy74gldjeo6rdyJgRklPIGSAwl7.jpg" className="pic-admin thumbnail" alt="..."/>
<h1 className='background-text-2'>Hire character. Train skill </h1>
<h2 className='background-text-2'>It doesn’t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do</h2>
<div className="container-admin">
<img src="https://t4.ftcdn.net/jpg/04/96/27/97/240_F_496279754_N7gxd0CWlsLn952lCWHnss3TrA1s90b2.jpg" class="pic-admin thumbnail" alt="..."/>
<button className="btn"><Link className="link-admin" to="/addjobs">Post Job</Link></button>
</div>




        </div>
    )
}
export default AdminDashboard