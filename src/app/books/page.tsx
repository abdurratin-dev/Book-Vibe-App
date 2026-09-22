import BooksCard from "@/components/shared/BooksCard";
import { getBooks } from "@/lib/books";
import { IBook } from "@/types/BookType";


const BooksPage = async() => {
    const books = await getBooks();
    return (
        <section className="bg-base-200 py-10">
        <div className="container mx-auto grid gap-9">
            <h3 className="font-bold text-4xl text-center">Explore All Books</h3>
            <div className="grid grid-cols-3 gap-8">
                {
                    books.map((book: IBook,ind: number) => <BooksCard key={ind} book={book} />)
                }
            </div>
        </div>
        </section>
    );
};

export default BooksPage