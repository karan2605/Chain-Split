import { Web3Storage, File } from "web3.storage";

import config from "../config.json";
import Account from "../abis/Account.json";
import SplitExpenses from "../abis/SplitExpenses.json";

import { ethers } from "ethers";
import { useState } from "react";

function getAccessToken() {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE0RjI0MjVkMGVGZjE5QmFFZDc1YzA3ZTNENEJiNDI4MTdiZDYzZGYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjkzNzA0NTA0NjIsIm5hbWUiOiJDaGFpblNwbGl0In0.IniPPZENlFLjDWi4_tAwgc67THksBDYTcSrCYR2kj28";
}

const makeStorageClient = () => {
  return new Web3Storage({ token: getAccessToken() });
};

const UploadToIPFS = async (account, data) => {
  const files = [new File([data], account + ".json")];
  const cid = await StoreFiles(files);

  const prov = new ethers.providers.Web3Provider(window.ethereum);

  const network = await prov.getNetwork();
  const acc = new ethers.Contract(
    config[network.chainId].Account.address,
    Account,
    prov
  );

  const signer = prov.getSigner();

  let transaction = await acc.connect(signer).setHash(cid);
  await transaction.wait();
};

const GetAccountData = async () => {
  const prov = new ethers.providers.Web3Provider(window.ethereum);
  const network = await prov.getNetwork();
  const account = new ethers.Contract(
    config[network.chainId].Account.address,
    Account,
    prov
  );
  const signer = prov.getSigner();

  let cid = await account.connect(signer).getHash();
  const client = makeStorageClient();
  let res = await client.get(cid);
  console.log(`Got a response! [${res.status}] ${res.statusText}`);
  if (!res.ok) {
    throw new Error(`failed to get ${cid}`);
  }
  const files = await res.files();
  return JSON.parse(await files[0].text());
};

async function StoreFiles(files) {
  const client = makeStorageClient();
  const cid = await client.put(files);
  console.log("stored files with cid:", cid);
  return cid;
}

const InitiateSplit = async (
  name,
  totalAmount,
  members,
  amounts
) => {
  const prov = new ethers.providers.Web3Provider(window.ethereum);

  const network = await prov.getNetwork();
  const acc = new ethers.Contract(
    config[network.chainId].SplitExpenses.address,
    SplitExpenses,
    prov
  );

  const signer = prov.getSigner();
  let transaction = await acc
    .connect(signer)
    .initiateSplit(
      name,
      totalAmount,
      members,
      amounts
    );
  await transaction.wait();
};

const Contribute = async (name) => {
  const [provider, setProvider] = useState(null);
  const prov = new ethers.providers.Web3Provider(window.ethereum);
  setProvider(prov);

  const network = await prov.getNetwork();
  const acc = new ethers.Contract(
    config[network.chainId].SplitExpenses.address,
    SplitExpenses,
    provider
  );

  const signer = await provider.getSigner();

  let transaction = await acc.connect(signer).contribute(name);
  await transaction.wait();
};

const TransferTotal = async (name) => {
  const [provider, setProvider] = useState(null);
  const prov = new ethers.providers.Web3Provider(window.ethereum);
  setProvider(prov);

  const network = await prov.getNetwork();
  const acc = new ethers.Contract(
    config[network.chainId].SplitExpenses.address,
    SplitExpenses,
    provider
  );

  const signer = await provider.getSigner();

  let transaction = await acc.connect(signer).TransferTotal(name);
  await transaction.wait();
};

export {
  UploadToIPFS,
  makeStorageClient,
  StoreFiles,
  InitiateSplit,
  Contribute,
  TransferTotal,
  GetAccountData,
};
