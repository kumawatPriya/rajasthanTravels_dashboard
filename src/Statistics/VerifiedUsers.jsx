import React, { useEffect, useState } from "react";
import { BASE_URL } from "../helper";

function VerifiedUsers(){
    const [users,setUsers] = useState([]);
     
    const fetchUsers = async()=>{
      const response = await fetch(`${BASE_URL}/userLogin`);
      const getNumberofUsers = await response.json();
      setUsers(getNumberofUsers)
      console.log(getNumberofUsers)
    }
    useEffect(()=>{
        fetchUsers()
    },[])
    return(
        <>
        <div className="user-length">
        <h1>{users.length}</h1>
        </div>
        </>
    )
}

export {VerifiedUsers}