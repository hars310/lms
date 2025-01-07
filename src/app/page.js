import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Library Management System
        </h1>
        <p className="text-center text-gray-600">
          Manage your library efficiently with options to add, list, and borrow books.
        </p>
        <nav className="space-y-4">
          <Link
            href="/add-book"
            className="block w-full text-center text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition duration-200"
          >
            Add New Book
          </Link>
          <Link
            href="/all-books"
            className="block w-full text-center text-lg font-medium text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition duration-200"
          >
            List All Books
          </Link>
          {/* <Link
            href="/borrow-return"
            className="block w-full text-center text-lg font-medium text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded transition duration-200"
          >
            Borrow/Return Books
          </Link> */}
        </nav>
      </div>
    </div>
  );
}
