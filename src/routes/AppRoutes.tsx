import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import BookList from '../pages/BookList'
import AddBook from '../pages/AddBook'
import EditBook from '../pages/EditBook'

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/books" />} />
      <Route path='/books' element={<BookList />} />
      <Route path='/books/add' element={<AddBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
    </Routes>
    </BrowserRouter>
  )
}


