import { Card } from "flowbite-react/lib/cjs/components/Card";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi2";
import { HiOutlineCurrencyPound } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { HiOutlineBolt } from "react-icons/hi2";

const HomeInfo = () => {
    return(
        <div className="grid grid-cols-3 gap-10 pr-20 pl-20 justify-center h-2/4 px-20 py-20">
            <Card className={"dark:border-4 dark:border-purple-600 dark:bg-stone-900 place-content-center"}>
                <div className="flex flex-col items-center">
                    <div class="w-20 bg-gradient-to-r from-blue-600 to-fuchsia-600 -mt-12 rounded-lg overflow-hidden py-2">
                        <HiOutlineLockClosed className="h-10 w-20 text-white"/>
                    </div>
                    <h5 className="text-2xl font-bold tracking-tight text-white p-4">
                    Feature
                    </h5>
                    <p className="font-normal text-white">
                    Here is why ChainSplit is a really good app.
                    </p>
                </div>
            </Card>
            <Card className={"dark:border-4 dark:border-purple-600 dark:bg-stone-900 place-content-center"}>
                <div className="flex flex-col items-center">
                    <div class="w-20 bg-gradient-to-r from-blue-600 to-fuchsia-600 -mt-12 rounded-lg overflow-hidden py-2">
                        <HiOutlineEye className="h-10 w-20 text-white"/>
                    </div>
                    <h5 className="text-2xl font-bold tracking-tight text-white p-4">
                    Feature
                    </h5>
                    <p className="font-normal text-white">
                    Here is why ChainSplit is a really good app.
                    </p>
                </div>
            </Card>
            <Card className={"dark:border-4 dark:border-purple-600 dark:bg-stone-900 place-content-center"}>
                <div className="flex flex-col items-center">
                    <div class="w-20 bg-gradient-to-r from-blue-600 to-fuchsia-600 -mt-12 rounded-lg overflow-hidden py-2">
                        <HiOutlineCurrencyPound className="h-10 w-20 text-white"/>
                    </div>
                    <h5 className="text-2xl font-bold tracking-tight text-white p-4">
                    Feature
                    </h5>
                    <p className="font-normal text-white">
                    Here is why ChainSplit is a really good app.
                    </p>
                </div>
            </Card>
            <Card className={"dark:border-4 dark:border-purple-600 dark:bg-stone-900 place-content-center"}>
                <div className="flex flex-col items-center">
                    <div class="w-20 bg-gradient-to-r from-blue-600 to-fuchsia-600 -mt-12 rounded-lg overflow-hidden py-2">
                        <HiOutlineUserGroup className="h-10 w-20 text-white"/>
                    </div>
                    <h5 className="text-2xl font-bold tracking-tight text-white p-4">
                    Feature
                    </h5>
                    <p className="font-normal text-white">
                    Here is why ChainSplit is a really good app.
                    </p>
                </div>
            </Card>
            <Card className={"dark:border-4 dark:border-purple-600 dark:bg-stone-900 place-content-center"}>
                <div className="flex flex-col items-center">
                    <div class="w-20 bg-gradient-to-r from-blue-600 to-fuchsia-600 -mt-12 rounded-lg overflow-hidden py-2">
                        <HiOutlineCommandLine className="h-10 w-20 text-white"/>
                    </div>
                    <h5 className="text-2xl font-bold tracking-tight text-white p-4">
                    Feature
                    </h5>
                    <p className="font-normal text-white">
                    Here is why ChainSplit is a really good app.
                    </p>
                </div>
            </Card>
            <Card className={"dark:border-4 dark:border-purple-600 dark:bg-stone-900 place-content-center"}>
                <div className="flex flex-col items-center">
                    <div class="w-20 bg-gradient-to-r from-blue-600 to-fuchsia-600 -mt-12 rounded-lg overflow-hidden py-2">
                        <HiOutlineBolt className="h-10 w-20 text-white"/>
                    </div>
                    <h5 className="text-2xl font-bold tracking-tight text-white p-4">
                    Feature
                    </h5>
                    <p className="font-normal text-white">
                    Here is why ChainSplit is a really good app.
                    </p>
                </div>
            </Card>
        </div>
    )
}

export default HomeInfo;