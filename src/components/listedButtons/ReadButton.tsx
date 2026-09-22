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
      className="w-32 rounded-xl btn btn-outline py-6 font-semibold text-gray-800 transition"
      onClick={hendaleReadButton}
    >
      Read
    </button>
  );
};

export default ReadButton;
