import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Dashboard } from "../Main/Dashboard";
import { BASE_URL } from "../helper";

function UpdatePackage(){
    const [imageSrc, setImageSrc] = useState("");
    const [title,setTitle] = useState("");
    const [subtitle,setSubtitle] = useState("");
    const [days,setDays] = useState("");
    const [price,setPrice] = useState("");
    const [destination, setDestination] = useState("");
    const [button, setButton] = useState("");

    const handleImageSrc = (e)=>{
        setImageSrc(e.target.value)
    }
    const handleTitle = (e)=>{
        setTitle(e.target.value)
    }
    const handleSubTitle = (e)=>{
        setSubtitle(e.target.value)
    }
    const handleDays = (e)=>{
        setDays(e.target.value)
    }
    const handlePrice = (e)=>{
        setPrice(e.target.value)
    }
    const handleDestination = (e)=>{
        setDestination(e.target.value)
    }
    const handleButtonText = (e)=>{
        setButton(e.target.value)
    }

    
    // function for getting data in placeholder value -----------------------------
    const [packageInfo, setPackageInfo] = useState();
    
    const [id] = useSearchParams();
    const myid = id.get('id');
    console.log(myid)

    const GetPackageInfo = async()=>{
        const response = await fetch(`${BASE_URL}/package${myid}`,{
            method: "GET",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const getResponse = await response.json();
        setPackageInfo(getResponse);
        console.log(getResponse)
    }

    useEffect(()=>{
        GetPackageInfo()
    },[])

// For Updatation ==========================================

const UpdateInfo = async(e)=>{
   const response = await fetch(`${BASE_URL}/update/${e}`,{
    method: "PATCH",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "image": imageSrc.length>0 ? imageSrc: packageInfo.packageInfo.image,
        "title": title.length>0 ? title: packageInfo.packageInfo.title,
        "subtitle": subtitle.length>0 ? subtitle: packageInfo.packageInfo.subtitle,
        "days": days.length>0 ? days: packageInfo.packageInfo.days,
        "price": price.length>0 ? price: packageInfo.packageInfo.price,
        "destination": destination.length>0 ? destination: packageInfo.packageInfo.destination,
        "button": button.length>0 ? button: packageInfo.packageInfo.button

    })
   })
   console.log(response)
}

    return(
        <>
                    <div className="dashboard">
                <Dashboard />
            </div>
        <div className="updateInfo-head">
            <h3>Update Travellers Package</h3>
        </div>
        <div className="UpdateInfo-fields">
        <input type="text" value={imageSrc} onChange={handleImageSrc} placeholder={packageInfo && packageInfo.packageInfo.image} /> <br />
        <input type="text"  value={title} onChange={handleTitle} placeholder={packageInfo && packageInfo.packageInfo.title} /> <br />
        <input type="text" value={subtitle} onChange={handleSubTitle} placeholder={packageInfo && packageInfo.packageInfo.subtitle} /> <br />
        <input type="text" value={days} onChange={handleDays} placeholder={packageInfo && packageInfo.packageInfo.days} /> <br />
        <input type="text" value={price} onChange={handlePrice} placeholder={packageInfo && packageInfo.packageInfo.price} /> <br />
        <input type="text" value={destination} onChange={handleDestination} placeholder={packageInfo && packageInfo.packageInfo.destination} /> <br />
        <input type="text" value={button} onChange={handleButtonText} placeholder={packageInfo && packageInfo.packageInfo.button} /> <br />

        <button onClick={()=>{UpdateInfo(packageInfo.packageInfo._id)}}>Update</button>
        </div>
        </>
    )
}

export {UpdatePackage}