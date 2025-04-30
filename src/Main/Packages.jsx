import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../helper";

function TravelCards() {
    const [api, setApi] = useState([])
    const getCards = async () => {
        const response = await fetch(`${BASE_URL}/travelCards`);
        const getres = await response.json();
        setApi(getres)
        console.log(getres)
    }

    useEffect(() => {
        getCards()
    }, [])

    const DeletePackage = async (e) => {
        const response = await fetch(`${BASE_URL}/delete/${e}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log("response", response);
        const deleteRes = await response.json();
        if (deleteRes.status === true) {
            toast.success(deleteRes.message)
        }
        else {
            toast.error(deleteRes.message)
        }
    }
    
    const deletedHistory = async(e)=>{
        const response = await fetch(`${BASE_URL}/history/${e}`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: {

            }
        })
        const fetchRes = await response.json()
        if(fetchRes.status === true){
            toast.success(fetchRes.message)
        }
        else{
            toast.error(fetchRes.message)
        }
        console.log(fetchRes)
    }
    return (
        <>
            <ToastContainer position="top-center" />
            <div className="dashboard">
                <Dashboard />
            </div>
            <div className="travel-info-bx-main">
                {
                    api.map((data) => {
                        return (
                            <>

                                <div className="travel-info-bx">
                                    <div className="travel-info-bx-img">
                                        <img src={data.image} alt="" />
                                    </div>
                                    <div>
                                        <div className="travel-info-bx-content">
                                            <h4>{data.title}</h4>
                                            <h5>{data.subtitle}</h5>
                                            <p className="trip-days">{data.days}</p>
                                            <h3>{data.destination}</h3>
                                            <p>{data.price}</p>
                                        </div >
                                        <div className="travle-info-button">
                                            <button>{data.button}</button>
                                        </div>
                                        <div className="operate-buttons">
                                         <Link to={`/readinfo?id=/${data._id}`}>   <button>Read</button></Link>
        <Link to={`/updateInfo?id=/${data._id}`}><button>Update</button></Link>
                                            <button onClick={() => { DeletePackage(data._id);deletedHistory(data._id) }}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </>
    )
}

export { TravelCards }