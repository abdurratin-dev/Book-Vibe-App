import { IBook } from "@/types/BookType";
import BooksCard from "../shared/BooksCard";
import { getBooks } from "@/lib/books";


const Books = async() => {
    const books = await getBooks();
    return (
        <section className="py-15">
        <div className="container mx-auto grid gap-9 px-4 py-12 md:px-12">
            <h3 className="font-bold text-4xl text-center">Explore Popular Books</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {
                    books.slice(0,6).map((book: IBook,ind: number) => <BooksCard key={ind} book={book} />)
                }
            </div>
        </div>
        </section>
    );
};

export default Books;