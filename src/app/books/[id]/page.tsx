import { IBook } from "@/types/BookType";
import Image from "next/image";
import ReadButton from "../../../components/listedButtons/ReadButton";
import { getBooks } from "@/lib/books";
import WishlistButton from "@/components/listedButtons/WishlistButton";

interface BookDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const BookDetails = async ({ params }: BookDetailsProps) => {
  const books = await getBooks();
  const { id } = await params;
  const book = books.find((book: IBook) => book.bookId === Number(id)) as IBook;
  return (
    <div className="bg-base-200 px-4 py-12 md:px-12">
      <div className="mx-auto container rounded-3xl bg-white shadow-lg">
        <div className="grid grid-cols-[658px_1fr]">
          {/* Left Column: Book Cover Image */}
          <div className="h-full">
            <div className="h-full w-full">
              <Image
                src={book.image}
                alt={book.bookName}
                width={598}
                height={300}
                className="w-full object-cover rounded-l-3xl"
              />
            </div>
          </div>

          {/* Right Column: Book Details */}
          <div className="p-8 md:p-12">
            {/* Title & Author */}
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              {book.bookName}
            </h1>
            <p className="mt-2 text-xl text-gray-600">By : {book.author}</p>

            <div className="my-6 border-t border-gray-400" />

            {/* Genre */}
            <p className="text-gray-900 text-xl">{book.category}</p>

            <div className="my-6 border-t border-gray-400" />

            {/* Review */}
            <div>
              <span className="font-semibold text-md text-gray-900">
                Review :{" "}
              </span>
              <p className="mt-1 leading-relaxed text-md text-gray-600">
                {book.review}
              </p>
            </div>

            {/* Tags */}
            <div className="mt-6 flex items-center gap-3">
              <span className="font-semibold text-gray-900">Tag</span>
              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="my-6 border-t border-gray-200" />

            {/* Meta Info Grid */}
            <div className="grid grid-cols-2 gap-y-3 text-sm md:text-base">
              <span className="text-gray-500">Number of Pages:</span>
              <span className="font-semibold text-gray-900">
                {book.totalPages}
              </span>

              <span className="text-gray-500">Publisher:</span>
              <span className="font-semibold text-gray-900">
                {book.publisher}
              </span>

              <span className="text-gray-500">Year of Publishing:</span>
              <span className="font-semibold text-gray-900">
                {book.yearOfPublishing}
              </span>

              <span className="text-gray-500">Rating:</span>
              <span className="font-semibold text-gray-900">{book.rating}</span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex items-center gap-4">
              <ReadButton book={book} />

              <WishlistButton book={book} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
