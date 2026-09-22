'use client'
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/BookType";
import React, { useContext } from "react";

interface ReadBookProps{
    book: IBook
}
const WishlistButton = ({book}: ReadBookProps) => {
    const wishlistButton = useContext(BooksContext);
    const {wishList,setWishlist} = wishlistButton;
    const handleWishlistButton = () => {
        setWishlist([...wishList,book])
    }
  return (
    <button className="inline-flex items-center gap-2
                  rounded-xl bg-emerald-500
                  sm:px-4 sm:py-3.5 px-3 py-2.5
                  sm:text-sm text-[12px] font-bold text-white
                  shadow-lg shadow-emerald-500/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-600
                  hover:shadow-xl hover:shadow-emerald-500/25
                  active:translate-y-0" onClick={handleWishlistButton}>
      Add to Wishlist
    </button>
  );
};

export default WishlistButton;
