import DashboardBar from "./DashboardBar";
import DashboardSidebar from "./DashboardSidebar";
import SiteFooter from "./SiteFooter";
import { Card } from "flowbite-react/lib/cjs/components/Card";
import { Badge } from "flowbite-react/lib/cjs/components/Badge";

const Groups = () => {
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
              <h1 className="text-4xl font-bold leading-none text-gray-900 dark:text-white justify-start">
                Groups
              </h1>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="min-w-0 flex-1">
                        <Badge color="warning" size="lg">
                          Group 1
                        </Badge>
                      </div>
                      <a
                        href="www.etherscan.io"
                        className="text-xl font-bold hover:underline dark:text-purple-600"
                      >
                        View Members
                      </a>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="min-w-0 flex-1">
                        <Badge color="failure" size="lg">
                          Group 2
                        </Badge>
                      </div>
                      <a
                        href="www.etherscan.io"
                        className="text-xl font-bold hover:underline dark:text-purple-600"
                      >
                        View Members
                      </a>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="min-w-0 flex-1">
                        <Badge color="success" size="lg">
                          Group 3
                        </Badge>
                      </div>
                      <a
                        href="www.etherscan.io"
                        className="text-xl font-bold hover:underline dark:text-purple-600"
                      >
                        View Members
                      </a>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="min-w-0 flex-1">
                        <Badge color="indigo" size="lg">
                          Group 4
                        </Badge>
                      </div>
                      <a
                        href="www.etherscan.io"
                        className="text-xl font-bold hover:underline dark:text-purple-600"
                      >
                        View Members
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default Groups;
