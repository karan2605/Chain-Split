import { Navbar } from "flowbite-react/lib/cjs/components/Navbar/Navbar";
import { Button } from "flowbite-react/lib/cjs/components/Button/Button";

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
            <div className="flex md:order-2 text-xl">
                <Button size="xl" color="failure">
                Disconnect
                </Button>
                <Navbar.Toggle />
            </div>
            </Navbar>
    )
}

export default DashboardBar;