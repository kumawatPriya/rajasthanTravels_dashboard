import React from "react";
// import { Link } from "react-router-dom";
import { VerifiedUsers } from "../Statistics/VerifiedUsers";
import { Dashboard } from "./Dashboard";
import { CreatedPackage } from "../Statistics/CreatedPackages";

function Home() {
    return (
        <>
            <div className="home-page">
                <div>
                    <Dashboard />
                </div>
                <div className="dashboard-main">
                    <div className="dashboard-head">
                        <span className="span1">DASHBOARD</span>
                        <span className="span2">Control Panel</span>
                    </div>
                    <div className="statistics">
                        <div className="verifiedUsers">
                            <div>
                                <h3>Users</h3>
                            </div>
                            <div>
                                <VerifiedUsers />
                            </div>
                        </div>
                        <div className="verifiedUsers">
                            <div>
                                <h3>Packages</h3>
                            </div>
                            <div>
                                <CreatedPackage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Home }