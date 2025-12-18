import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
    const { isAuthenticated, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      {/* Logo / Brand */}
      <Link to="/books" className="text-xl font-bold">
        📚 Library
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6">
        {isAuthenticated ? (
            <>
            <Link
          to="/books"
          className="hover:text-gray-300 transition"
        >
          Books
        </Link>

        <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-1 rounded hover:bg-red-700 transition"
        >
            Logout
        </button>
        </>
        ) : (
            <>
            <Link
              to="/login"
              className="hover:text-gray-300 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="hover:text-gray-300 transition"
            >
              Register
            </Link>
            
            </>

        )}
        

        {/* AUTH LINKS (enable later) */}
        {/* 
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        */}
      </div>
    </nav>
  );
}
