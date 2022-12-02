import { Card } from "flowbite-react/lib/cjs/components/Card/Card";
import { Badge } from "flowbite-react/lib/cjs/components/Badge/Badge";
import { Link } from "react-router-dom";

const Friends = ({ globalData }) => {
    return (
        <Card className={"dark:border-4 dark:border-purple-600 dark:bg-stone-900 place-content-center"}>
            <div className="flex flex-col">
                <div className="mb-4 flex justify-between">
                    <h1 className="text-4xl font-bold leading-none text-gray-900 dark:text-white">
                        Friends
                    </h1>
                    <Link to="/history" className="text-xl font-bold hover:underline dark:text-purple-600">
                        View all
                    </Link>
                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {globalData.friends.map ((item, key) => {
                            return (
                            <li className="py-3 sm:py-4" key={key}>
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                                    alt=""
                                />
                                </div>
                                <div className="min-w-0 flex-1">
                                <p className="truncate text-lg font-medium text-gray-900 dark:text-white">
                                    {item.name}
                                </p>
                                </div>
                                <Badge color="purple" size="lg">
                                    {item.account}
                                </Badge>
                            </div>
                            </li>);
                        }) }
                    </ul>
                </div>
            </div>
        </Card>
    )
}

export default Friends;