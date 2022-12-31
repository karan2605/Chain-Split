import { Card, Table, Badge, Button } from "flowbite-react";
import { Link } from "react-router-dom";

import { ActiveSplits } from "../Utilities";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const PendingSplits = ({ globalData }) => {
  const [splits, setSplits] = useState(null);
  const [account, setAccount] = useState(null);

  const colours = [
    "info",
    "failure",
    "success",
    "warning",
    "indigo",
    "purple",
    "pink",
  ];

  const getAccount = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  };

  const findActive = async () => {
    const splits = await ActiveSplits();
    setSplits(splits);
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    findActive();
    getAccount();
  }, []);

  return (
    <Card
      className={
        "dark:border-4 dark:border-purple-600 dark:bg-stone-900 place-content-center"
      }
    >
      <div className="flex flex-col">
        <div className="mb-4 flex justify-between">
          <h1 className="text-4xl font-bold leading-none text-gray-900 dark:text-white">
            Pending Splits
          </h1>
          <Link
            to="/history"
            className="text-xl font-bold hover:underline dark:text-purple-600"
          >
            View all
          </Link>
        </div>
        <Table striped={true} className="text-md">
          <Table.Head className={"text-lg"}>
            <Table.HeadCell>Group</Table.HeadCell>
            <Table.HeadCell>Total (ERC20)</Table.HeadCell>
            <Table.HeadCell>Members</Table.HeadCell>
            <Table.HeadCell>Contribute</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {splits &&
              splits.map((item, key) => {
                return (
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {JSON.parse(item).group}
                    </Table.Cell>
                    <Table.Cell>{JSON.parse(item).total}</Table.Cell>
                    <Table.Cell className="flex gap-2">
                      {JSON.parse(item).members.map((i, k) => {
                        return (
                          <Badge color={colours[getRandomInt(0, 6)]} size="lg">
                            {i.slice(0, 5) + "..." + i.slice(38, 42)}
                          </Badge>
                        );
                      })}
                    </Table.Cell>
                    <Table.Cell>
                      {account === JSON.parse(item).members[0] ? (
                        <Button
                          gradientDuoTone="purpleToPink"
                          size="sm"
                          className="font-semibold "
                        >
                          <span className="text-lg">Collect Funds</span>
                        </Button>
                      ) : (
                        <Button
                          gradientDuoTone="purpleToPink"
                          size="sm"
                          className="font-semibold "
                        >
                          <span className="text-lg">Contribute</span>
                        </Button>
                      )}
                    </Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>
      </div>
    </Card>
  );
};

export default PendingSplits;
