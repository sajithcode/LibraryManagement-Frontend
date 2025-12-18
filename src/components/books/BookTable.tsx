import { Book } from '../../types/book'

interface Props{
    books: Book[];
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

export default function BookTable({books, onDelete, onEdit}: Props) {
  return (
    <table className="w-full border mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">Title</th>
          <th className="p-2 border">Author</th>
          <th className="p-2 border">Description</th>
          <th className="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.bookID}>
            <td className="p-2 border">{book.title}</td>
            <td className="p-2 border">{book.author}</td>
            <td className="p-2 border max-w-xs truncate">{book.description || "-"}</td>
            <td className="p-2 border space-x-2">
              <button
                onClick={() => onEdit(book.bookID)}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(book.bookID)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

