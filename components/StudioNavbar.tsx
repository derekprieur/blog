import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

function StudioNavbar(props: any) {
    return (
        <div>
            <div className="flex items-center justify-between p-5">
                <Link className="text-[#0bda51] flex items-center" href="/">
                    <ArrowUturnLeftIcon className="h-6 w-6 mr-2" />
                    Go To Website
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavbar