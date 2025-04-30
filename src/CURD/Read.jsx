import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../helper";


function Read() {

    const [id] = useSearchParams();
    const myId = id.get('id');
    // console.log(myId)

    const [readData, setReadData] = useState();

    const readPackageInfo = async () => {
        const response = await fetch(`${BASE_URL}/read${myId}`, {
            method: "GET",
            headers: {
                'Content_Type': 'application-json'
            }
        })
        const getResp = await response.json()
        setReadData(getResp);
        console.log(getResp)
    }

    useEffect(() => {
        readPackageInfo()
    }, [])

    return (
        <>
        <div style={{display: 'block', width: '50%', margin: 'auto', textAlign: "center", backgroundColor: '#fefcf6', borderRadius: '18px', padding: "10px 0px", border: "1px solid #e6dfbc", marginTop: "40px"}}>
          <h4>{readData && readData.readInfo.title}</h4> 
          <img width='320px' src={readData && readData.readInfo.image} alt="" />
          <h6 style={{paddingTop: "20px" }}>{readData && readData.readInfo.subtitle}</h6>
          <p>{readData && readData.readInfo.destination}</p>
          <p>Trip Days - {readData && readData.readInfo.days}</p>
          <h5>{readData && readData.readInfo.price}</h5>
          </div>
        </>
    )
}

export { Read }