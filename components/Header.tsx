import Image from "next/image"
import Link from "next/link"

function Header() {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <div className="flex items-center space-x-2">
                <Link href='/'>
                    <Image className='rounded-full ' width={100} height={100} src="https://www.logo.wine/a/logo/Beyond_Meat/Beyond_Meat-Icon-Logo.wine.svg" alt="logo" />
                </Link>
            </div>
            <div>
                <Link href='/' className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#0bda51] flex items-center rounded-full text-center">
                    Subscribe
                </Link>
            </div>
        </header>
    )
}

export default Header