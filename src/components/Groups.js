import DashboardBar from "./DashboardBar";
import DashboardSidebar from "./DashboardSidebar";
import SiteFooter from "./SiteFooter";
import { Card } from "flowbite-react/lib/cjs/components/Card";
import { Badge } from "flowbite-react/lib/cjs/components/Badge";
import { Accordion } from "flowbite-react/lib/cjs/components/Accordion";
import { HiOutlineArrowCircleDown } from "react-icons/hi";

const Groups = () => {
  return (
    <div className="flex flex-col">
      <DashboardBar />
      <div className="flex flex-row">
        <DashboardSidebar />
        <div className="flex flex-row h-screen bg-stone-900 px-20 py-20 w-full justify-center col-span-2">
          <Card
            className={
              "grid dark:border-4 dark:border-purple-600 dark:bg-stone-900 w-1/2"
            }
          >
            <h1 className="text-6xl font-bold text-white">
              Groups
            </h1>
            <Accordion
              arrowIcon={HiOutlineArrowCircleDown}
              alwaysOpen={false}
              className={"text-xl"}>
              <Accordion.Panel>
                <Accordion.Title className={"font-bold"}>
                  Group 1
                </Accordion.Title>
                <Accordion.Content>
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
                          <a
                            href="www.etherscan.io"
                            className="text-xl font-bold hover:underline dark:text-purple-600"
                          >
                            View Account
                          </a>
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
                          <a
                            href="/"
                            className="text-xl font-bold hover:underline dark:text-purple-600"
                          >
                            View Account
                          </a>
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
                          <a
                            href="/"
                            className="text-xl font-bold hover:underline dark:text-purple-600"
                          >
                            View Account
                          </a>
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
                          <a
                            href="/"
                            className="text-xl font-bold hover:underline dark:text-purple-600"
                          >
                            View Account
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className={"font-bold"}>
                  Group 2
                </Accordion.Title>
                <Accordion.Content>
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
                          <a
                            href="www.etherscan.io"
                            className="text-xl font-bold hover:underline dark:text-purple-600"
                          >
                            View Account
                          </a>
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
                          <a
                            href="/"
                            className="text-xl font-bold hover:underline dark:text-purple-600"
                          >
                            View Account
                          </a>
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
                          <a
                            href="/"
                            className="text-xl font-bold hover:underline dark:text-purple-600"
                          >
                            View Account
                          </a>
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
                          <a
                            href="/"
                            className="text-xl font-bold hover:underline dark:text-purple-600"
                          >
                            View Account
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Accordion.Content>
              </Accordion.Panel><Accordion.Panel>
                <Accordion.Title className={"font-bold"}>
                  Group 3
                </Accordion.Title>
                <Accordion.Content>
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
                          <a
                            href="www.etherscan.io"
                            className="text-xl font-bold hover:underline dark:text-purple-600"
                          >
                            View Account
                          </a>
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
                          <a
                            href="/"
                            className="text-xl font-bold hover:underline dark:text-purple-600"
                          >
                            View Account
                          </a>
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
                          <a
                            href="/"
                            className="text-xl font-bold hover:underline dark:text-purple-600"
                          >
                            View Account
                          </a>
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
                          <a
                            href="/"
                            className="text-xl font-bold hover:underline dark:text-purple-600"
                          >
                            View Account
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Accordion.Content>
              </Accordion.Panel><Accordion.Panel>
                <Accordion.Title className={"font-bold"}>
                  Group 4
                </Accordion.Title>
                <Accordion.Content>
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
                          <a
                            href="www.etherscan.io"
                            className="text-xl font-bold hover:underline dark:text-purple-600"
                          >
                            View Account
                          </a>
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
                          <a
                            href="/"
                            className="text-xl font-bold hover:underline dark:text-purple-600"
                          >
                            View Account
                          </a>
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
                          <a
                            href="/"
                            className="text-xl font-bold hover:underline dark:text-purple-600"
                          >
                            View Account
                          </a>
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
                          <a
                            href="/"
                            className="text-xl font-bold hover:underline dark:text-purple-600"
                          >
                            View Account
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </Card>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default Groups;
