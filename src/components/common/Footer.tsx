export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-auto">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Library Management System
      </p>
    </footer>
  );
}
