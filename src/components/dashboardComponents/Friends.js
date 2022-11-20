import { Card } from "flowbite-react/lib/cjs/components/Card/Card";
import { Badge } from "flowbite-react/lib/cjs/components/Badge/Badge";
import { Link } from "react-router-dom";

const Friends = () => {
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
                        <li className="py-3 sm:py-4">
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
                                Neil Sims
                            </p>
                            </div>
                            <Badge color="purple" size="lg">
                                0x213ef...j2nk
                            </Badge>
                        </div>
                        </li>
                        <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="shrink-0">
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                alt=""
                            />
                            </div>
                            <div className="min-w-0 flex-1">
                            <p className="truncate text-lg font-medium text-gray-900 dark:text-white">
                                Bonnie Green
                            </p>
                            </div>
                            <Badge color="purple" size="lg">
                                0x213ef...j2nk
                            </Badge>
                        </div>
                        </li>
                        <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="shrink-0">
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                alt=""
                            />
                            </div>
                            <div className="min-w-0 flex-1">
                            <p className="truncate text-lg font-medium text-gray-900 dark:text-white">
                                Michael Gough
                            </p>
                            </div>
                            <Badge color="purple" size="lg">
                                0x213ef...j2nk
                            </Badge>
                        </div>
                        </li>
                        <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="shrink-0">
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                alt=""
                            />
                            </div>
                            <div className="min-w-0 flex-1">
                            <p className="truncate text-lg font-medium text-gray-900 dark:text-white">
                                Lana Byrd
                            </p>
                            </div>
                            <Badge color="purple" size="lg">
                                0x213ef...j2nk
                            </Badge>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}

export default Friends;