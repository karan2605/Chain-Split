import { Sidebar } from "flowbite-react/lib/cjs/components/Sidebar/Sidebar";

const DashboardSidebar = () => {
    return (
        <div className="w-fit bg-stone-800">
            <Sidebar className="bg-stone-800">
                <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                    href="#"
                    >
                    Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item
                    href="#"
                    >
                    Friends
                    </Sidebar.Item>
                    <Sidebar.Item
                    href="#"
                    >
                    Groups
                    </Sidebar.Item>
                    <Sidebar.Item
                    href="#"
                    >
                    Split History
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}

export default DashboardSidebar;