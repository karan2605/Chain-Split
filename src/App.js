import { Navbar } from "flowbite-react/lib/cjs/components/Navbar";
import { Button } from "flowbite-react/lib/cjs/components/Button";
import logo from "./assets/logo.png";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <div className="app">
    <Navbar
      className="bg-stone-900 py-2"
      fluid={true}
    >
      <Navbar.Brand>
        <img
          src={logo}
          className="mr-3 h-6 sm:h-9 rounded-lg"
          alt="Logo"
        />
        <span className="self-center text-4xl font-bold text-purple-600 py-3">
          ChainSplit
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 text-4xl ">
        <Button gradientDuoTone="purpleToBlue" size="lg" className="font-mono font-semibold">
          Connect
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        <Navbar.Link
          href="/navbars"
          active={true}
          className="self-center text-3xl font-bold text-purple-600 py-3"
        >
          Home
        </Navbar.Link >
        <Navbar.Link href="/navbars" className="self-center text-3xl font-semibold text-white py-3">
          About
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="self-center text-3xl font-semibold text-white py-3">
          Services
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="self-center text-3xl font-semibold text-white py-3">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="self-center text-3xl font-semibold text-white py-3">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    <div class="container mx-auto">
     
    </div>
    <SiteFooter />
    </div>
  );
}

export default App;
