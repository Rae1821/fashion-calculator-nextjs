import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <div className="flex justify-center items-center max-w-6xl mx-auto pt-4">
        {/* <div className="logo w-1/4">
            <Link href="/" className="">
                <Image
                    src="/assets/images/logo-2.png"
                    alt="Body Calc Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                />
            </Link>
        </div> */}
        <nav className="flex justify-between items-center w-full max-w-xl">
            <Link
                href="#benefits"
                className="uppercase text-sm font-sans"
            >
                Benefits
            </Link>
            <Link
                href="#tips"
                className="uppercase text-sm font-sans"
            >
                How To Measure
            </Link>
            <Link
                href="#lets-go"
                className="uppercase text-sm font-sans"
            >
                Calculator
            </Link>
            <Link
                href="#lets-go"
                className="uppercase bg-light-turq px-4 py-2 rounded-full text-sm font-sans"
            >
                Ask Sophie
            </Link>
        </nav>



    </div>
  )
}

export default Nav
