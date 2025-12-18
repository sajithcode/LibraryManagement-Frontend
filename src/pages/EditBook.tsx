import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getBookById, updateBook } from "../api/book.api";
import BookForm from "../components/books/BookForm";

export default function EditBook() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState<any>(null);

    useEffect(() => {
        getBookById(Number(id)).then((res) => setBook(res.data));
    }, [id]);

    if (!book) return <p>Loading...</p>

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Book</h2>
      <BookForm
        initialData={book}
        onSubmit={async (data) => {
          await updateBook(Number(id), data);
          navigate("/books");
        }}
      />
    </div>
  )
}


