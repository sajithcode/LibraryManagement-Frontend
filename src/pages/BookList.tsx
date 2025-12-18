import { useEffect, useState } from "react";
import { Book } from "../types/book";
import { useNavigate } from "react-router-dom";
import { deleteBook, getBooks } from "../api/book.api";
import BookTable from "../components/books/BookTable";
import { useDebounce } from "../hooks/useDebounce";

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const debouncedSearch = useDebounce(search, 500);

  const loadBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const filteredBooks = books.filter((book)=>
    book.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    book.author.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  useEffect(() => {
  console.log("Debounced value:", debouncedSearch);
}, [debouncedSearch]);
  

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Books</h1>
        <button
          onClick={() => navigate("/books/add")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Book
        </button>
      </div>

      <input 
       type="text"
       placeholder="Search by title or author..."
       value={search}
       onChange={(e)=> setSearch(e.target.value)}
       className="w-full md:w-1/2 border p-2 rounded mb-4"
      />

      <BookTable
        books={filteredBooks}
        onEdit={(id) => navigate(`/books/edit/${id}`)}
        onDelete={async (id) => {
          await deleteBook(id);
          loadBooks();
        }}
      />
      {filteredBooks.length === 0 && (
        <p className="text-gray-500 mt-4">No books found.</p>
      )}
    </div>
  );
}
