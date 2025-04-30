import React, { useEffect, useState } from "react";
import { BASE_URL } from "../helper";

function CreatedPackage(){

    const [travlePackage,setTravlePackage] = useState([]);

    const NumberofPackages = async()=>{
        const response = await fetch(`${BASE_URL}/travelCards`);
        const fetchres = await response.json();
        setTravlePackage(fetchres);
    }

    useEffect(()=>{
        NumberofPackages();
    },[])

    return(
        <>
        {
            <h1>{travlePackage.length}</h1>
        }
        </>
    )
}

export {CreatedPackage}