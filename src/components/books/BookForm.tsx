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
      className="space-y-4"
    >
      <input
        className="w-full border p-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full border p-2"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <textarea
        className="w-full border p-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="bg-black text-white px-4 py-2 rounded">Save</button>
    </form>
  );
}
