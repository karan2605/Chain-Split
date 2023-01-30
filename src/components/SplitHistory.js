import DashboardBar from "./DashboardBar";
import DashboardSidebar from "./DashboardSidebar";
import SiteFooter from "./SiteFooter";

import { useEffect, useState } from "react";

import { GetEvents } from "./Utilities";

import { Card, Badge, Table } from "flowbite-react";

const SplitHistory = () => {
  const [events, getEvents] = useState([]);

  const getSplitEvents = async () => {
    const events = await GetEvents();
    getEvents(events);
  };

  const colours = [
    "info",
    "failure",
    "success",
    "warning",
    "indigo",
    "purple",
    "pink",
  ];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    getSplitEvents();
  }, []);

  return (
    <div className="flex flex-col">
      <DashboardBar />
      <div className="flex flex-row">
        <DashboardSidebar />
        <div className="flex flex-row h-screen bg-stone-900 px-20 py-20 w-full justify-center col-span-2">
          <Card
            className={
              "dark:border-4 dark:border-purple-600 dark:bg-stone-900 w-1/2 justify-between"
            }
          >
            <div className="flex flex-col justify-between">
              <h1 className="text-6xl font-bold leading-none text-gray-900 dark:text-white justify-start">
                Split History
              </h1>
            </div>
            <Table striped={true} className="text-md">
              <Table.Head className={"text-lg"}>
                <Table.HeadCell>Depositor</Table.HeadCell>
                <Table.HeadCell>Group</Table.HeadCell>
                <Table.HeadCell>Amount(ERC20)</Table.HeadCell>
                <Table.HeadCell>Data</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">View TxNs</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {events &&
                  events.map((item, key) => {
                    return (
                      <Table.Row
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        key={key}
                      >
                        <Table.Cell>
                          <Badge color={colours[getRandomInt(0, 6)]} size="lg">
                            {item.args.sender.slice(0, 5) +
                              "..." +
                              item.args.sender.slice(38, 42)}
                          </Badge>
                        </Table.Cell>
                        <Table.Cell>
                          <Badge color={colours[getRandomInt(0, 6)]} size="lg">
                            {item.args.group}
                          </Badge>
                        </Table.Cell>
                        <Table.Cell>{item.args.amount.toString()}</Table.Cell>
                        <Table.Cell>
                          <a
                            href="/tables"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                          >
                            View Full TxN Data
                          </a>
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
              </Table.Body>
            </Table>
          </Card>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default SplitHistory;
