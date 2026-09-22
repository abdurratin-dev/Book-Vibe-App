import { IBook } from "@/types/BookType";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface BookCardProps {
  book: IBook;
}

const BooksCard = ({ book }: BookCardProps) => {
  return (
    <Link href={`/books/${book.bookId}`} className="block h-full">
      <div
        className="
      group flex h-full min-h-[480px] flex-col overflow-hidden
      rounded-3xl border border-slate-200 bg-white p-3
      shadow-sm transition-all duration-300
      hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl
      sm:p-4
    "
      >
        {/* Cover Image */}
        <div
          className="
        relative flex h-52 items-center justify-center
        overflow-hidden rounded-2xl bg-gradient-to-br
        from-slate-100 to-slate-200 p-5
        sm:h-60 sm:p-6
      "
        >
          {/* Decorative background */}
          <div
            className="
          absolute -right-8 -top-8 h-24 w-24
          rounded-full bg-white/40 blur-2xl
        "
          />

          <Image
            src={book.image}
            alt={book.bookName}
            width={400}
            height={560}
            className="
          relative h-40 w-auto rounded-lg object-contain
          shadow-md transition-transform duration-500
          group-hover:scale-105 group-hover:-rotate-1
          sm:h-48
        "
            sizes="(max-width: 640px) 160px, 200px"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col px-1 pt-4 sm:px-2">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {book.tags.slice(0, 3).map((tag, ind) => (
              <span
                key={ind}
                className="
              rounded-full bg-emerald-50 px-3 py-1
              text-xs font-semibold text-emerald-700
              ring-1 ring-inset ring-emerald-100
            "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3
            className="
          mt-3 line-clamp-2 text-lg font-bold
          leading-snug tracking-tight text-slate-900
          transition-colors group-hover:text-emerald-700
          sm:text-xl
        "
          >
            {book.bookName}
          </h3>

          {/* Author */}
          <p className="mt-1 truncate text-sm text-slate-500">
            By <span className="font-medium text-slate-700">{book.author}</span>
          </p>

          {/* Push footer to bottom */}
          <div className="mt-auto">
            {/* Separator */}
            <div className="my-4 border-t border-dashed border-slate-200" />

            {/* Category + Rating */}
            <div className="flex items-center justify-between gap-3">
              {/* Category */}
              <span
                className="
              truncate rounded-lg bg-slate-100
              px-3 py-1.5 text-xs font-medium text-slate-600
            "
              >
                {book.category}
              </span>

              {/* Rating */}
              <span
                className="
              flex shrink-0 items-center gap-1.5
              rounded-lg bg-amber-50 px-3 py-1.5
              text-sm font-bold text-amber-700
            "
              >
                <FaStar className="text-amber-500" />
                {book.rating.toFixed(2)}
              </span>
            </div>

            {/* View Details */}
            <div
              className="mt-4 inline-flex items-center justify-center gap-1
                  rounded-xl bg-emerald-500 w-full
                  sm:px-4 sm:py-3.5 px-3 py-2.5
                  sm:text-sm text-[12px] font-bold text-white
                  shadow-lg shadow-emerald-500/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-600
                  hover:shadow-xl hover:shadow-emerald-500/25
                  active:translate-y-0
          "
            >
              View Details
              <span
                className="
              ml-2 transition-transform duration-300
              group-hover:translate-x-1
            "
              >
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BooksCard;
