import DashboardBar from "./DashboardBar";
import DashboardSidebar from "./DashboardSidebar";
import SiteFooter from "./SiteFooter";

import { Card } from "flowbite-react/lib/cjs/components/Card";
import { Badge } from "flowbite-react/lib/cjs/components/Badge";
import { Table } from "flowbite-react/lib/cjs/components/Table";

const SplitHistory = () => {
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
                        <Table.HeadCell>
                        Depositor
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Group
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Amount(ETH)
                        </Table.HeadCell>
                        <Table.HeadCell>
                        <span className="sr-only">
                            View TxNs
                        </span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>
                            <Badge color="purple" size="lg">
                                0x213ef...j2nk
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>
                            <Badge color="warning" size="lg">
                                Group 1
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>
                            0.005
                        </Table.Cell>
                        <Table.Cell>
                            <a
                            href="/tables"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                            View TxNs
                            </a>
                        </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>
                            <Badge color="purple" size="lg">
                                0x213ef...j2nk
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>
                            <Badge color="failure" size="lg">
                                Group 2
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>
                            0.007
                        </Table.Cell>
                        <Table.Cell>
                            <a
                            href="/tables"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                            View TxNs
                            </a>
                        </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>
                            <Badge color="purple" size="lg">
                                0x213ef...j2nk
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>
                            <Badge color="success" size="lg">
                                Group 3
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>
                            0.002
                        </Table.Cell>
                        <Table.Cell>
                            <a
                            href="/tables"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                            View TxNs
                            </a>
                        </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>
                            <Badge color="purple" size="lg">
                                0x213ef...j2nk
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>
                            <Badge size="lg">
                                Group 4
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>
                            0.015
                        </Table.Cell>
                        <Table.Cell>
                            <a
                            href="/tables"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                            View TxNs
                            </a>
                        </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>
                            <Badge color="purple" size="lg">
                                0x213ef...j2nk
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>
                            <Badge color="pink" size="lg">
                                Group 5
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>
                            0.025
                        </Table.Cell>
                        <Table.Cell>
                            <a
                            href="/tables"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                            View TxNs
                            </a>
                        </Table.Cell>
                        </Table.Row>
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
