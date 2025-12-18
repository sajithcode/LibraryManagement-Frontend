import BookForm from '../components/books/BookForm';
import { createBook } from '../api/book.api';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
    const navigate = useNavigate();

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add Book</h2>
      <BookForm
        onSubmit={async (data) => {
          await createBook(data);
          navigate("/books");
        }}
      />
    </div>
  )
}

