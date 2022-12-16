import { Label, TextInput, Button, Modal, Table, Alert } from "flowbite-react";

import { ethers } from "ethers";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { InitiateSplit, UploadToIPFS, GetAccountData } from "./Utilities";

const NewSplit = ({ toggle, globalData, account }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState(null);
  const { reset } = useForm();

  const [depositors, setDepositors] = useState([]);
  const [depositorAmts, setDepositorAmts] = useState([]);

  const startSplit = async (event) => {
    event.preventDefault();

    const groupName = event.target[0].value;
    const total = event.target[1].value;
    const contribution = event.target[2].value;

    for(let i = 0; i < data.friends.length; i++) {
      setDepositors((depositors) => [...depositors, event.target[i+3].id]);
      setDepositorAmts((depositorAmts) => [...depositorAmts, event.target[i+3].value]);
    }

    InitiateSplit(total, contribution, depositors, depositorAmts);

    const groupJSON = JSON.stringify({
      name: groupName,
      total: total,
      initiator: account,
      initiatorAmt: contribution,
      depositors: depositors,
      depositorAmts: depositorAmts,
    });

    data.groups = [...data.groups, groupJSON];
    data.active += 1;

    console.log(data)

    // await UploadToIPFS(new Blob([JSON.stringify(data)], { type: "application/json" }));
    setShowAlert(true);
    reset();
  };

  const getData = async () => {
    const data = await GetAccountData();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Modal show={true} position="center" onClose={toggle} size="4xl">
      {showAlert && (
        <Alert
          color="success"
          onDismiss={function onDismiss() {
            setShowAlert(false);
          }}
        >
          <span>
            <span className="font-medium">Your split has been initiated!</span>
          </span>
        </Alert>
      )}
      <Modal.Header>Start a New Split</Modal.Header>
      <Modal.Body>
        <form className="flex flex-col gap-4" onSubmit={startSplit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="groupName" value="Group Name" />
            </div>
            <TextInput id="groupName" type="text" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="TotalAmount" value="Total Amount" />
            </div>
            <TextInput
              id="TotalAmount"
              type="number"
              required={true}
              placeholder="> 0"
              className="font-mono"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="initContrib" value="Your Contribution" />
            </div>
            <TextInput
              id="initContrib"
              type="number"
              required={true}
              placeholder=">= 0"
              className="font-mono"
            />
          </div>
          <div>
            <Table>
              <Table.Head>
                <Table.HeadCell>Friends</Table.HeadCell>
                <Table.HeadCell>Amount Required</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {data &&
                  data.friends.map((item, key) => {
                    return (
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={key}>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {item.name}
                        </Table.Cell>
                        <Table.Cell>
                          <TextInput
                            id={item.account}
                            type="number"
                            size="sm"
                            placeholder="> 0"
                            className="font-mono"
                          />
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
              </Table.Body>
            </Table>
          </div>
          <Button type="submit" color="purple">
            Confirm
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Label
          value="NOTE - Once confirmed the transaction is irreversible"
          class={"text-red-700 font-bold"}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default NewSplit;
