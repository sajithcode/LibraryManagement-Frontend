import { useState } from "react";

interface Props {
  initialData?: {
    title: string;
    author: string;
    description?: string;
  };
  onSubmit: (data: any) => void;
}

export default function BookForm({ initialData, onSubmit }: Props) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [author, setAuthor] = useState(initialData?.author || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ title, author, description });
      }}
      className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-100"
    >
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white"
          placeholder="Enter book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Author
        </label>
        <input
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white"
          placeholder="Enter author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white resize-none"
          placeholder="Enter book description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition duration-200 shadow-md hover:shadow-lg"
      >
        Save Book
      </button>
    </form>
  );
}
