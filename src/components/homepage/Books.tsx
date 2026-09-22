import { IBook } from "@/types/BookType";
import BooksCard from "../shared/BooksCard";
import { getBooks } from "@/lib/books";


const Books = async() => {
    const books = await getBooks();
    return (
        <section className="bg-base-200 py-15">
        <div className="container mx-auto grid gap-9">
            <h3 className="font-bold text-4xl text-center">Explore Popular Books</h3>
            <div className="grid grid-cols-3 gap-8">
                {
                    books.slice(0,6).map((book: IBook,ind: number) => <BooksCard key={ind} book={book} />)
                }
            </div>
        </div>
        </section>
    );
};

export default Books;