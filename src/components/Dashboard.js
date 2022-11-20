import DashboardSidebar from "./DashboardSidebar";
import DashboardBar from "./DashboardBar";
import SiteFooter from "./SiteFooter";
import RecentActivity from "./dashboardComponents/RecentActivity";
import Friends from "./dashboardComponents/Friends";
import PendingSplits from "./dashboardComponents/PendingSplits";
import Stats from "./dashboardComponents/Stats";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <DashboardBar />
      <div className="flex flex-row">
        <DashboardSidebar />
        <div className="grid grid-rows-2 grid-cols-3 h-screen bg-stone-900 gap-6 px-20 py-20 w-full">
          <Stats />
          <RecentActivity />
          <Friends />
          <PendingSplits />
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default Dashboard;
