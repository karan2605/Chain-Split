import { Navbar } from "flowbite-react/lib/cjs/components/Navbar/Navbar";
import { Button } from "flowbite-react/lib/cjs/components/Button/Button";
import { Badge } from "flowbite-react/lib/cjs/components/Badge/Badge";
import { Avatar } from "flowbite-react/lib/cjs/components/Avatar/Avatar";

import logo from "../assets/logo.png";

const DashboardBar = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className="bg-stone-800"
            >
            <Navbar.Brand>
            <img
                src={logo}
                className="mr-3 h-6 sm:h-9 rounded-lg"
                alt="Logo"
            />
            <span className="self-center text-4xl font-bold text-white py-3">
                ChainSplit
            </span>
            </Navbar.Brand>
            <div className="flex text-xl gap-4 items-center">
                <Avatar />
                <Badge size="lg" color="dark" className={"text-white bg-gradient-to-r from-blue-600 to-fuchsia-600 font-mono"}>
                    0x213ef...j2nk
                </Badge>
                <Badge color="success" size="lg" >
                    Connected
                </Badge>
                <Button size="2xl" color="failure" className={"text-2xl py-2 px-3"}>
                    Disconnect
                </Button>
            </div>
        </Navbar>
    )
}

export default DashboardBar;