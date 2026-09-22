"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/BookType";
import Image from "next/image";
import React, { useContext } from "react";

const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext);
  return (
    <div className="grid gap-5">
      {readBooks.map((book: IBook, ind: number) => (
        <div
          className="group relative bg-white rounded-2xl border border-slate-200 
        hover:border-emerald-300 hover:shadow-xl 
        transition-all duration-300 overflow-hidden cursor-pointer"
          key={ind}
        >
          <div className="flex gap-5 p-5">
            <div className="relative shrink-0 w-28">
              <Image
                src={book.image}
                alt={book.bookName}
                height={300}
                width={400}
                className="w-full h-40 object-cover rounded-lg shadow-md
                         group-hover:scale-105 transition-transform duration-300"
              />
              <div
                className="absolute -top-2 -right-2 flex items-center gap-0.5
                          bg-amber-100 text-amber-700 px-2 py-0.5
                          rounded-full text-xs font-bold shadow"
              >
                {book.rating}
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-between min-w-0">
              <div>
                <h3
                  className="text-lg font-bold text-slate-900 leading-snug
                            line-clamp-1"
                >
                  {book.bookName}
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  by{" "}
                  <span className="text-slate-700 font-medium">
                    {book.author}
                  </span>
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs font-medium
                               bg-emerald-50 text-emerald-700 border border-emerald-200
                               px-2 py-0.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 space-y-1.5">
                <div className="flex items-center text-xs text-slate-500">
                  <span className="font-medium text-slate-600">Publisher:</span>
                  <span className="ml-1 truncate">{book.publisher}</span>
                </div>
                <div className="flex items-center text-xs text-slate-500">
                  <span className="font-medium text-slate-600">Published:</span>
                </div>
                <div className="flex items-center text-xs text-slate-500">
                  <span className="font-medium text-slate-600">Pages:</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2.5">
                <span
                  className="text-xs font-medium bg-blue-50 text-blue-600
                              px-2.5 py-1 rounded-md border border-blue-100"
                >
                  {book.category}
                </span>

                <button
                  className="ml-auto bg-gradient-to-r from-emerald-500 to-emerald-600
                text-white text-xs font-semibold px-4 py-1.5
                          rounded-full shadow hover:from-emerald-600 hover:to-emerald-700
                          active:scale-95 transition-all"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadBooks;
