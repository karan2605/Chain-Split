import { Card } from "flowbite-react/lib/cjs/components/Card/Card";

const Friends = () => {
    return (
        <Card className={"dark:border-4 dark:border-purple-600 dark:bg-stone-900 place-content-center"}>
            <div className="flex flex-col">
                <div className="mb-4 flex justify-between">
                    <h1 className="text-4xl font-bold leading-none text-gray-900 dark:text-white">
                        Friends
                    </h1>
                    <a
                        href="/"
                        className="text-xl font-bold hover:underline dark:text-purple-600"
                    >
                        View all
                    </a>
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
                            <p className="truncate text-lg text-gray-500 dark:text-gray-400">
                                email@windster.com
                            </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $320
                            </div>
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
                            <p className="truncate text-lg text-gray-500 dark:text-gray-400">
                                email@windster.com
                            </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $3467
                            </div>
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
                            <p className="truncate text-lg text-gray-500 dark:text-gray-400">
                                email@windster.com
                            </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $67
                            </div>
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
                            <p className="truncate text-lg text-gray-500 dark:text-gray-400">
                                email@windster.com
                            </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $367
                            </div>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}

export default Friends;