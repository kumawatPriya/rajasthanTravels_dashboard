import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <div className="dashboard-to-do">
                <div className="logo-title">
                    <p className="logo-title-word1">Explore</p>
                    <p className="logo-title-word2">Rajasthan</p>
                </div>
                <div className="create-btn">
                    <Link to="/">
                    <button>Home</button>
                    </Link>
                </div>
                <div className="create-btn">
                    <Link to="/createCard">
                        <button>Create</button>
                    </Link>
                </div>
                <div className="create-btn">
                    <Link to="/users">
                    <button>Users</button></Link>
                </div>
                <div className="create-btn">
                    <Link to="/packages">
                        <button>Packages</button></Link>
                </div>
                <div className="create-btn">
                    <button>Bookings</button>
                </div>
                <div className="create-btn">
                    <button>History</button>
                </div>
            </div>
        </>
    )
}

export { Dashboard }