import React, { useEffect, useState } from "react";
import { BASE_URL } from "../helper";
import { Dashboard } from "../Main/Dashboard";

function ActiveUsers() {

    const [user, setUser] = useState([]);
    const userapi = async () => {
        const response = await fetch(`${BASE_URL}/userLogin`)
        const getusers = await response.json()
        setUser(getusers)
        console.log(getusers)
    }

    useEffect(() => {
        userapi()
    }, [])
    return (
        <>
            <div className="verified-users-main">
                <div><Dashboard /></div>
                <div className="user-dashboard">
                    <div className="dashboard-main">
                        <div className="dashboard-head">
                            <span className="span1">DASHBOARD</span>
                            <span className="span2">Control Panel &nbsp; (USERS)</span>
                        </div>
                    </div>
                    <div className="about-user">
                        <div className="panel-table">
                            <table>
                            <tbody>
                                <th>Access For</th>
                                <th>Password</th>
                        {
                            user.map((data) => {
                                return (
                                    <>
                                                <tr>
                                                <td>{data.email}</td>
                                                <td>{data.password}</td>
                                            </tr>
                                    </>
                                    )
                                })
                            }
                            </tbody>
                            </table>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { ActiveUsers }