import { ethers } from "ethers";
import { useState, useEffect } from "react";

import NavigationBar from "./Navbar";
import SiteFooter from "./SiteFooter";
import { useForm } from "react-hook-form";

import { makeStorageClient, UploadToIPFS, StoreFiles } from "./Utilities";

import {
  Button,
  Label,
  TextInput,
  Card,
  FileInput,
  Alert,
} from "flowbite-react";

const CreateAccount = ({ globalData, globalcid }) => {
  const [account, setAccount] = useState(null)
  const [file, setFile] = useState(null)
  const [showAlert, setShowAlert] = useState(false)

  const { reset } = useForm()

  makeStorageClient()

  const connectHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  };

  const uploadFile = (event) => {
    let file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const uploadAccount = async (event) => {
    event.preventDefault();

    const imgHash = await StoreFiles([file]);

    const data = new Blob([JSON.stringify({
          account: account,
          picture: imgHash,
          phoneNumber: event.target[2].value,
          friends: [],
          groups: {},
          received: 0,
          contributed: 0,
          active: 0
        })], { type: 'application/json' });

    UploadToIPFS(account, data)

    setShowAlert(true)
    reset()
  };

  useEffect(() => {
    connectHandler();
  },[]);

  return (
    <div className="flex flex-col bg-stone-800 ">
      <NavigationBar />
      {showAlert && <Alert
        color="success"
        onDismiss={function onDismiss() {
          setShowAlert(false)
        }}
      >
        <span>
          <span className="font-medium">Account Created! You can now log in by connecting to MetaMask</span> 
        </span>
      </Alert> }

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
