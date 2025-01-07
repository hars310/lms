// "use client";
// import { useEffect, useState } from "react";

// export default function AllBooks() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     fetch("/api/books")
//       .then((response) => response.json())
//       .then((data) => setBooks(data))
//       .catch((err) => console.error("Failed to fetch books:", err));
//   }, []);

//   const handleBorrow = async (bookId) => {
//     try {
//       const response = await fetch("/api/borrow", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ bookId }),
//       });

//       if (response.ok) {
//         const updatedBook = await response.json();
//         setBooks((prevBooks) =>
//           prevBooks.map((book) =>
//             book._id === bookId ? { ...book, isBorrowed: true } : book
//           )
//         );
//         alert(updatedBook.message);
//       } else {
//         const error = await response.json();
//         alert(error.message || "Failed to borrow book");
//       }
//     } catch (err) {
//       console.error("Failed to borrow book:", err);
//     }
//   };

//   const handleReturn = async (bookId) => {
//     try {
//       const response = await fetch("/api/return", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ bookId }),
//       });

//       if (response.ok) {
//         const updatedBook = await response.json();
//         setBooks((prevBooks) =>
//           prevBooks.map((book) =>
//             book._id === bookId ? { ...book, isBorrowed: false } : book
//           )
//         );
//         alert(updatedBook.message);
//       } else {
//         const error = await response.json();
//         alert(error.message || "Failed to return book");
//       }
//     } catch (err) {
//       console.error("Failed to return book:", err);
//     }
//   };

//   const getCoverImage = (ISBN) => {
//     return ISBN
//       ? `https://covers.openlibrary.org/b/isbn/${ISBN}-M.jpg`
//       : "https://via.placeholder.com/128x193?text=No+Cover";
//   };

//   return (
//     <div className="max-w-2xl mx-auto shadow-lg rounded-lg p-6 sm:p-8">
//       <h2 className="text-3xl font-bold text-white mb-6 text-center">
//         All Books
//       </h2>
//       <ul className="space-y-6">
//         {books.map((book) => (
//           <li
//             key={book._id}
//             className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
//           >
//             <div className="flex flex-col sm:flex-row justify-around">
//               <div className="w-full sm:w-1/3 flex justify-center items-center p-4">
//                 <img
//                   src={getCoverImage(book.ISBN)}
//                   alt={`${book.title} cover`}
//                   className="h-48 object-cover"
//                 />
//               </div>

//               <div className="w-full sm:w-2/3 p-4">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   {book.title}
//                 </h3>
//                 <p className="text-gray-600">Author: {book.author}</p>
//                 <div className="mt-4 text-sm text-gray-700 space-y-1">
//                   <p>Published Year: {book.publishedYear}</p>
//                   <p>ISBN: {book.ISBN}</p>
//                   <p>Language: {book.language}</p>
//                   <p>Publisher: {book.publisher}</p>
//                   <p>Total Pages: {book.totalPages}</p>
//                 </div>

//                 {book.isBorrowed ? (
//                   <button
//                     onClick={() => handleReturn(book._id)}
//                     className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition duration-200"
//                   >
//                     Return
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => handleBorrow(book._id)}
//                     className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-200"
//                   >
//                     Borrow
//                   </button>
//                 )}
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";

// export default function AllBooks() {
//   const [books, setBooks] = useState([]);
//   const [editingBook, setEditingBook] = useState(null); // For editing a book
//   const [formValues, setFormValues] = useState({}); // Form values for editing

//   useEffect(() => {
//     fetch("/api/books")
//       .then((response) => response.json())
//       .then((data) => setBooks(data))
//       .catch((err) => console.error("Failed to fetch books:", err));
//   }, []);

//   const handleBorrow = async (bookId) => {
//     try {
//       const response = await fetch("/api/borrow", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ bookId }),
//       });

//       if (response.ok) {
//         const updatedBook = await response.json();
//         setBooks((prevBooks) =>
//           prevBooks.map((book) =>
//             book._id === bookId ? { ...book, isBorrowed: true } : book
//           )
//         );
//         alert(updatedBook.message);
//       } else {
//         const error = await response.json();
//         alert(error.message || "Failed to borrow book");
//       }
//     } catch (err) {
//       console.error("Failed to borrow book:", err);
//     }
//   };

//   const handleReturn = async (bookId) => {
//     try {
//       const response = await fetch("/api/return", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ bookId }),
//       });

//       if (response.ok) {
//         const updatedBook = await response.json();
//         setBooks((prevBooks) =>
//           prevBooks.map((book) =>
//             book._id === bookId ? { ...book, isBorrowed: false } : book
//           )
//         );
//         alert(updatedBook.message);
//       } else {
//         const error = await response.json();
//         alert(error.message || "Failed to return book");
//       }
//     } catch (err) {
//       console.error("Failed to return book:", err);
//     }
//   };

//   const handleUpdate = (book) => {
//     setEditingBook(book);
//     setFormValues({
//       title: book.title,
//       author: book.author,
//       publishedYear: book.publishedYear,
//       ISBN: book.ISBN,
//       language: book.language,
//       publisher: book.publisher,
//       totalPages: book.totalPages,
//     });
//   };

//   const saveUpdate = async () => {
//     try {
//       const response = await fetch("/api/books", {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           id: editingBook._id,
//           updates: formValues,
//         }),
//       });

//       if (response.ok) {
//         const updatedBook = await response.json();
//         setBooks((prevBooks) =>
//           prevBooks.map((book) =>
//             book._id === editingBook._id ? updatedBook.updatedBook : book
//           )
//         );
//         alert("Book updated successfully");
//         setEditingBook(null); // Close the edit form
//       } else {
//         const error = await response.json();
//         alert(error.error || "Failed to update book");
//       }
//     } catch (err) {
//       console.error("Failed to update book:", err);
//     }
//   };

