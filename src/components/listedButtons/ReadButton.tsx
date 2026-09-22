"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/BookType";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

interface ReadBookProps {
  book: IBook;
}
const ReadButton = ({ book }: ReadBookProps) => {
  const readButton = useContext(BooksContext);
  const { readBooks, setReadBooks } = readButton;
  const hendaleReadButton = () => {
    if (readBooks.some((b: IBook) => b.bookId === book.bookId)) {
      toast.warn(`${book.bookName} is already in your Read List!`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      setReadBooks([...readBooks, book]);
      toast.success(`${book.bookName} added to Read List!`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <button
      className="inline-flex items-center gap-2
                  rounded-xl border-1 border-emerald-500
                  sm:px-5 sm:py-3.5 px-3 py-2.5
                  sm:text-sm text-[12px] font-bold text-emerald-500
                  shadow-lg shadow-emerald-500/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-500 hover:text-white
                  hover:shadow-xl hover:shadow-emerald-500/25
                  active:translate-y-0"
      onClick={hendaleReadButton}
    >
      Read
    </button>
  );
};

export default ReadButton;
