import ReadBooks from "@/components/listedBooksPage/ReadBooks";
import WishlistBooks from "@/components/listedBooksPage/WishlistBooks";
import React from "react";

const ListedBook = () => {
  return (
    <div className="container mx-auto py-7 grid gap-10">
      <h3 className="flex items-center justify-center w-full h-30 bg-slate-200 text-3xl font-bold rounded-2xl">
        Books
      </h3>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Book"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <ReadBooks />
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <WishlistBooks />
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
