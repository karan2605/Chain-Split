import { Card } from "flowbite-react/lib/cjs/components/Card/Card";
import { Table } from "flowbite-react/lib/cjs/components/Table/Table";
import { Badge } from "flowbite-react/lib/cjs/components/Badge/Badge";

const RecentActivity = () => {
    return (
        <Card className={"dark:border-4 dark:border-purple-600 dark:bg-stone-900"}>
            <div className="flex flex-col">
                <div className="mb-4 flex justify-between">
                    <h1 className="text-4xl font-bold leading-none text-gray-900 dark:text-white">
                        Recent Activity
                    </h1>
                    <a
                        href="/"
                        className="text-xl font-bold hover:underline dark:text-purple-600"
                    >
                        View all
                    </a>
                </div>
                <Table striped={true} className="text-md">
                    <Table.Head>
                        <Table.HeadCell>
                        From
                        </Table.HeadCell>
                        <Table.HeadCell>
                        To
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Amount(ETH)
                        </Table.HeadCell>
                        <Table.HeadCell>
                        <span className="sr-only">
                            View TxN
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
                            <Badge color="purple" size="lg">
                                0x213ef...j2nk
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
                            View TxN
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
                            <Badge color="purple" size="lg">
                                0x213ef...j2nk
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
                            View TxN
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
                            <Badge color="purple" size="lg">
                                0x213ef...j2nk
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
                            View TxN
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
                            <Badge color="purple" size="lg">
                                0x213ef...j2nk
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
                            View TxN
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
                            <Badge color="purple" size="lg">
                                0x213ef...j2nk
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
                            View TxN
                            </a>
                        </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </Card>
    )
}

export default RecentActivity;