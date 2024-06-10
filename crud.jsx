import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios'
function Crud(){
    const[data,setData] = useState([])
    const[change,setChange] = useState("table-white")
    
   useEffect(()=>{
    function getData() {
        axios.get("http://localhost:2222/user")
        .then((res)=>{console.log(res);
        setData(res.data)}) 
        .catch((err)=>{console.log(err)})
    };
    return()=>getData();

   },[]);
   function delete_user(id){
    const handleconfirm=()=>{
        axios.delete(`http://localhost:2222/user/${id}`)
    .then(()=>{
        axios.get("http://localhost:2222/user")
        .then((res)=>{
        setData(res.data);
    })
        .catch((err)=>{console.log(err);
            })
    })
    .catch((err)=>{console.log(err);
    })
   };
    if (typeof window !== 'undefined' && window.confirm) {
    if(window.confirm("Are you sure you want to delete this user?")) { 
        handleconfirm();
}   else{
    console.log("Confirmation dialog is not supported");
}}}

    return(
        <>
        <h1 >Crud</h1>
        {/* <h1>Hello</h1> */}
        <Link to='/add'><button className='btn btn-success' style={{margin: '10px'}}
    >Add</button></Link><br />
        <div className="form-check form-switch" >
    
    <input
      className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
      style={{marginLeft : "200px"}
    }  onClick={()=>{
        if(change === "table-white"){
            setChange("table-dark");
        }else{
            setChange("table-white");
        }
    }}
    />
  </div> <br />
        <table className={`table ${change}`} >
            <thead>
                
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
            data.map((res,index)=>(
            <tr key={index}>
                    <td>{index +1}</td>
                    <td>{res.name}</td>
                    <td>{res.age}</td>
                    <td>{res.email}</td>
                    <td>{res.mobile}</td>
                    <td><Link to = {`/update/${res.id}`}><button className='btn btn-primary'>Update</button></Link><button className='btn btn-danger' style={{margin : "20px"}} onClick={()=>{delete_user(res.id)}}>Delete</button></td>
                </tr>
                ))
            }
            </tbody>
        </table>

        </>
    )
}
export default Crud;