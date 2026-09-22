'use client'
import { IBook } from "@/types/BookType";
import React, {  createContext, useState } from "react";

interface ISelectedBooks {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    wishList: IBook[];
    setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<ISelectedBooks>({ readBooks: [], setReadBooks: () => {}, wishList: [], setWishlist: () => {} });


export const BooksProvider= ({children}: {children: React.ReactNode}) => {
    const [readBooks,setReadBooks] = useState<IBook[]>([]);
    const [wishList,setWishlist] = useState<IBook[]>([]);
    const selectedBooks: ISelectedBooks = {
        readBooks,
        setReadBooks,
        wishList,
        setWishlist
    }
    return (
        <BooksContext.Provider value={selectedBooks}>
            {children}
        </BooksContext.Provider>
    );
};
