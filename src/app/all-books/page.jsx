"use client";
import { useEffect, useState } from "react";

export default function AllBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Failed to fetch books:", err));
  }, []);

  const handleBorrow = async (bookId) => {
    try {
      const response = await fetch("/api/borrow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId }),
      });

      if (response.ok) {
        const updatedBook = await response.json();
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book._id === bookId ? { ...book, isBorrowed: true } : book
          )
        );
        alert(updatedBook.message);
      } else {
        const error = await response.json();
        alert(error.message || "Failed to borrow book");
      }
    } catch (err) {
      console.error("Failed to borrow book:", err);
    }
  };

  const handleReturn = async (bookId) => {
    try {
      const response = await fetch("/api/return", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId }),
      });

      if (response.ok) {
        const updatedBook = await response.json();
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book._id === bookId ? { ...book, isBorrowed: false } : book
          )
        );
        alert(updatedBook.message);
      } else {
        const error = await response.json();
        alert(error.message || "Failed to return book");
      }
    } catch (err) {
      console.error("Failed to return book:", err);
    }
  };

  const getCoverImage = (ISBN) => {
    return ISBN
      ? `https://covers.openlibrary.org/b/isbn/${ISBN}-M.jpg`
      : "https://via.placeholder.com/128x193?text=No+Cover";
  };

  return (
    <div className="max-w-2xl mx-auto shadow-lg rounded-lg p-6 sm:p-8">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        All Books
      </h2>
      <ul className="space-y-6">
        {books.map((book) => (
          <li
            key={book._id}
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row justify-around">
              <div className="w-full sm:w-1/3 flex justify-center items-center p-4">
                <img
                  src={getCoverImage(book.ISBN)}
                  alt={`${book.title} cover`}
                  className="h-48 object-cover"
                />
              </div>

              <div className="w-full sm:w-2/3 p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {book.title}
                </h3>
                <p className="text-gray-600">Author: {book.author}</p>
                <div className="mt-4 text-sm text-gray-700 space-y-1">
                  <p>Published Year: {book.publishedYear}</p>
                  <p>ISBN: {book.ISBN}</p>
                  <p>Language: {book.language}</p>
                  <p>Publisher: {book.publisher}</p>
                  <p>Total Pages: {book.totalPages}</p>
                </div>

                {book.isBorrowed ? (
                  <button
                    onClick={() => handleReturn(book._id)}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition duration-200"
                  >
                    Return
                  </button>
                ) : (
                  <button
                    onClick={() => handleBorrow(book._id)}
                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-200"
                  >
                    Borrow
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
