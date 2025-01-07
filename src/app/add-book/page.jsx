"use client";

import { useState } from "react";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [ISBN, setISBN] = useState("");
  const [language, setLanguage] = useState("");
  const [publisher, setPublisher] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const newBook = {
      title,
      author,
      publishedYear,
      ISBN,
      language,
      publisher,
      totalPages: Number(totalPages), // Ensure totalPages is a number
    };

    try {
      const response = await fetch("/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to add book");
      }

      const data = await response.json();
      setSuccess(`Book "${data.book.title}" added successfully!`);
      setTitle("");
      setAuthor("");
      setPublishedYear("");
      setISBN("");
      setLanguage("");
      setPublisher("");
      setTotalPages("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Book
        </h2>

        {error && (
          <div className="mb-4 text-red-600 bg-red-100 p-3 rounded-lg">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 text-green-600 bg-green-100 p-3 rounded-lg">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              placeholder="Enter the book title"
              required
            />
          </div>

          {/* Author Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              placeholder="Enter the author's name"
              required
            />
          </div>

          {/* Published Year Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Published Year
            </label>
            <input
              type="number"
              value={publishedYear}
              onChange={(e) => setPublishedYear(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              placeholder="Enter the published year"
              required
            />
          </div>

          {/* ISBN Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">ISBN</label>
            <input
              type="text"
              value={ISBN}
              onChange={(e) => setISBN(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              placeholder="Enter the ISBN number"
              required
            />
          </div>

          {/* Language Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Language</label>
            <input
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              placeholder="Enter the language"
              required
            />
          </div>

          {/* Publisher Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Publisher</label>
            <input
              type="text"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              placeholder="Enter the publisher's name"
              required
            />
          </div>

          {/* Total Pages Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Total Pages</label>
            <input
              type="number"
              value={totalPages}
              onChange={(e) => setTotalPages(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              placeholder="Enter the total number of pages"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-lg shadow hover:bg-gray-700 transition duration-200"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
