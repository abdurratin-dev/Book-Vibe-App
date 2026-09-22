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
    <button className="w-35 btn btn-success rounded-xl py-6 font-semibold text-white transition" onClick={handleWishlistButton}>
      Add to Wishlist
    </button>
  );
};

export default WishlistButton;
