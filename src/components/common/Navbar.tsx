import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      {/* Logo / Brand */}
      <Link to="/books" className="text-xl font-bold">
        📚 Library
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link
          to="/books"
          className="hover:text-gray-300 transition"
        >
          Books
        </Link>

        {/* AUTH LINKS (enable later) */}
        {/* 
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        */}
      </div>
    </nav>
  );
}
