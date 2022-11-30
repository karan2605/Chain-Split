import { useEffect, useState } from "react";
import { ethers } from "ethers";

import { Button } from "flowbite-react/lib/cjs/components/Button";

import SiteFooter from "./SiteFooter";
import HomeInfo from "./HomeInfo";
import NavigationBar from "./Navbar";

const Home = () => {
  const [account, setAccount] = useState(null);

  const loadBlockchainData = async () => {
    window.ethereum.on("accountsChanged", async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = ethers.utils.getAddress(accounts[0]);
      setAccount(account);
    });
  };

  useEffect(() => {
    loadBlockchainData()
  }, [])

  return (
    <div className="flex flex-col bg-stone-800 ">
      <NavigationBar account={account} setAccount={setAccount} />

      <div class="w-full h-96 bg-gradient-to-r from-blue-600 to-fuchsia-600">
        <div class="flex flex-col items-center justify-center h-full">
          <h1 class="text-white text-6xl font-semibold p-6">
            A New Way To Split Your Expenses
          </h1>
          <Button
            gradientDuoTone="purpleToPink"
            size="xl"
            className="font-semibold text-4xl"
          >
            <span className="text-3xl">Get Started</span>
          </Button>
        </div>
      </div>

      <HomeInfo />

      <SiteFooter />
    </div>
  );
}

export default Home;