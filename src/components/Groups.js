import DashboardBar from "./DashboardBar";
import DashboardSidebar from "./DashboardSidebar";
import SiteFooter from "./SiteFooter";

import { useEffect, useState } from "react";
import { ActiveSplits } from "./Utilities";

import { Card, Badge, Table } from "flowbite-react";

const Groups = () => {
  const [splits, setSplits] = useState(null);

  const colours = [
    "info",
    "failure",
    "success",
    "warning",
    "indigo",
    "purple",
    "pink",
  ];

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
  }, []);

  return (
    <div className="flex flex-col">
      <DashboardBar />
      <div className="flex flex-row">
        <DashboardSidebar />
        <div className="flex flex-row h-screen bg-stone-900 px-20 py-20 w-full justify-center col-span-2">
          <Card
            className={
              "grid dark:border-4 dark:border-purple-600 dark:bg-stone-900 w-2/3"
            }
          >
            <h1 className="text-6xl font-bold text-white">Groups</h1>
            <Table striped={true} className="text-md">
              <Table.Head className={"text-lg"}>
                <Table.HeadCell>Group</Table.HeadCell>
                <Table.HeadCell>Total (ERC20)</Table.HeadCell>
                <Table.HeadCell>Members</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {splits &&
                  splits.map((item, key) => {
                    return (
                      <Table.Row
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        key={key}
                      >
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {JSON.parse(item).group}
                        </Table.Cell>
                        <Table.Cell>{JSON.parse(item).total}</Table.Cell>
                        <Table.Cell className="flex gap-2">
                          {JSON.parse(item).members.map((i, k) => {
                            return (
                              <Badge
                                color={colours[getRandomInt(0, 6)]}
                                size="lg"
                                key={k}
                              >
                                {i.slice(0, 5) + "..." + i.slice(38, 42)}
                              </Badge>
                            );
                          })}
                        </Table.Cell>
                        <Table.Cell></Table.Cell>
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

export default Groups;
