import Link from "next/link";

const Navber = () => {
    const navLinks = <>
    <li><Link href='/' className="font-bold text-black hover:text-gray-700 transition duration-300">Home</Link></li>
    <li><Link href='/books' className="font-bold text-black hover:text-gray-700 transition duration-300">Books</Link></li>
    <li><Link href='/listedbook' className="font-bold text-black hover:text-gray-700 transition duration-300">Listed Book</Link></li>
    <li><Link href='/pagestoread' className="font-bold text-black hover:text-gray-700 transition duration-300">Pages to Read</Link></li>
    </>
    return (
        <div>

        <nav className="bg-white/5 shadow-sm backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <div className="navbar container mx-auto" >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link href='/' className="font-bold text-xl">Book vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-6">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <button className="btn btn-success">Sign in</button>
                <button className="btn btn-info">Sign up</button>
            </div>
        </div>
        </nav>
        <div className="h-20"></div>
        </div>
    );
};

export default Navber;