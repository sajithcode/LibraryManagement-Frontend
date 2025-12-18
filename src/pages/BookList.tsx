import { useEffect, useState } from "react";
import { Book } from "../types/book";
import { useNavigate } from "react-router-dom";
import { deleteBook, getBooks } from "../api/book.api";
import BookTable from "../components/books/BookTable";

export default function BookList() {
    const [books, setBooks] = useState<Book[]>([]);
    const navigate = useNavigate();

    const loadBooks = async () => {
        const res = await getBooks();
        setBooks(res.data);
    };

    useEffect(()=>{
        loadBooks();
    }, []);

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

      <BookTable
        books={books}
        onEdit={(id) => navigate(`/books/edit/${id}`)}
        onDelete={async (id) => {
          await deleteBook(id);
          loadBooks();
        }}
      />
    </div>
  )
}
