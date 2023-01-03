import { Web3Storage, File } from "web3.storage";

import AccountAddress from "../contractData/Account-address.json";
import SplitExpensesAddress from "../contractData/SplitExpenses-address.json"

import AccountAbi from "../contractData/Account.json";
import SplitExpensesAbi from "../contractData/SplitExpenses.json";

import { ethers } from "ethers";

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

  const acc = new ethers.Contract(
    AccountAddress.address,
    AccountAbi.abi,
    prov
  );

  const signer = prov.getSigner();

  let transaction = await acc.connect(signer).setHash(cid);
  await transaction.wait();
};

const GetAccountData = async () => {
  const prov = new ethers.providers.Web3Provider(window.ethereum);
  const account = new ethers.Contract(
    AccountAddress.address,
    AccountAbi.abi,
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

const GetImage = async () => {
  const data = await GetAccountData();
  const cid = data.picture

  const client = makeStorageClient();
  let res = await client.get(cid);
  console.log(`Got a response! [${res.status}] ${res.statusText}`);
  if (!res.ok) {
    throw new Error(`failed to get ${cid}`);
  }
  const files = await res.files();
  return files
}

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

  const acc = new ethers.Contract(
    SplitExpensesAddress.address,
    SplitExpensesAbi.abi,
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
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const acc = new ethers.Contract(
    SplitExpensesAddress.address,
    SplitExpensesAbi.abi,
    provider
  );

  const signer = await provider.getSigner();

  let transaction = await acc.connect(signer).contribute(name);
  await transaction.wait();
};

const TransferTotal = async (name) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const acc = new ethers.Contract(
    SplitExpensesAddress.address,
    SplitExpensesAbi.abi,
    provider
  );

  const signer = await provider.getSigner();

  let transaction = await acc.connect(signer).transferTotal(name);
  await transaction.wait();
};

const ActiveSplits = async () => {
  const prov = new ethers.providers.Web3Provider(window.ethereum);

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = ethers.utils.getAddress(accounts[0]);

  const contract = new ethers.Contract(
    SplitExpensesAddress.address,
    SplitExpensesAbi.abi,
    prov
  );

  const groupData = []
  const userGroups = await contract.getUserGroups(account);

  for(let i=0; i < userGroups.length; i++) {
    const groupMembers = await contract.getMembers(userGroups[i]);
    const groupTotal = await contract.getTotal(userGroups[i])

    const group = JSON.stringify({
      group: userGroups[i],
      members: groupMembers,
      total: groupTotal.toString()
    })

    groupData.push(group)
  }

  return groupData
}

const GetAmountOwed = async (name) => {
  const prov = new ethers.providers.Web3Provider(window.ethereum);

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = ethers.utils.getAddress(accounts[0]);

  const contract = new ethers.Contract(
    SplitExpensesAddress.address,
    SplitExpensesAbi.abi,
    prov
  );

  const amount = await contract.getAmount(name, account)

  return amount
}

export {
  UploadToIPFS,
  makeStorageClient,
  StoreFiles,
  InitiateSplit,
  Contribute,
  TransferTotal,
  GetAccountData,
  ActiveSplits,
  GetImage,
  GetAmountOwed
};
