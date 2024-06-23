import {Logo} from "@/components/icons/Icons";
import Link from "next/link";
import {ThemeButton} from "@/components/ThemeButton";

export function NavBar(){
    return(
        <nav className="flex md:flex-row flex-col justify-between items-center container mx-auto border border-indigo-600 bg-indigo-600/25 rounded-xl py-5 md:divide-y-0 divide-y">
            <div className={'py-2 flex justify-between w-full'}>
                <Logo/>
                <div className={'block md:hidden'}>
                    <ThemeButton/>
                </div>
            </div>
            <ul className={"md:py-0 py-2 flex md:flex-row flex-col justify-center items-center gap-5 text-gray-800 dark:text-slate-500 font-semibold capitalize md:w-auto w-full md:px-3 px-0"}>
                <li className={'hover:text-sky-500 '}>
                    <Link href={'/'}>Home</Link>
                </li>
                <li className={'hover:text-sky-500 '}>
                    <Link href={'/home/auth/login'}>Login</Link>
                </li>
                <li className={'hover:text-sky-500 '}>
                    <Link href={'/home/information'}>informacions</Link>

                </li>
                <li className={'hover:text-sky-500 '}>
                    <Link href={'/home/contact'}>Contact</Link>
                </li>
                <li className={'hover:text-sky-500 '}>
                    <Link href={'/'}></Link>
                </li>
                <li className={'hidden md:block'}>
                    <ThemeButton/>
                </li>
            </ul>
        </nav>
    )
}
