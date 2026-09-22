import Image from "next/image";
import BenerImg from "@/assets/hero_img.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mx-auto w-full container px-4 py-6 md:px-12">
      <div
        className="
          relative overflow-hidden rounded-3xl
          bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200
          px-6 py-10
          shadow-sm
          sm:px-10 sm:py-14
          lg:px-16 lg:py-16
        "
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="max-w-xl">
            <span
              className="
                inline-flex items-center rounded-full
                border border-emerald-200
                bg-emerald-50 px-4 py-1.5
                text-sm font-semibold text-emerald-600
              "
            >
              📚 Featured Collection
            </span>

            <h1
              className="
                mt-5 text-4xl font-extrabold
                leading-[1.1] tracking-tight text-slate-900
                sm:text-5xl
                lg:text-6xl
              "
            >
              Books to freshen up
              <span className="block text-emerald-500">your bookshelf</span>
            </h1>

            <p
              className="
                mt-5 max-w-lg
                text-base leading-7 text-slate-600
                sm:text-lg
              "
            >
              Discover inspiring books, timeless classics, and new favorites
              that deserve a place on your bookshelf.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/books"
                className="
                  inline-flex items-center gap-2
                  rounded-xl bg-emerald-500
                  px-6 py-3.5
                  text-sm font-bold text-white
                  shadow-lg shadow-emerald-500/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-600
                  hover:shadow-xl hover:shadow-emerald-500/25
                  active:translate-y-0
                "
              >
                View the list
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <Link
                href="/books"
                className="
                  rounded-xl px-5 py-3.5
                  text-sm font-semibold text-slate-700
                  transition-colors
                  hover:bg-white/70
                  hover:text-emerald-600
                "
              >
                Explore collection
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="
                relative
                w-full max-w-md
                overflow-hidden rounded-2xl
                bg-white p-2
                shadow-2xl shadow-slate-400/30
                transition duration-500
                hover:-translate-y-2
              "
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={BenerImg}
                  alt="Stack of books"
                  fill
                  priority
                  className="
                    object-cover
                    transition duration-700
                    hover:scale-105"
                />
              </div>

              {/* Image badge */}
              <div
                className="
                  absolute bottom-5 left-5
                  rounded-xl border border-white/40
                  bg-white/90 px-4 py-3
                  shadow-lg backdrop-blur-md
                "
              >
                <p className="text-xs font-medium text-slate-500">
                  Books available
                </p>

                <p className="text-lg font-bold text-slate-900">1,000+ 📖</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
