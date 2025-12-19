import { Book } from "../../types/book";

interface Props {
  books: Book[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

export default function BookTable({ books, onDelete, onEdit }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {books.map((book) => (
        <div
          key={book.bookID}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 overflow-hidden min-h-[250px] flex flex-col"
        >
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
              {book.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">by {book.author}</p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1 ">
              {book.description || "No description available."}
            </p>
            <div className="flex space-x-3 mt-auto">
              <button
                onClick={() => onEdit(book.bookID)}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition duration-200 shadow-sm"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(book.bookID)}
                className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transform hover:scale-105 transition duration-200 shadow-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
