import DashboardSidebar from "./DashboardSidebar"; 
import DashboardBar from "./DashboardBar";
import SiteFooter from "./SiteFooter";

const Dashboard = () => {
    return (
        <div className="flex flex-col">
            <DashboardBar />
            <div className="grid grid-rows-3 grid-cols-4 h-screen bg-stone-900">
                <DashboardSidebar />
                
            </div>
            <SiteFooter/>
        </div>
    )
}

export default Dashboard;