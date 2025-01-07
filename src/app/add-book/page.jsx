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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Book added:\nTitle: ${title}\nAuthor: ${author}\nPublished Year: ${publishedYear}\nISBN: ${ISBN}\nLanguage: ${language}\nPublisher: ${publisher}\nTotal Pages: ${totalPages}`
    );
    setTitle("");
    setAuthor("");
    setPublishedYear("");
    setISBN("");
    setLanguage("");
    setPublisher("");
    setTotalPages("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Book
        </h2>
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
