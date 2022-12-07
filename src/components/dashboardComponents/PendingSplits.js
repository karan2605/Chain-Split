import { Card } from "flowbite-react/lib/cjs/components/Card/Card";
import { Table } from "flowbite-react/lib/cjs/components/Table/Table";
import { Badge } from "flowbite-react/lib/cjs/components/Badge/Badge";
import { Progress } from "flowbite-react/lib/cjs/components/Progress/Progress";
import { Link } from "react-router-dom";

const PendingSplits = ({ globalData }) => {
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
                        Progress
                        </Table.HeadCell>
                     
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {globalData.groups && globalData.groups.map ((item, key) => {
                            return (
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>
                                    <Badge color="failure" size="lg">
                                        {item.name}
                                    </Badge>
                                </Table.Cell>
                                <Table.Cell>
                                    <Progress
                                        progress={45}
                                        className="bg-gradient-to-r from-stone-600 to-stone-600" 
                                        color="purple"
                                    />
                                </Table.Cell>
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table>
            </div>
        </Card>
    )
}

export default PendingSplits;