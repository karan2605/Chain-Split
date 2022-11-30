import { Card } from "flowbite-react/lib/cjs/components/Card/Card";

const Stats = ({ globalData }) => {

  return (
    <Card
      className={
        "dark:border-4 dark:border-purple-600 dark:bg-stone-900 place-content-center col-span-3"
      }
    >
      <div className="flex flex-col">
        <div className="flex flex-row gap-4 items-center justify-evenly">
          <Card className={"h-96 text-center"}>
            <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total Received
            </h5>
            <h1 className="text-5xl font-bold tracking-tight text-green-500">
               {0 && globalData.received} ETH
            </h1>
          </Card>
          <Card className={"h-96 text-center"}>
            <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total Contributed
            </h5>
            <h1 className="text-5xl font-bold tracking-tight text-red-600">
              {0 && globalData.contributed} ETH
            </h1>
          </Card>
          <Card className={"h-96 text-center"}>
            <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Number of Active Splits
            </h5>
            <h1 className="text-5xl font-bold tracking-tight text-blue-500">
              {0 && globalData.active}
            </h1>
          </Card>
        </div>
      </div>
    </Card>
  );
};

export default Stats;