//   const handleDelete = async (bookId) => {
//     if (!confirm("Are you sure you want to delete this book?")) return;

//     try {
//       const response = await fetch("/api/books", {
//         method: "DELETE",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ id: bookId }),
//       });

//       if (response.ok) {
//         setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
//         alert("Book deleted successfully");
//       } else {
//         const error = await response.json();
//         alert(error.error || "Failed to delete book");
//       }
//     } catch (err) {
//       console.error("Failed to delete book:", err);
//     }
//   };

//   const getCoverImage = (ISBN) => {
//     return ISBN
//       ? `https://covers.openlibrary.org/b/isbn/${ISBN}-M.jpg`
//       : "https://via.placeholder.com/128x193?text=No+Cover";
//   };

//   return (
//     <div className="max-w-2xl mx-auto shadow-lg rounded-lg p-6 sm:p-8">
//       <h2 className="text-3xl font-bold text-white mb-6 text-center">
//         All Books
//       </h2>
//       {editingBook && (
//         <div className="bg-white p-4 rounded-lg shadow-md mb-6">
//           <h3 className="text-xl font-bold mb-4">Edit Book</h3>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               saveUpdate();
//             }}
//           >
//             <div className="space-y-4">
//               {Object.keys(formValues).map((key) => (
//                 <div key={key}>
//                   <label className="block text-gray-700">{key}</label>
//                   <input
//                     className="w-full p-2 border rounded-lg"
//                     type="text"
//                     value={formValues[key]}
//                     onChange={(e) =>
//                       setFormValues({ ...formValues, [key]: e.target.value })
//                     }
//                   />
//                 </div>
//               ))}
//             </div>
//             <div className="mt-4">
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-200"
//               >
//                 Save
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setEditingBook(null)}
//                 className="ml-2 px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition duration-200"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//       <ul className="space-y-6">
//         {books.map((book) => (
//           <li
//             key={book._id}
//             className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
//           >
//             <div className="flex flex-col sm:flex-row justify-around">
//               <div className="w-full sm:w-1/3 flex justify-center items-center p-4">
//                 <img
//                   src={getCoverImage(book.ISBN)}
//                   alt={`${book.title} cover`}
//                   className="h-48 object-cover"
//                 />
//               </div>

//               <div className="w-full sm:w-2/3 p-4">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   {book.title}
//                 </h3>
//                 <p className="text-gray-600">Author: {book.author}</p>
//                 <div className="mt-4 text-sm text-gray-700 space-y-1">
//                   <p>Published Year: {book.publishedYear}</p>
//                   <p>ISBN: {book.ISBN}</p>
//                   <p>Language: {book.language}</p>
//                   <p>Publisher: {book.publisher}</p>
//                   <p>Total Pages: {book.totalPages}</p>
//                 </div>

//                 <div className="mt-4 space-x-2">
//                   {book.isBorrowed ? (
//                     <button
//                       onClick={() => handleReturn(book._id)}
//                       className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition duration-200"
//                     >
//                       Return
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => handleBorrow(book._id)}
//                       className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-200"
//                     >
//                       Borrow
//                     </button>
//                   )}
//                   <button
//                     onClick={() => handleUpdate(book)}
//                     className="px-4 py-2 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700 transition duration-200"
//                   >
//                     Update
//                   </button>
//                   <button
//                     onClick={() => handleDelete(book._id)}
//                     className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition duration-200"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";

export default function AllBooks() {
  const [books, setBooks] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false); // Track if the user is admin
  const [editingBook, setEditingBook] = useState(null); // For editing a book
  const [formValues, setFormValues] = useState({}); // Form values for editing

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("/api/user/me", {
          method: "GET",
        });
        if (!res.ok) throw new Error("Failed to fetch user data");

        const userData = await res.json();
        setIsAdmin(userData.role === "admin"); // Set admin status
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();

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

  const handleUpdate = (book) => {
    setEditingBook(book);
    setFormValues({
      title: book.title,
      author: book.author,
      publishedYear: book.publishedYear,
      ISBN: book.ISBN,
      language: book.language,
      publisher: book.publisher,
      totalPages: book.totalPages,
    });
  };

  const saveUpdate = async () => {
    try {
      const response = await fetch("/api/books", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingBook._id,
          updates: formValues,
        }),
      });

      if (response.ok) {
        const updatedBook = await response.json();
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book._id === editingBook._id ? updatedBook.updatedBook : book
          )
        );
        alert("Book updated successfully");
        setEditingBook(null);
      } else {
        const error = await response.json();
        alert(error.error || "Failed to update book");
      }
    } catch (err) {
      console.error("Failed to update book:", err);
    }
  };

  const handleDelete = async (bookId) => {
    if (!confirm("Are you sure you want to delete this book?")) return;

    try {
      const response = await fetch("/api/books", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: bookId }),
      });

      if (response.ok) {
        setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
        alert("Book deleted successfully");
      } else {
        const error = await response.json();
        alert(error.error || "Failed to delete book");
      }
    } catch (err) {
      console.error("Failed to delete book:", err);
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

                <div className="mt-4 space-x-2">
                  {book.isBorrowed ? (
                    <button
                      onClick={() => handleReturn(book._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition duration-200"
                    >
                      Return
                    </button>
                  ) : (
                    <button
                      onClick={() => handleBorrow(book._id)}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-200"
                    >
                      Borrow
                    </button>
                  )}
                  {isAdmin && (
                    <>
                      <button
                        onClick={() => handleUpdate(book)}
                        className="px-4 py-2 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700 transition duration-200"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(book._id)}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition duration-200"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
