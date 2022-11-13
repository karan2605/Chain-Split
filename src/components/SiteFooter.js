import { Footer } from "flowbite-react/lib/esm/components/Footer";
import logo from "../assets/logo.png";

const SiteFooter = () => {
    return (
        <Footer container={true} className="bg-stone-900">
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex">
                <div className="flex flex-row">
                    <Footer.Brand
                    src={logo}
                    className="mr-3 h-6 sm:h-9 rounded-lg"
                    alt="ChainSplit Logo"
                    />
                    <span className="text-4xl font-bold text-purple-600">
                        ChainSplit
                    </span>

                </div>
                <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                    <Footer.Title title="about" className="text-purple-600"/>
                    <Footer.LinkGroup col={true}>
                        <Footer.Link href="#" className="text-purple-600">
                        ChainSplit
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title="Follow us" className="text-purple-600"/>
                    <Footer.LinkGroup col={true} className="text-purple-600">
                        <Footer.Link href="#">
                        Github
                        </Footer.Link>
                        <Footer.Link href="#">
                        Discord
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title="Legal" className="text-purple-600"/>
                    <Footer.LinkGroup col={true} className="text-purple-600">
                        <Footer.Link href="#">
                        Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="#">
                        Terms & Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-center">
                <Footer.Copyright
                    href="#"
                    by="ChainSplit™"
                    className="text-purple-600"
                    year={2022}
                />
                </div>
            </div>
        </Footer>
    );
}

export default SiteFooter;