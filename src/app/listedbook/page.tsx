import ReadBooks from "@/components/listedBooksPage/ReadBooks";
import WishlistBooks from "@/components/listedBooksPage/WishlistBooks";
import React from "react";

const ListedBook = () => {
  return (
    <div className="container mx-auto px grid gap-10 px-4 py-12 md:px-12">
      <h3 className="relative overflow-hidden rounded-3xl
          bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200
          px-6 py-10
          shadow-sm
          sm:px-10 sm:py-14
          lg:px-16 lg:py-16 text-2xl font-bold text-center">
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
