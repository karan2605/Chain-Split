import { Sidebar } from "flowbite-react/lib/cjs/components/Sidebar/Sidebar";
import { HiHome } from "react-icons/hi2/";
import { HiUserGroup } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi2";
import { HiClipboard } from "react-icons/hi2";
// import { Link } from "react-router-dom";

const DashboardSidebar = () => {
    return (
        <Sidebar className={"w-fit row-span-3 text-4xl"}>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                    href="/dashboard"
                    className="text-2xl text-white"
                    icon={HiHome}
                    >
                    <h1 className="text-2xl text-white">Dashboard</h1>
                    </Sidebar.Item>
                    <Sidebar.Item
                    href="/friends"
                    className=""
                    icon={HiUsers}
                    >
                    <h1 className="text-2xl text-white">Friends</h1>
                    </Sidebar.Item>
                    <Sidebar.Item
                    href="/groups"
                    className="text-2xl text-white"
                    icon={HiUserGroup}
                    >
                    <h1 className="text-2xl text-white">Groups</h1>
                    </Sidebar.Item>
                    <Sidebar.Item
                    href="/history"
                    className="text-2xl text-white"
                    icon={HiClipboard}
                    >
                    <h1 className="text-2xl text-white">Split History</h1>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default DashboardSidebar;