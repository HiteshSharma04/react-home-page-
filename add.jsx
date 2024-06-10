import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import 'C:/Users/hp/Desktop/React_project/hit/src/component/css/new.css'
function Add(){
    const nav = useNavigate();
    const[name,setName] = useState("");
    const[age,setAge] = useState("");
    const[email,setEmail] = useState("");
    const[mobile,setMobile] = useState("");
    function Handleform(e){
        e.preventDefault();
        axios.post("http://localhost:2222/user",{name,age,email,mobile})
        .then((res)=>{alert('data submitted');
        nav('/crud')
        })
        .catch((res)=>{alert('data not submitted');
        console.log(res)})
        }

    return(
        <>
        <h1 className='t'>ADD USER</h1>
 
        <br /><br />
        <form action="" onSubmit={Handleform} style={{border:'2px solid black'}} ><br />
            <h1><b>Add User</b></h1><br />
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' /><br /><br />
            <input type="text" onChange={(e)=>setAge(e.target.value)} value={age} placeholder='Age' /><br /><br />
            <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Email'/><br /><br />
            <input type="text" onChange={(e)=>setMobile(e.target.value)} value={mobile} placeholder='Mobile'/><br /><br />
            <button className='btn btn-success' style={{margin : '10px'}}>Table</button>
            
        </form>
        </>
    )
}
export default Add;