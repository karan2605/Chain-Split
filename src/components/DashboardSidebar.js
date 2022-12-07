import { Sidebar } from "flowbite-react/lib/cjs/components/Sidebar/Sidebar";
import { HiHome } from "react-icons/hi2/";
import { HiUserGroup } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi2";
import { HiClipboard } from "react-icons/hi2";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
    const links = [
        {name: "Dashboard", path : "/dashboard", icon : HiHome},
        {name: "Friends", path : "/friends", icon : HiUsers},
        {name: "Groups", path : "/groups", icon : HiUserGroup},
        {name: "Split History", path : "/history", icon : HiClipboard}
    ]
    return (
        <Sidebar className={"w-fit row-span-3 text-4xl"}>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    {links.map((link, index) => {
                        return (
                        <Sidebar.Item
                        href={link.path}
                        className="text-2xl text-white"
                        icon={link.icon}
                        >
                        <h1 className="text-2xl text-white">{link.name}</h1>
                        </Sidebar.Item>)
                    })}
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default DashboardSidebar;