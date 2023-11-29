import Link from 'next/link';
import { useState } from 'react';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Nav = () => {
    const [navbar, setNavbar] = useState(false);

  return (
    <div className={`"w-full bg-black md:bg-transparent absolute top-0 left-0 right-0 z-10" ${navbar ? 'bg-pure-black' : 'bg-transparent'}`}>
        <nav className="md:flex md:items-center p-2 lg:px-8" aria-label="Global">
            <div className="flex justify-between items-center">
                {/*Logo*/}
                <Link href="/">
                    <h2 className="text-lg text-light font-bold cursor-pointer">The Body <span className="font-display text-2xl">Shape </span>Calculator</h2>
                </Link>
                {/*Hamburger Button*/}
                <div className="md:hidden">
                    <button
                        className="p-2 text-dark rounded-md outline-none focus:border-light"
                        onClick={() => setNavbar(!navbar)}
                    >
                    {navbar ? (
                        <XMarkIcon icon={XMarkIcon} className="h-6 w-6 text-light" />
                    ) : (
                        <Bars3BottomRightIcon icon={Bars3BottomRightIcon} className="h-6 w-6 text-light" />
                    )}
                    </button>
                </div>
            </div>
            <div className={`flex-1 justify-self-center px-0 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
                <ul className="h-screen md:h-auto items-center justify-end md:flex">
                    <li className="pb-6 md:pb-3 text-lg text-light py-2 md:px-6 text-center border-b-2 md:border-b-0 border-light-green hover:text-black hover:bg-light-green md:hover:bg-transparent transition ease-in duration-150">
                        <Link href="#benefits" onClick={() => setNavbar(!navbar)}>
                            Benefits
                        </Link>
                    </li>
                    <li className="pb-6 md:pb-3 text-lg text-light py-2 md:pr-6 md:pl-0 text-center border-b-2 border-light-green hover:bg-light-green hover:text-black md:border-0 md:hover:bg-transparent transition ease-in duration-150">
                        <Link href="#tips" onClick={() => setNavbar(!navbar)}>
                            Tips
                        </Link>
                    </li>
                    <li className="pb-6 text-lg text-light py-2 md:px-4 md:py-1.5 text-center border-b-2 md:border-b-0 border-light-green hover:text-black  hover:bg-light-green md:bg-light-green md:text-black md:text-[14px] md:font-semibold md:rounded md:shadow-sm md:hover:opacity-80 transition ease-in duration-150">
                        <Link href="#lets-go" onClick={() => setNavbar(!navbar)}>
                            Get started
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Nav
