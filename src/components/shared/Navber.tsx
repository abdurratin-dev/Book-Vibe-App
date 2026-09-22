import Link from "next/link";

const Navber = () => {
  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className="font-bold text-black hover:text-gray-700 transition duration-300"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/books"
          className="font-bold text-black hover:text-gray-700 transition duration-300"
        >
          Books
        </Link>
      </li>
      <li>
        <Link
          href="/listedbook"
          className="font-bold text-black hover:text-gray-700 transition duration-300"
        >
          Listed Book
        </Link>
      </li>
      <li>
        <Link
          href="/pagestoread"
          className="font-bold text-black hover:text-gray-700 transition duration-300"
        >
          Pages to Read
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <nav className="bg-white/80 shadow-sm backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <div className="navbar container mx-auto px-4 py-1 md:px-12">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <Link href="/" className="font-bold text-xl">
              Book vibe
            </Link>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="flex gap-6">{navLinks}</ul>
          </div>
          <div className="navbar-end flex gap-3">
            <Link
              href={`/`}
              className="
                  inline-flex items-center gap-2
                  rounded-xl bg-emerald-500
                  sm:px-4 sm:py-2.5 px-3 py-2.5
                  sm:text-sm text-[12px] font-bold text-white
                  shadow-lg shadow-emerald-500/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-600
                  hover:shadow-xl hover:shadow-emerald-500/25
                  active:translate-y-0
                "
            >
              Sign In
            </Link>
            <Link
              href={`/`}
              className="
                  inline-flex items-center gap-2
                  rounded-xl border-1 border-emerald-500
                  sm:px-4 sm:py-2.5 px-3 py-2.5
                  sm:text-sm text-[12px] font-bold text-emerald-500
                  shadow-lg shadow-emerald-500/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-500 hover:text-white
                  hover:shadow-xl hover:shadow-emerald-500/25
                  active:translate-y-0
                "
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-20"></div>
    </div>
  );
};

export default Navber;
