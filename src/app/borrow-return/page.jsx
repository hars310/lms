"use client";

import { useState } from "react";

export default function BorrowReturn() {
  const [bookId, setBookId] = useState("");
  const [action, setAction] = useState("borrow");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `${action === "borrow" ? "Borrowed" : "Returned"} book with ID: ${bookId}`
    );
    setBookId("");
  };

  return (
   <div className="min-h-screen flex justify-center items-center">
     <div className="w-1/3 mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Borrow/Return Book
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Book ID Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Book ID</label>
          <input
            type="text"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
            placeholder="Enter the book ID"
            required
          />
        </div>

        {/* Action Selection */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Action</label>
          <select
            value={action}
            onChange={(e) => setAction(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
          >
            <option value="borrow">Borrow</option>
            <option value="return">Return</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg shadow hover:bg-indigo-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
   </div>
  );
}
