import 'C:/Users/hp/Desktop/React_project/hit/src/component/css/new.css';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Update(){
    const {id} = useParams();
    const nav = useNavigate();
    const[name,setName] = useState("");
    const[age,setAge] = useState("");
    const[email,setEmail] = useState("");
    const[mobile,setMobile] = useState("");

    useEffect(()=>{
        axios.get(`http://localhost:2222/user/${id}`)
        .then((res)=>{
            console.log(res)
            setName(res.data.name)
            setAge(res.data.age)
            setEmail(res.data.email)
            setMobile(res.data.mobile)
        })
    },[id]);

    function handleup(e){
        e.preventDefault();
        axios.put(`http://localhost:2222/user/${id}`,{name,age,email,mobile})
        .then((res)=>{
            if(res){
                alert('data updated successfully')
                nav("/crud")
            }else{
                alert("unable to update data")
            }

        }).catch((err)=>{console.log(err)});
        
    }
    return(
        <>
        <br /><br />
        
        <form action="" onSubmit={handleup} style={{border:'2px solid black'}}> <br />
        <h1><b>Update User</b></h1><br />
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'/><br /><br />
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}placeholder='Age' /><br /><br />
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}placeholder='Email'/><br /><br />
            <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)}placeholder='Mobile'/><br /><br />
           <button className='btn btn-success' style={{margin : '10px'}}>Data</button>
        </form>
        </>
    )
}
export default Update;