import { Sidebar } from "flowbite-react/lib/cjs/components/Sidebar/Sidebar";
import { HiHome } from "react-icons/hi2/";
import { HiUserGroup } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi2";
import { HiClipboard } from "react-icons/hi2";

const DashboardSidebar = () => {
    return (
        <Sidebar className="w-fit row-span-3 bg-stone-800 text-4xl">
            <Sidebar.Items className="bg-stone-800">
                <Sidebar.ItemGroup className="bg-stone-800">
                    <Sidebar.Item
                    href="#"
                    className="text-2xl text-white"
                    icon={HiHome}
                    >
                    Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item
                    href="#"
                    className=""
                    icon={HiUsers}
                    >
                    <h1 className="text-2xl text-white">Friends</h1>
                    </Sidebar.Item>
                    <Sidebar.Item
                    href="#"
                    className="text-2xl text-white"
                    icon={HiUserGroup}
                    >
                    Groups
                    </Sidebar.Item>
                    <Sidebar.Item
                    href="#"
                    className="text-2xl text-white"
                    icon={HiClipboard}
                    >
                    Split History
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default DashboardSidebar;