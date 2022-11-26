import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavigationBar from "./Navbar";
import SiteFooter from "./SiteFooter";

import {
  Button,
  Label,
  TextInput,
  Card,
  FileInput,
  Alert,
} from "flowbite-react";

import { Web3Storage, File } from "web3.storage";

const CreateAccount = () => {
  const [account, setAccount] = useState(null);
  const [file, setFile] = useState(null);

  let navigate = useNavigate();

  function getAccessToken() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE0RjI0MjVkMGVGZjE5QmFFZDc1YzA3ZTNENEJiNDI4MTdiZDYzZGYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjkzNzA0NTA0NjIsIm5hbWUiOiJDaGFpblNwbGl0In0.IniPPZENlFLjDWi4_tAwgc67THksBDYTcSrCYR2kj28";
  }

  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() });
  }

  const connectHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  };

  const uploadFile = (event) => {
    let file = event.target.files[0];
    console.log(file);

    if (file) {
      setFile(file);
    }
  };

  const uploadAccount = async (event) => {
    event.preventDefault();
    console.log(file);

    const data = new Blob(
      [
        JSON.stringify({
          account: account,
          picture: file,
          phoneNumber: event.target[2].value,
          friends: [],
          groups: {},
        }),
      ],
      { type: "application/json" }
    );

    const files = [new File([data], `${account}.json`)];

    storeFiles(files);

    navigate("/dashboard");

    return (
      <Alert
        color="success"
        onDismiss={function onDismiss() {
          return alert("Alert dismissed!");
        }}
      >
        <span>
          <span className="font-medium">Account Created!</span> 
        </span>
      </Alert>
    );
  };

  useEffect(() => {
    connectHandler();
  });

  async function storeFiles(files) {
    const client = makeStorageClient();
    const cid = await client.put(files);
    console.log("stored files with cid:", cid);
    return cid;
  }

  return (
    <div className="flex flex-col bg-stone-800 ">
      <NavigationBar />

      <div className="flex h-full bg-stone-800 py-40 justify-center">
        <Card
          className={"dark:border-4 dark:border-purple-600 dark:bg-stone-900"}
        >
          <h1 className="text-3xl font-bold text-white py-3">
            Create your Account
          </h1>
          <form className="flex flex-col gap-4" onSubmit={uploadAccount}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="account" value="Account" />
              </div>
              <TextInput
                id="account"
                type="text"
                required={true}
                placeholder={
                  account &&
                  account.slice(0, 10) + "..." + account.slice(30, 42)
                }
                disabled
              />
            </div>
            <div id="fileUpload">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Upload Profile Picture" />
              </div>
              <FileInput id="file" required={true} onChange={uploadFile} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phoneNum" value="Phone Number" />
              </div>
              <TextInput id="phoneNum" type="text" required={true} />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Card>
      </div>
      <SiteFooter />
    </div>
  );
};

export default CreateAccount;
