import { ethers } from 'ethers';
import { useState, useEffect } from 'react';

import DashboardSidebar from "./DashboardSidebar";
import DashboardBar from "./DashboardBar";
import SiteFooter from "./SiteFooter";
import RecentActivity from "./dashboardComponents/RecentActivity";
import Friends from "./dashboardComponents/Friends";
import PendingSplits from "./dashboardComponents/PendingSplits";
import Stats from "./dashboardComponents/Stats";

import { Web3Storage, File } from "web3.storage";

const Dashboard = () => {
  const [account, setAccount] = useState(null)

  function getAccessToken() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE0RjI0MjVkMGVGZjE5QmFFZDc1YzA3ZTNENEJiNDI4MTdiZDYzZGYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjkzNzA0NTA0NjIsIm5hbWUiOiJDaGFpblNwbGl0In0.IniPPZENlFLjDWi4_tAwgc67THksBDYTcSrCYR2kj28";
  }

  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() });
  }

  async function retrieve (cid) {
    const client = makeStorageClient()
    const res = await client.get(cid)
    console.log(`Got a response! [${res.status}] ${res.statusText}`)
    if (!res.ok) {
      throw new Error(`failed to get ${cid}`)
    }
  
    // request succeeded! do something with the response object here...
  }


  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account)
  }

  useEffect(() => {
    connectHandler()
  })



  return (
    <div className="flex flex-col">
      <DashboardBar account={account}/>
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
