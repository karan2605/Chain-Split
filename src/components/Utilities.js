import { Web3Storage, File } from "web3.storage";

import config from '../config.json';
import Account from "../abis/Account.json"

import { ethers } from "ethers";
import { useState } from "react";

function getAccessToken() {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE0RjI0MjVkMGVGZjE5QmFFZDc1YzA3ZTNENEJiNDI4MTdiZDYzZGYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjkzNzA0NTA0NjIsIm5hbWUiOiJDaGFpblNwbGl0In0.IniPPZENlFLjDWi4_tAwgc67THksBDYTcSrCYR2kj28";
}

const makeStorageClient = () => {
  return new Web3Storage({ token: getAccessToken() });
}

const UploadToIPFS = async ({ account, data }) => {
    const [provider, setProvider] = useState(null)

    const files = [new File([data], account+".json")];

    const cid = await StoreFiles(files);

    const prov = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(prov)
    const network = await prov.getNetwork()
    const acc = new ethers.Contract(config[network.chainId].Account.address, Account, provider)

    const signer = await provider.getSigner()

    let transaction = await acc.connect(signer).setHash(cid)
    await transaction.wait()
}

const StoreFiles = async ({ files }) => {
    const client = makeStorageClient();
    const cid = await client.put(files);
    console.log("stored files with cid:", cid);
    return cid;
  }

export {UploadToIPFS, makeStorageClient, StoreFiles }

