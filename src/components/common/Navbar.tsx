import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white/10 backdrop-blur-md text-gray-800 px-6 py-4 flex justify-between items-center shadow-lg border-b border-white/20">
      {/* Logo / Brand */}
      <Link
        to="/books"
        className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition duration-200 flex items-center space-x-2"
      >
        <span className="text-3xl">📚</span>
        <span>Library</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        {isAuthenticated ? (
          <>
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/books"
              className="text-gray-700 hover:text-blue-600 transition duration-200 font-medium"
            >
              Books
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200 font-medium shadow-sm hover:shadow-md"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 transition duration-200 font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-gray-700 hover:text-blue-600 transition duration-200 font-medium"
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
