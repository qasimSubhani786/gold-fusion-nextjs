import React from "react";
import { DashboardBadge } from "../_components";

const Dashboard = async () => {
    return (<div className="bg-background flex flex-col h-dvh pl-20 pr-20 pt-8 pb-8">
        <span className='text-2xl'>Dashboard</span>
        <div className="flex flex-row mt-4">
            <DashboardBadge />
            <DashboardBadge />
            <DashboardBadge />
            <DashboardBadge />
            <DashboardBadge />
        </div>
    </div>)
}

export default Dashboard