export const getBooks = async() => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`, {cache: 'force-cache'});
        const books = await res.json();
        return books
    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
}