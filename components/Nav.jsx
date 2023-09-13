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
                    <h2 className="text-lg text-light font-bold">Body Shape Calculator</h2>
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
                    <li className="pb-6 md:pb-3 text-lg text-light py-2 md:px-6 text-center border-b-2 md:border-b-0 border-light-green hover:text-black md:hover:text-light-green hover:bg-light-green md:hover:bg-transparent">
                        <Link href="#benefits" onClick={() => setNavbar(!navbar)}>
                            benefits
                        </Link>
                    </li>
                    <li className="pb-6 md:pb-3 text-lg text-light py-2 md:px-6 text-center border-b-2 md:border-b-0 border-light-green hover:text-black md:hover:text-light-green hover:bg-light-green md:hover:bg-transparent">
                        <Link href="#tips" onClick={() => setNavbar(!navbar)}>
                            tips
                        </Link>
                    </li>
                    <li className="pb-6 md:pb-3 text-lg text-light py-2 md:px-6 text-center border-b-2 md:border-b-0 border-light-green hover:text-black md:hover:text-light-green hover:bg-light-green md:hover:bg-transparent">
                        <Link href="#calculator" onClick={() => setNavbar(!navbar)}>
                            calculator
                        </Link>
                    </li>
                    <li className="pb-6 md:pb-3 text-lg text-light py-2 md:px-6 text-center border-b-2 md:border-b-0 border-light-green hover:text-black md:hover:text-light-green hover:bg-light-green md:hover:bg-transparent">
                        <Link href="#ai" onClick={() => setNavbar(!navbar)}>
                            ask sophie
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <Link
                href="#benefits"
                className="uppercase text-sm font-sans text-light"
            >
                Benefits
            </Link>
            <Link
                href="#tips"
                className="uppercase text-sm font-sans text-light"
            >
                How To Measure
            </Link>
            <Link
                href="#lets-go"
                className="uppercase text-sm font-sans text-light"
            >
                Calculator
            </Link>
            <Link
                href="#lets-go"
                className="uppercase bg-light-green px-4 py-2 rounded-full text-sm font-sans"
            >
                Ask Sophie
            </Link> */}
        </nav>



    </div>
  )
}

export default Nav
