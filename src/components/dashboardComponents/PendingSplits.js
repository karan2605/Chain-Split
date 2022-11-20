import { Card } from "flowbite-react/lib/cjs/components/Card/Card";
import { Table } from "flowbite-react/lib/cjs/components/Table/Table";
import { Badge } from "flowbite-react/lib/cjs/components/Badge/Badge";
import { Progress } from "flowbite-react/lib/cjs/components/Progress/Progress";
import { Link } from "react-router-dom";

const PendingSplits = () => {
    return (
        <Card className={"dark:border-4 dark:border-purple-600 dark:bg-stone-900 place-content-center"}>
            <div className="flex flex-col">
                <div className="mb-4 flex justify-between">
                    <h1 className="text-4xl font-bold leading-none text-gray-900 dark:text-white">
                        Pending Splits
                    </h1>
                    <Link to="/history" className="text-xl font-bold hover:underline dark:text-purple-600">
                        View all
                    </Link>
                </div>
                <Table striped={true} className="text-md">
                    <Table.Head className={"text-lg"}>
                        <Table.HeadCell>
                        Group
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Amount Left(ETH)
                        </Table.HeadCell>
                        <Table.HeadCell>
                        Progress
                        </Table.HeadCell>
                     
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>
                            <Badge color="failure" size="lg">
                                Work Dinner
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>
                            0.005
                        </Table.Cell>
                        <Table.Cell>
                            <Progress
                                progress={45}
                                className="bg-gradient-to-r from-stone-600 to-stone-600" 
                                color="purple"
                            />
                        </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>
                            <Badge color="info" size="lg">
                                Theme Park
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>
                            0.007
                        </Table.Cell>
                        <Table.Cell>
                            <Progress
                                progress={25}
                                className="bg-gradient-to-r from-stone-600 to-stone-600" 
                                color="purple" 
                            />
                        </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>
                            <Badge color="purple" size="lg">
                                Gas Bill
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>
                            0.002
                        </Table.Cell>
                        <Table.Cell>
                            <Progress
                                progress={75}
                                className="bg-gradient-to-r from-stone-600 to-stone-600" 
                                color="purple" 
                            />
                        </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>
                            <Badge color="success" size="lg">
                                Rent
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>
                            0.015
                        </Table.Cell>
                        <Table.Cell>
                            <Progress
                                progress={15}
                                className="bg-gradient-to-r from-stone-600 to-stone-600" 
                                color="purple" 
                            />
                        </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>
                            <Badge color="warning" size="lg">
                                Water Bill
                            </Badge>
                        </Table.Cell>
                        <Table.Cell>
                            0.025
                        </Table.Cell>
                        <Table.Cell>
                            <Progress
                                progress={85}
                                className="bg-gradient-to-r from-stone-600 to-stone-600"
                                color="purple" 
                            />
                        </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </Card>
    )
}

export default PendingSplits;