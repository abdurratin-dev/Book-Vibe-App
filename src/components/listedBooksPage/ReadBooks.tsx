"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/BookType";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";

const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext);
  if (readBooks.length === 0) {
    return (
      <div className="flex justify-center items-center sm:border-3 border-2 border-dashed border-gray-500 rounded-2xl h-120">
        <p className="text-xl font-bold text-gray-500">0 Books in Read List</p>
      </div>
    );
  }
  return (
    <div className="grid gap-5">
      {readBooks.map((book: IBook, ind: number) => (
        <div
          key={ind}
          className="group flex min-h-[100px] items-center justify-between gap-3 rounded-2xl border border-slate-300 bg-gradient-to-br
        from-slate-100 to-slate-200 p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg sm:gap-5 sm:p-4"
        >
          {/* Left Section */}
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-5">
            {/* App Image */}
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-slate-100 shadow-sm sm:h-20 sm:w-20 sm:rounded-2xl">
              <Image
                src={book.image}
                alt={book.bookName}
                fill
                sizes="(max-width: 640px) 56px, 80px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* App Information */}
            <div className="min-w-0 flex-1">
              {/* Title */}
              <h2 className="truncate text-sm font-bold text-slate-900 sm:text-lg">
                {book.bookName}
              </h2>

              {/* Company */}
              <p className="mt-0.5 truncate text-xs text-slate-500 sm:text-sm">
                {book.author}
              </p>

              {/* Stats */}
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:gap-x-5 sm:text-sm">

                {/* Rating */}
                <div className="flex items-center gap-1.5 text-orange-500">
                  <FaStar size={13} className="fill-orange-500" />
                  <span className="font-medium">{book.rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Uninstall Button */}
          <div className="shrink-0">
            <Link
                href={`/books/${book.bookId}`}
                className="
                  inline-flex items-center gap-2
                  rounded-xl bg-emerald-500
                  sm:px-6 sm:py-3.5 px-3 py-2.5
                  sm:text-sm text-[12px] font-bold text-white
                  shadow-lg shadow-emerald-500/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-600
                  hover:shadow-xl hover:shadow-emerald-500/25
                  active:translate-y-0
                "
              >
                View the list
              </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadBooks;
