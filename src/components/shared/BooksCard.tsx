import { IBook } from '@/types/BookType';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

interface BookCardProps{
    book: IBook
}

const BooksCard = ({book}:BookCardProps) => {
    return (
        <Link href={`/books/${book.bookId}`}>
        <div className="w-full h-120 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-lg flex flex-col justify-between">
            {/* Cover image area */}
            <div className="flex items-center justify-center rounded-2xl bg-slate-200 p-6">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={400}
                    height={560}
                    className="h-40 w-auto rounded-md object-contain"
                    sizes="400px"
                />
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
                {book.tags.map((tag,ind) => (
                    <span
                    key={ind}
                        className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Title */}
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
                {book.bookName}
            </h3>

            {/* Author */}
            <p className="mt-1 text-gray-700">By : {book.author}</p>

            {/* Dashed separator */}
            <div className="mt-4 border-t border-dashed border-gray-300" />

            {/* Category + Rating */}
            <div className="mt-3 flex items-center justify-between">
                <span className="text-gray-900">{book.category}</span>
                <span className="flex items-center gap-1 text-gray-900">
                    {book.rating.toFixed(2)}
                    <FaStar />
                </span>
            </div>
        </div>
        </Link>
    );
};

export default BooksCard;