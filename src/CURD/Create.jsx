import React, { useState } from "react";
import { Dashboard } from "../Main/Dashboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../helper";

function Create() {
  const [image,setImage] = useState('')
  const [title, setTitle] = useState('')
  const [subtitle, setSubTitle] = useState('')
  const [price, setPrice] = useState('')
  const [days, setDays] = useState('')
  const [destination, setDestination] = useState('')
  const [buttn, setButton] = useState('')

  const createCard = async () => {
    const response = await fetch(`${BASE_URL}/create`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "image":image,
        "title": title,
        "subtitle": subtitle,
        "price": price,
        "days": days,
        "destination": destination,
        "button": buttn
      })
    })
    const fetchres = await response.json();
    console.log(response,"response")
    console.log(fetchres)
  if(fetchres){
    toast.success("Card Created")
  }
  }
  return (
    <>
    <ToastContainer/>
    <div className="dashboard">
      <Dashboard/>
      </div>
      <div className="create-card">
        <div className="create-card-title"> <p>Create Travelling Cardd</p></div>
        
        <input type="text" name="image" placeholder="Enter Image Src" onChange={(e)=>{setImage(e.target.value)}} value={image}/>
        <input className="input" type="text" placeholder="Enter Title" name="title" onChange={(e) => { setTitle(e.target.value) }} value={title} />
        <input type="text" placeholder="Enter Subtitle" name="subtitle" onChange={(e) => { setSubTitle(e.target.value) }} value={subtitle} />
        <input type="text" placeholder="Enter Destination" name="destination" onChange={(e) => { setDestination(e.target.value) }} value={destination} />
        <input type="text" placeholder="Enter Trip Days" name="days" onChange={(e) => { setDays(e.target.value) }} value={days} />
        <input type="text" placeholder="Enter Price" name="price" onChange={(e) => { setPrice(e.target.value) }} value={price} />
        <input type="text" placeholder="Enter Text" name="button" onChange={(e) => { setButton(e.target.value) }} value={buttn} />
        <div className="card-btn">
          <button onClick={createCard}>Create</button>
        </div>
      </div>
    </>
  )
}

export { Create }