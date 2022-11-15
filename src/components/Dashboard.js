import DashboardSidebar from "./DashboardSidebar"; 
import DashboardBar from "./DashboardBar";

const Dashboard = () => {
    return (
        <div className="flex flex-col bg-stone-700">
            <DashboardBar />
            <DashboardSidebar className="bg-stone-800"/>

        </div>
    )
}

export default Dashboard;