import { Card } from "flowbite-react/lib/cjs/components/Card/Card";

const PendingSplits = () => {
    return (
        <Card className={"dark:border-4 dark:border-purple-600 dark:bg-stone-900 place-content-center"}>
            <div className="flex flex-col">
                <div className="mb-4 flex justify-between">
                    <h1 className="text-3xl font-bold leading-none text-gray-900 dark:text-white">
                        Pending Splits
                    </h1>
                    <a
                        href="/"
                        className="text-xl font-bold hover:underline dark:text-purple-600"
                    >
                        View all
                    </a>
                </div>
                <p className="font-normal text-white">
                Here is why ChainSplit is a really good app.
                </p>
            </div>
        </Card>
    )
}

export default PendingSplits;