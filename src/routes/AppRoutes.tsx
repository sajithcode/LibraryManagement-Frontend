import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BookList from "../pages/BookList";
import AddBook from "../pages/AddBook";
import EditBook from "../pages/EditBook";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/common/ProtectedRoute";

export default function AppRoutes() {
  return (
      <MainLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/books"
            element={
              <ProtectedRoute>
                <BookList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/books/add"
            element={
              <ProtectedRoute>
                <AddBook />
              </ProtectedRoute>
            }
          />
          <Route
            path="/books/edit/:id"
            element={
              <ProtectedRoute>
                <EditBook />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/books" />} />
        </Routes>

        {/* <Routes>
      <Route path='/' element={<Navigate to="/books" />} />
      <Route path='/books' element={<BookList />} />
      <Route path='/books/add' element={<AddBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
    </Routes> */}
      </MainLayout>   
  );
}
