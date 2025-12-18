import api from "./axios";
import { Book } from "../types/book";

export const getBooks = () => api.get<Book[]>("/books");

export const getBookById = (id: number) => api.get<Book>(`/books/${id}`);

export const createBook = (data: Omit<Book, "bookID">) =>
  api.post("/books", data);

export const updateBook = (id: number, data: Omit<Book, "bookID">) =>
  api.put(`/books/${id}`, data);

export const deleteBook = (id: number) => api.delete(`/books/${id}`);
